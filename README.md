# nsaicomponents

A customizable and lightweight loading spinner & skeleton component for React and React Native.

## 🚀 Installation

```bash
npm install nsaicomponents


✨ Usage (Web)

import Loader from "nsaicomponents";

const MyComponent = () => (
  <Loader
    size={50}
    color="tomato"
    variant="dots" // "default" | "dots" | "skeleton"
    loading={true}
  >
    Loading...
  </Loader>
);


✨ Usage (React Native)

import Loader from "nsaicomponents";

const MyComponent = () => (
  <Loader
    size={50}
    color="tomato"
    variant="dots" // Same API
    loading={true}
  >
    <Text>Loading...</Text>
  </Loader>
);


| Prop        | Type                                | Default       | Description                                            |
| ----------- | ----------------------------------- | ------------- | ------------------------------------------------------ |
| `size`      | `number`                            | `40`          | Size of the spinner/dots.                              |
| `color`     | `string`                            | auto-detected | Color of the spinner/dots.                             |
| `loading`   | `boolean`                           | `true`        | Whether to show the loader.                            |
| `variant`   | `"default" \| "dots" \| "skeleton"` | `"default"`   | Different styles: spinner, dots, or skeleton.          |
| `speed`     | `number`                            | `1`           | Speed of the animation in seconds.                     |
| `thickness` | `number`                            | `4`           | Thickness of the spinner border (for default variant). |
| `children`  | `ReactNode`                         |               | Optional children to show alongside the loader.        |



💡 Notes
The package auto-detects dark mode (if color is not provided).

The same component works for both React and React Native (using .web.js / .native.js files).
```
