import Layout from '../../components/docs-layout';
import toast from 'react-hot-toast';

export const meta = {
  title: 'Documentation',
};

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

# Getting Started

Add beautiful notifications to your React app with [react-hot-toast](https://github.com/timolins/react-hot-toast).

### Install with pnpm

```sh
pnpm add react-hot-toast
```

### Install with NPM

```sh
npm install react-hot-toast
```

## Basic usage

```jsx
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
```

import Layout from '../../components/docs-layout';
import toast, { Toaster } from 'react-hot-toast';

export const meta = {
  title: 'Multiple Toasters',
};

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

# Multiple Toasters

React Hot Toast supports multiple toaster instances in your app, They can be used and configured independently of each other. This is useful for having notifications in different areas of your app.

You can use multiple toasters by creating a [`Toaster`](/docs/toaster) with a unique `toasterId`:

```jsx
<Toaster toasterId="sidebar" />
```

## Example

This example shows two toasters, each maintaining their own state and configuration.

<div className="not-prose flex gap-4 flex-col md:flex-row my-4">
  <div className="relative min-h-[200px] bg-toast-200 text-toast-800 rounded-lg p-4 overflow-hidden flex-1 flex flex-col gap-2">
    <p className="text-lg flex-1 text-center text-toast-300 flex items-center justify-center">Area 1</p>
    <Toaster
      toasterId="area1"
      position="top-center"
      containerStyle={{ position: 'absolute' }}
    />
    <button
      onClick={() => toast('Notification for Area 1', { toasterId: 'area1' })}
      className="bg-toast-600 text-white px-4 py-2 rounded-lg hover:bg-toast-600 w-full"
    >
      Show Toast in Area 1
    </button>
  </div>

  <div className="relative min-h-[200px] rounded-lg p-4 overflow-hidden flex-1 flex flex-col gap-2" style={{ backgroundColor: 'rgba(154, 134, 253, 0.15)' }}>
    <p className="text-lg flex-1 text-center text-[#876fff84] flex items-center justify-center">Area 2</p>
    <Toaster
      toasterId="area2"
      position="top-center"
      containerStyle={{ position: 'absolute' }}
      toastOptions={{
        className: '!text-white px-4 py-2 border !rounded-full',
        style: {
          backgroundColor: 'rgb(154, 134, 253)',
          borderColor: 'rgba(154, 134, 253, 0.3)'
        }
      }}
    />
    <button
      onClick={() => toast('Notification for Area 2', { toasterId: 'area2' })}
      className="text-white px-4 py-2 rounded-lg bg-[#9a86fd] w-full"
    >
      Show Toast in Area 2
    </button>
  </div>
</div>

## Basic Usage

You can create multiple toasters providing unique `toasterId` to each `<Toaster />` component:

```jsx
// Create a toaster with a unique id
<Toaster toasterId="area1" />

// Create another toaster with a unique id
<Toaster toasterId="area2" toastOptions={{ ... }} />
```

To create a toast in a specific toaster, you can pass the `toasterId` to the `toast` function.

```jsx
// Create a toast in area 1
toast('Notification for Area 1', {
  toasterId: 'area1',
});
```

When no `toasterId` is provided, it uses `"default"` as the `toasterId`.

### Positioning the toaster

When placing a toaster in a specific area of your app, set the position to `absolute` and the parent element to `relative`.

```jsx
<div style={{ position: 'relative' }}>
  <Toaster
    toasterId="area1"
    position="top-center"
    containerStyle={{ position: 'absolute' }}
  />
</div>
```

import Layout from '../../components/docs-layout';
import toast from 'react-hot-toast';

export const meta = {
  title: 'Styling',
};

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

# Styling

You can style your notifications globally with the `toastOptions` inside the Toaster component, or for each notification manually.

### Set default for all toasts

```jsx
<Toaster
  toastOptions={{
    className: '',
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
  }}
/>
```

### Set default for specific types

```jsx
<Toaster
  toastOptions={{
    success: {
      style: {
        background: 'green',
      },
    },
    error: {
      style: {
        background: 'red',
      },
    },
  }}
/>
```

### Style per toast

```jsx
toast('I have a border.', {
  style: {
    border: '1px solid black',
  },
});
```

## Change the offset

If you want to change the offset of your notifications, you can adapt the absolute position in `containerStyle`.

```jsx
<Toaster
  containerStyle={{
    top: 20,
    left: 20,
    bottom: 20,
    right: 20,
  }}
/>
```

## Change position of the toaster

By default, the toaster is position fixed in the window. If you want to place it somewhere else, you can overwrite the position with `containerStyle`.

```jsx
<Toaster
  containerStyle={{
    position: 'relative',
  }}
/>
```

## Change offset between toasts

If you want to change the offset between notifications change the gutter.

```jsx
<Toaster gutter={24} />
```

## Change icon color

All icon colors can be changed by supplying a `iconTheme` with a `primary` & `secondary` color.

```jsx
<Toaster
  toastOptions={{
    success: {
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
```

## Change enter and exit animations

In this example, we provide a render function with the default `<ToastBar />`. We overwrite the animation style based on the current state.

```jsx
import { Toaster, ToastBar } from 'react-hot-toast';

<Toaster>
  {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        animation: t.visible
          ? 'custom-enter 1s ease'
          : 'custom-exit 1s ease forwards',
      }}
    />
  )}
</Toaster>;
```

import Layout from '../../components/docs-layout';
import toast from 'react-hot-toast';

export const meta = {
  title: '<ToastBar/> API',
};

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

# `<ToastBar />` API

This is the **default toast component** rendered by the [Toaster](/docs/toaster). You can use this component in a [Toaster](/docs/toaster) with a custom render function to overwrite its defaults.

## Available options

```jsx
<ToastBar
  toast={t}
  style={{}} // Overwrite styles
  position="top-center" // Used to adapt the animation
/>
```

## Add custom content

You can add a **render function to the ToastBar to modify its content**. An object containing The `icon` as well as the `message` are passed into the function.

### Add a dismiss button

In this example we add a basic dismiss button to all toasts, except if the loading one.

```jsx
import { toast, Toaster, ToastBar } from 'react-hot-toast';

<Toaster>
  {(t) => (
    <ToastBar toast={t}>
      {({ icon, message }) => (
        <>
          {icon}
          {message}
          {t.type !== 'loading' && (
            <button onClick={() => toast.dismiss(t.id)}>X</button>
          )}
        </>
      )}
    </ToastBar>
  )}
</Toaster>;
```

import Layout from '../../components/docs-layout';
import toast from 'react-hot-toast';

export const meta = {
  title: 'toast() API',
};

# `toast()` API

Call it to create a toast from anywhere, even outside React. Make sure you add the [`<Toaster/>`](/docs/toaster) component to your app first.

## Available toast options

You can provide `ToastOptions` as the second argument. They will overwrite all options received from [`<Toaster/>`](/docs/toaster).

```js
toast('Hello World', {
  duration: 4000,
  position: 'top-center',

  // Styling
  style: {},
  className: '',

  // Custom Icon
  icon: '👏',

  // Change colors of success/error/loading icon
  iconTheme: {
    primary: '#000',
    secondary: '#fff',
  },

  // Aria
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },

  // Additional Configuration
  removeDelay: 1000,

  // Toaster instance
  toasterId: 'default',
});
```

## Creating a toast

### Blank

```js
toast('Hello World');
```

The most basic variant. It does not have an icon by default, but you can provide one via the options. If you don't want any default styles, use `toast.custom()` instead.

### Success

```js
toast.success('Successfully created!');
```

Creates a notification with an animated checkmark. It can be themed with the `iconTheme` option.

### Error

```js
toast.error('This is an error!');
```

Creates a notification with an animated error icon. It can be themed with the `iconTheme` option.

### Custom (JSX)

```js
toast.custom(<div>Hello World</div>);
```

Creates a custom notification with JSX without default styles.

### Loading

```js
toast.loading('Waiting...');
```

This will create a loading notification. Most likely, you want to update it afterwards. For a friendly alternative, check out `toast.promise()`, which takes care of that automatically.

### Promise

This shorthand is useful for mapping a promise to a toast. It will update automatically when the promise resolves or fails.

#### Simple Usage

```js
const myPromise = fetchData();

toast.promise(myPromise, {
  loading: 'Loading',
  success: 'Got the data',
  error: 'Error when fetching',
});
```

It's recommend to add min-width to your `toast.promise()` calls to **prevent jumps** from different message lengths.

#### Advanced

You can provide a function to the success/error messages to incorporate the result/error of the promise. The third argument are `toastOptions` similiar to [`<Toaster />`](/docs/toaster)

```js
toast.promise(
  myPromise,
  {
    loading: 'Loading',
    success: (data) => `Successfully saved ${data.name}`,
    error: (err) => `This just happened: ${err.toString()}`,
  },
  {
    style: {
      minWidth: '250px',
    },
    success: {
      duration: 5000,
      icon: '🔥',
    },
  }
);
```

#### Using an Async Function

You can also provide a function that returns a promise, which will be called automatically.

```js
toast.promise(
  async () => {
    const { id } = await fetchData1();
    await fetchData2(id);
  },
  {
    loading: 'Loading',
    success: 'Got the data',
    error: 'Error when fetching',
  }
);
```

## Default durations

Every type has its own duration. You can overwrite them `duration` with the toast options. This can be done per toast options or globally by the [`<Toaster/>`](/docs/toaster).

| type      | duration |
| --------- | -------- |
| `blank`   | 4000     |
| `error`   | 4000     |
| `success` | 2000     |
| `custom`  | 4000     |
| `loading` | Infinity |

### Dismiss toast programmatically

You can manually dismiss a notification with `toast.dismiss`. Be aware that it triggers the exit animation and does not remove the Toast instantly. Toasts will auto-remove after 1 second by default.

#### Dismiss a single toast

```js
const toastId = toast.loading('Loading...');

// ...

toast.dismiss(toastId);
```

You can dismiss all toasts at once, by leaving out the `toastId`.

#### Dismiss all toasts at once

```js
toast.dismiss();
```

To remove toasts instantly without any animations, use `toast.remove`.

#### Configure remove delay

```js
toast.success('Successfully created!', { removeDelay: 500 });
```

By default, the remove operation is delayed by 1000ms. This is how long a toast should be kept in the DOM after being dismissed. It is used to play the exit animation. This duration (number in milliseconds) can be configured when calling the toast.

Or, for all toasts, using the Toaster like so:

```js
<Toaster
  toastOptions={{
    removeDelay: 500,
  }}
/>
```

#### Remove toasts instantly

```js
toast.remove(toastId);

// or

toast.remove();
```

### Update an existing toast

Each toast call returns a unique id. Use in the toast options to update the existing toast.

```js
const toastId = toast.loading('Loading...');

// ...

toast.success('This worked', {
  id: toastId,
});
```

### Prevent duplicate toasts

To prevent duplicates of the same kind, you can provide a unique permanent id.

```js
toast.success('Copied to clipboard!', {
  id: 'clipboard',
});
```

### Render JSX custom content

You can provide a React component instead of text. If you don't want any default styles use `toast.custom()` instead.

```jsx
toast(
  <span>
    Custom and <b>bold</b>
  </span>,
  {
    icon: <Icon />,
  }
);
```

You can also supply a function that receives the `Toast` as an argument, giving you access to all properties. This allows you to access the toast id, which can be used to add a dismiss button.

```jsx
toast(
  (t) => (
    <span>
      Custom and <b>bold</b>
      <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
    </span>
  ),
  {
    icon: <Icon />,
  }
);
```

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

import Layout from '../../components/docs-layout';
import toast from 'react-hot-toast';

export const meta = {
  title: '<Toaster/> API',
};

export default ({ children }) => <Layout meta={meta}>{children}</Layout>;

# `<Toaster />` API

This component will render all toasts. Alternatively you can create own renderer with the headless [`useToaster()`](/docs/use-toaster) hook.

## Available options

```jsx
<Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toasterId="default"
  toastOptions={{
    // Define default options
    className: '',
    duration: 5000,
    removeDelay: 1000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      iconTheme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
```

### `position` Prop

You can change the position of all toasts by modifying supplying `positon` prop.

| Positions   |               |              |
| ----------- | ------------- | ------------ |
| top-left    | top-center    | top-right    |
| bottom-left | bottom-center | bottom-right |

### `reverseOrder` Prop

Toasts spawn at top by default. Set to `true` if you want new toasts at the end.

### `containerClassName` Prop

Add a custom CSS class name to toaster div. Defaults to `undefined`.

### `containerStyle` Prop

Customize the style of toaster div. This can be used to change the offset of all toasts

### `gutter` Prop

Changes the gap between each toast. Defaults to `8`.

### `toasterId` Prop

You can change the toasterId to have a different toaster instance. Learn more about [multiple toasters](/docs/multi-toaster). Defaults to `"default"`.

### `toastOptions` Prop

These will act as default options for all toasts. See [`toast()`](/docs/toast) for all available options.

#### Type specific options

You can change the defaults for a specific type by adding, `success: {}`, `error: {}`, `loading: {}` or `custom: {}`.

## Using a custom render function

You can provide your **own render function** to the Toaster by passing it as children. It will be called for each [Toast](https://github.com/timolins/react-hot-toast/blob/main/src/core/types.ts#L34) allowing you to render any component based on the toast state.

### Minimal example

```jsx
import { Toaster, resolveValue } from 'react-hot-toast';

// In your app
<Toaster>
  {(t) => (
    <div
      style={{ opacity: t.visible ? 1 : 0, background: 'white', padding: 8 }}
    >
      {resolveValue(t.message, t)}
    </div>
  )}
</Toaster>;
```

`resolveValue()` is needed to resolve all message types: Text, JSX or a function that resolves to JSX.

### Adapting the default [`<ToastBar/>`](/docs/toast-bar)

You can use this API to modify the default ToastBar as well. In this example we overwrite the animation style based on the current state.

```jsx
import { Toaster, ToastBar } from 'react-hot-toast';

<Toaster>
  {(t) => (
    <ToastBar
      toast={t}
      style={{
        ...t.style,
        animation: t.visible
          ? 'custom-enter 1s ease'
          : 'custom-exit 1s ease forwards',
      }}
    />
  )}
</Toaster>;
```

Check out the [`<ToastBar/>`](/docs/toast-bar) docs for more options.