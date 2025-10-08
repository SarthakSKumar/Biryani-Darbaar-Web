module.exports = {
  apps: [
    {
      name: "biryani-darbaar-client",
      script: "npx",
      args: "serve -s dist -l 5000",
      instances: 1,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
        PORT: 3000,
      },
      env_qa: {
        NODE_ENV: "qa",
        PORT: 4000,
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5000,
      },
      // Error logs
      error_file: "./logs/pm2-error.log",
      out_file: "./logs/pm2-out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      
      // Advanced options
      min_uptime: "10s",
      max_restarts: 10,
      restart_delay: 4000,
    },
  ],
};
