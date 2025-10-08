import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { loginUser, registerUser, logoutUser, refreshAccessToken } from '@/handlers/auth/authApi';
import {
    saveTokens,
    saveUserData,
    getUserData,
    getAccessToken,
    getRefreshToken,
    clearAuthData,
    StoredUserData,
} from '@/handlers/auth/authStorage';
import type { LoginData, RegisterData } from '@/handlers/auth/authApi';

interface AuthContextType {
    user: StoredUserData | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    login: (data: LoginData) => Promise<void>;
    register: (data: RegisterData) => Promise<void>;
    logout: () => Promise<void>;
    refreshToken: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<StoredUserData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Initialize auth state from localStorage
    useEffect(() => {
        const initAuth = () => {
            const userData = getUserData();
            const accessToken = getAccessToken();

            if (userData && accessToken) {
                setUser(userData);
            }
            setIsLoading(false);
        };

        initAuth();
    }, []);

    const login = async (data: LoginData) => {
        try {
            const response = await loginUser(data);

            if (response.success) {
                const { accessToken, refreshToken, user } = response.data;

                // Save tokens and user data
                saveTokens(accessToken, refreshToken);
                saveUserData(user);
                setUser(user);
            } else {
                throw new Error(response.message || 'Login failed');
            }
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message || 'Login failed');
        }
    };

    const register = async (data: RegisterData) => {
        try {
            const response = await registerUser(data);

            if (response.success) {
                const { accessToken, refreshToken, user } = response.data;

                // Save tokens and user data
                saveTokens(accessToken, refreshToken);
                saveUserData(user);
                setUser(user);
            } else {
                throw new Error(response.message || 'Registration failed');
            }
        } catch (error: any) {
            throw new Error(error.response?.data?.message || error.message || 'Registration failed');
        }
    };

    const logout = async () => {
        try {
            const accessToken = getAccessToken();
            await logoutUser(accessToken || undefined);
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            // Clear local data regardless of API call success
            clearAuthData();
            setUser(null);
        }
    };

    const refreshToken = async () => {
        try {
            const currentRefreshToken = getRefreshToken();

            if (!currentRefreshToken) {
                throw new Error('No refresh token available');
            }

            const response = await refreshAccessToken(currentRefreshToken);

            if (response.success) {
                const { accessToken } = response.data;
                const currentRefresh = getRefreshToken();
                if (currentRefresh) {
                    saveTokens(accessToken, currentRefresh);
                }
            }
        } catch (error) {
            // If refresh fails, logout user
            await logout();
            throw error;
        }
    };

    const value: AuthContextType = {
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        register,
        logout,
        refreshToken,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
