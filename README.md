# nsaicomponents

🎯 A customizable and lightweight loading spinner, dots, and skeleton component for **React** .

---

## 🚀 Installation

```bash
npm install nsaicomponents
```

---

## ✨ Usage (Web)

```jsx
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
```

---

## ✨ Usage (React Native)

```jsx
import Loader from "nsaicomponents";
import { Text } from "react-native";

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
```

---

## 📦 API Reference

| Prop        | Type                                | Default       | Description                                         |
| ----------- | ----------------------------------- | ------------- | --------------------------------------------------- |
| `size`      | `number`                            | `40`          | Size of the spinner or dots.                        |
| `color`     | `string`                            | auto-detected | Loader color. Defaults based on light/dark theme.   |
| `loading`   | `boolean`                           | `true`        | Whether to display the loader.                      |
| `variant`   | `"default" \| "dots" \| "skeleton"` | `"default"`   | Select loader type: spinner, bouncing dots, or bar. |
| `speed`     | `number`                            | `1`           | Animation speed in seconds.                         |
| `thickness` | `number`                            | `4`           | Spinner border thickness (`default` variant only).  |
| `children`  | `ReactNode`                         | —             | Optional content shown below/in the loader.         |

---

## 💡 Notes

- 🎨 Automatically detects **dark mode** and adjusts color unless manually set.
- 💻 Works seamlessly across **React** and **React Native** via platform-specific entry points (`.web.js` / `.native.js`).

---

## 🛠 Coming Soon

- `<Button variant="primary" | "secondary" />`
- Theming support
- TypeScript types

---

## 📄 License

[ISC](./LICENSE)

---

## 👨‍💻 Author

Made with ❤️ by [Nizampatnam Sai](https://github.com/NizampatnamSai)
