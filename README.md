# nsaicomponents

🌟 A customizable and lightweight component library for **React** , featuring loaders, buttons, and modals.

---

## 🚀 Installation

```bash
npm install nsaicomponents
```

---

## 🌟 Loader Usage (Web)

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

## 🌟 Loader Usage ()

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

## 📦 API Reference: Loader

| Prop        | Type        | Default       | Description                                        |             |                                                     |
| ----------- | ----------- | ------------- | -------------------------------------------------- | ----------- | --------------------------------------------------- |
| `size`      | `number`    | `40`          | Size of the spinner or dots.                       |             |                                                     |
| `color`     | `string`    | auto-detected | Loader color. Defaults based on light/dark theme.  |             |                                                     |
| `loading`   | `boolean`   | `true`        | Whether to display the loader.                     |             |                                                     |
| `variant`   | \`"default" | "dots"        | "skeleton"\`                                       | `"default"` | Select loader type: spinner, bouncing dots, or bar. |
| `speed`     | `number`    | `1`           | Animation speed in seconds.                        |             |                                                     |
| `thickness` | `number`    | `4`           | Spinner border thickness (`default` variant only). |             |                                                     |
| `children`  | `ReactNode` | —             | Optional content shown below/in the loader.        |             |                                                     |

---

## 💪 Button Usage (Web )

```jsx
import { Button } from "nsaicomponents";

<Button
  variant="primary" // "primary" | "secondary" | "outlined"
  loading={false} // show loader inside
  disabled={false}
  onClick={() => alert("Clicked")}
>
  Click Me
</Button>;
```

---

## 📦 API Reference: Button

| Prop       | Type        | Default     | Description                              |             |                             |
| ---------- | ----------- | ----------- | ---------------------------------------- | ----------- | --------------------------- |
| `variant`  | \`"primary" | "secondary" | "outlined"\`                             | `"primary"` | Visual style of the button. |
| `loading`  | `boolean`   | `false`     | Show a spinner inside the button.        |             |                             |
| `disabled` | `boolean`   | `false`     | Disables the button and reduces opacity. |             |                             |
| `onClick`  | `function`  | —           | Called when the button is clicked.       |             |                             |
| `style`    | `object`    | `{}`        | Inline style overrides.                  |             |                             |
| `children` | `ReactNode` | —           | Content of the button.                   |             |                             |

---

## 🏠 Modal Usage (Web)

```jsx
import { Modal } from "nsaicomponents";

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  closeOnEscape={true} // Optional (default false)
  closeOnBackdropClick={true} // Optional (default true)
  showClose={true}
  actions={
    <>
      <Button variant="outlined" onClick={() => setIsOpen(false)}>
        Cancel
      </Button>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  }
>
  Modal content goes here.
</Modal>;
```

---

## 📦 API Reference: Modal

| Prop                   | Type        | Default    | Description                                        |            |                                |
| ---------------------- | ----------- | ---------- | -------------------------------------------------- | ---------- | ------------------------------ |
| `open`                 | `boolean`   | `false`    | Controls modal visibility.                         |            |                                |
| `onClose`              | `function`  | `() => {}` | Called when the modal should be closed.            |            |                                |
| `title`                | `string`    | —          | Optional title at the top of the modal.            |            |                                |
| `children`             | `ReactNode` | —          | Modal body content.                                |            |                                |
| `actions`              | `ReactNode` | —          | Footer actions area (e.g., buttons).               |            |                                |
| `showClose`            | `boolean`   | `true`     | Show a top-right close icon.                       |            |                                |
| `showBackdrop`         | `boolean`   | `true`     | Show a dimmed background behind the modal.         |            |                                |
| `closeOnBackdropClick` | `boolean`   | `true`     | Clicking outside closes the modal.                 |            |                                |
| `closeOnEscape`        | `boolean`   | `false`    | Pressing `Escape` closes the modal.                |            |                                |
| `width`                | `number`    | `400`      | Modal width (ignored if `fullWidth` is true).      |            |                                |
| `maxWidth`             | \`"sm"      | "md"       | "lg"\`                                             | `"md"`     | Max width breakpoint.          |
| `fullWidth`            | `boolean`   | `false`    | Makes modal stretch to full container width.       |            |                                |
| `position`             | \`"center"  | "top"      | ...\`                                              | `"center"` | Position of modal in viewport. |
| `style`                | `object`    | `{}`       | Inline style override.                             |            |                                |
| `className`            | `string`    | `""`       | Optional className for container (for custom CSS). |            |                                |

---

## 📃 License

[ISC](./LICENSE)

---

## 👨‍💼 Author

Made with ❤️ by [Nizampatnam Sai](https://github.com/NizampatnamSai/npm-nsaicomponents)
