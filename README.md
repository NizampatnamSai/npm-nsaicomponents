# nsaicomponents

🌟 A customizable and lightweight component library for **React**, featuring loaders, buttons, modals, and backdrop overlays.

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

📦 API Reference: Loader
| Prop | Type | Default | Description |
| ----------- | ----------------------------------- | ------------- | ------------------------------------------------- |
| `size` | `number` | `40` | Size of the spinner or dots. |
| `color` | `string` | auto-detected | Loader color. Defaults based on light/dark theme. |
| `loading` | `boolean` | `true` | Whether to display the loader. |
| `variant` | `"default" \| "dots" \| "skeleton"` | `"default"` | Type of loader: spinner, dots, or skeleton. |
| `speed` | `number` | `1` | Animation speed in seconds. |
| `thickness` | `number` | `4` | Spinner border thickness (default variant only). |
| `children` | `ReactNode` | — | Optional content shown below/in the loader. |

💪 Button Usage (Web)

import { Button } from "nsaicomponents";

<Button
variant="contained" // "text" | "outlined" | "contained"
color="primary" // "primary" | "secondary" | "inherit" | custom (e.g. "#f44336")
size="medium"
loading={false}
fullWidth={false}
disabled={false}
onClick={() => alert("Clicked")}

> Click Me
> </Button>;

📦 API Reference: Button

| Prop                      | Type                                                   | Default       | Description                        |
| ------------------------- | ------------------------------------------------------ | ------------- | ---------------------------------- |
| `variant`                 | `"text" \| "outlined" \| "contained"`                  | `"contained"` | Button style variant               |
| `color`                   | `"primary" \| "secondary" \| "inherit"` or custom hex  | `"primary"`   | Built-in or custom color support   |
| `size`                    | `"small" \| "medium" \| "large"`                       | `"medium"`    | Size and padding                   |
| `fullWidth`               | `boolean`                                              | `false`       | Makes button take 100% width       |
| `disabled`                | `boolean`                                              | `false`       | Disables interaction               |
| `loading`                 | `boolean`                                              | `false`       | Shows loading spinner inside       |
| `loadingPosition`         | `"start" \| "end" \| "center"`                         | `"start"`     | Where to show the loader           |
| `hideChildrenWhenLoading` | `boolean`                                              | `false`       | Hide button content when loading   |
| `type`                    | `"button" \| "submit" \| "reset"`                      | `"button"`    | HTML button type                   |
| `textTransform`           | `"none" \| "capitalize" \| "uppercase" \| "lowercase"` | `"uppercase"` | Controls text casing               |
| `textDecoration`          | `string`                                               | `"none"`      | Controls text underline/decoration |
| `style`                   | `React.CSSProperties`                                  | `{}`          | Custom inline styles               |
| `onClick`                 | `function`                                             | —             | Click handler                      |

🪟 Modal Usage (Web)
import { Modal } from "nsaicomponents";

<Modal
open={isOpen}
onClose={() => setIsOpen(false)}
title="Example Modal"
closeOnEscape={true}
closeOnBackdropClick={true}
showClose={true}
actions={
<>
<Button variant="outlined" onClick={() => setIsOpen(false)}>
Cancel
</Button>
<Button onClick={handleSubmit}>Submit</Button>
</>
}

> Modal content goes here.
> </Modal>;

📦 API Reference: Modal

| Prop                   | Type                   | Default    | Description                                       |
| ---------------------- | ---------------------- | ---------- | ------------------------------------------------- |
| `open`                 | `boolean`              | `false`    | Controls modal visibility                         |
| `onClose`              | `function`             | `() => {}` | Called when the modal should be closed            |
| `title`                | `string`               | —          | Optional title at the top of the modal            |
| `children`             | `ReactNode`            | —          | Modal body content                                |
| `actions`              | `ReactNode`            | —          | Footer actions area (e.g., buttons)               |
| `showClose`            | `boolean`              | `true`     | Show a top-right close icon                       |
| `showBackdrop`         | `boolean`              | `true`     | Show a dimmed background behind the modal         |
| `closeOnBackdropClick` | `boolean`              | `true`     | Clicking outside closes the modal                 |
| `closeOnEscape`        | `boolean`              | `false`    | Pressing `Escape` closes the modal                |
| `width`                | `number`               | `400`      | Modal width (ignored if `fullWidth` is true)      |
| `maxWidth`             | `"sm" \| "md" \| "lg"` | `"md"`     | Max width breakpoint                              |
| `fullWidth`            | `boolean`              | `false`    | Makes modal stretch to full container width       |
| `position`             | `"center" \| "top"`    | `"center"` | Position of modal in viewport                     |
| `style`                | `object`               | `{}`       | Inline style override                             |
| `className`            | `string`               | `""`       | Optional className for container (for custom CSS) |

🛡️ CustomBackdrop Usage

import { CustomBackdrop } from "nsaicomponents";

<CustomBackdrop open={true} onClick={() => alert("Backdrop clicked")} />;

📦 API Reference: CustomBackdrop

| Prop       | Type        | Default     | Description                                |
| ---------- | ----------- | ----------- | ------------------------------------------ |
| `open`     | `boolean`   | `false`     | Controls visibility of the backdrop        |
| `onClick`  | `function`  | `undefined` | Called when backdrop is clicked            |
| `opacity`  | `number`    | `0.5`       | Controls darkness (0 to 1) of the backdrop |
| `zIndex`   | `number`    | `1300`      | Controls stacking order                    |
| `color`    | `string`    | `"#000"`    | Backdrop background color                  |
| `style`    | `object`    | `{}`        | Custom inline styles                       |
| `children` | `ReactNode` | —           | Optional elements placed inside backdrop   |

📃 License
ISC

👨‍💼 Author
Made with ❤️ by Nizampatnam Sai

---

Let me know if you'd like me to:

- Add **GIF or images** of the components?
- Generate `CustomBackdrop.jsx` for production now?
- Convert this to `README.md` file and export?

Ready to help you ship it!

```

```

```
