# nsaicomponents

🌟 A customizable and lightweight component library for **React**, featuring loaders, buttons, modals, and backdrop overlays & Dialogs.

---

## 🚀 Installation

```bash
npm install nsaicomponents
```

---

## 🌟 Loader Usage (Web)

`````jsx

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
bgColor='red'
fullWidth={false}
disabled={false}

onClick={() => alert("Clicked")}

> Click Me
> </Button>;

📦 API Reference: Button

| Prop                      | Type                                                   | Default       | Description                                   |
| ------------------------- | ------------------------------------------------------ | ------------- | --------------------------------------------- |
| `variant`                 | `"text" \| "outlined" \| "contained"`                  | `"contained"` | Button style variant                          |
| `color`                   | `"primary" \| "secondary" \| "inherit"` or hex string  | `"primary"`   | Built-in color key or custom hex color        |
| `bgColor`                 | `string`                                               | —             | Overrides background color (even for `color`) |
| `size`                    | `"small" \| "medium" \| "large"`                       | `"medium"`    | Button size and padding                       |
| `fullWidth`               | `boolean`                                              | `false`       | Makes button span full width                  |
| `disabled`                | `boolean`                                              | `false`       | Disables button interaction                   |
| `loading`                 | `boolean`                                              | `false`       | Shows a loading spinner                       |
| `loadingPosition`         | `"start" \| "end" \| "center"`                         | `"start"`     | Position of the loading spinner               |
| `hideChildrenWhenLoading` | `boolean`                                              | `false`       | Hides button content while loading            |
| `type`                    | `"button" \| "submit" \| "reset"`                      | `"button"`    | HTML button type                              |
| `textTransform`           | `"none" \| "capitalize" \| "uppercase" \| "lowercase"` | `"uppercase"` | CSS text-transform                            |
| `textDecoration`          | `string`                                               | `"none"`      | CSS text-decoration (e.g. "underline")        |
| `hoverBackgroundColor`    | `string`                                               | —             | Custom hover background color                 |
| `hoverColor`              | `string`                                               | —             | Custom hover text color                       |
| `style`                   | `React.CSSProperties`                                  | `{}`          | Inline styles (excluding `:hover`)            |
| `onClick`                 | `function`                                             | —             | Click handler                                 |


🪟 Modal Usage (Web)
import { Modal } from "nsaicomponents";

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  closeOnEscape={true}
  closeOnBackdropClick={true}
  showClose={true}
  size="md"
  fullScreen={false}
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
</Modal>


📦 API Reference: Modal

| Prop                   | Type                                                 | Default    | Description                                                     |
| ---------------------- | ---------------------------------------------------- | ---------- | --------------------------------------------------------------- |
| `open`                 | `boolean`                                            | `false`    | Controls modal visibility                                       |
| `onClose`              | `() => void`                                         | `() => {}` | Called when the modal should be closed                          |
| `title`                | `string`                                             | —          | Optional title shown in the top-left corner                     |
| `children`             | `ReactNode`                                          | —          | Modal content body (scrollable if overflowing)                  |
| `actions`              | `ReactNode`                                          | —          | Modal footer actions (e.g., buttons); stays fixed at the bottom |
| `showClose`            | `boolean`                                            | `true`     | Shows the close `×` icon at the top-right corner                |
| `showBackdrop`         | `boolean`                                            | `true`     | Whether to show a dimmed backdrop behind the modal              |
| `closeOnBackdropClick` | `boolean`                                            | `true`     | Clicking outside the modal will close it                        |
| `closeOnEscape`        | `boolean`                                            | `false`    | Pressing the `Escape` key closes the modal                      |
| `size`                 | `"sm" \| "md" \| "lg"`                               | `"md"`     | Predefined width sizes (`360`, `600`, `960` px)                 |
| `fullScreen`           | `boolean`                                            | `false`    | Makes the modal occupy full viewport (100% width & height)      |
| `position`             | `"center" \| "top" \| "bottom" \| "left" \| "right"` | `"center"` | Position of the modal in the viewport                           |
| `style`                | `React.CSSProperties`                                | `{}`       | Inline styles for the modal container                           |
| `className`            | `string`                                             | `""`       | Custom  classname for outer container styling |





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




🗨️ Dialog Usage
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "nsaicomponents";

<Dialog open={true} onClose={() => alert("Closed")}>
  <DialogTitle>Confirm Action</DialogTitle>
  <DialogContent>
    <DialogContentText>
      Are you sure you want to continue?
    </DialogContentText>
  </DialogContent>
  <DialogActions>
    <button onClick={() => alert("Cancel")}>Cancel</button>
    <button onClick={() => alert("Confirm")}>Confirm</button>
  </DialogActions>
</Dialog>;


📦 API Reference: Dialog
🔹 Dialog
| Prop       | Type        | Default     | Description                                         |
| ---------- | ----------- | ----------- | --------------------------------------------------- |
| `open`     | `boolean`   | `false`     | Controls visibility of the dialog                   |
| `onClose`  | `function`  | `undefined` | Called when backdrop is clicked to close the dialog |
| `children` | `ReactNode` | —           | Dialog content (title, text, actions, etc.)         |

🔹 DialogTitle
| Prop       | Type        | Description               |
| ---------- | ----------- | ------------------------- |
| `children` | `ReactNode` | Title text for the dialog |

🔹 DialogContent
| Prop       | Type        | Description                    |
| ---------- | ----------- | ------------------------------ |
| `children` | `ReactNode` | Main content inside the dialog |


🔹 DialogContentText
| Prop       | Type        | Description                   |
| ---------- | ----------- | ----------------------------- |
| `children` | `ReactNode` | Text description or paragraph |


🔹 DialogActions
| Prop       | Type        | Description                       |
| ---------- | ----------- | --------------------------------- |
| `children` | `ReactNode` | Action buttons (e.g., Cancel, OK) |


🎨 Styling Notes
Dialog is centered on the screen with a semi-transparent black backdrop.

Backdrop closes the dialog when clicked (onClose is triggered).

Clicking inside the dialog will not close it (event propagation is stopped).

Dialog width is capped at 500px and styled with padding and drop shadow.

Easily extendable with inline styles or by wrapping components.






## 🧩 Captcha Usage

````jsx
import Captcha from "nsaicomponents";

<Captcha
  length={6}
  width={200}
  height={50}
  color="#222"
  background="#f2f2f2"
  fontSize={28}
  onChange={(userInput, actualCaptcha) => {
    if (userInput.toUpperCase() === actualCaptcha.toUpperCase()) {
      alert("✅ Valid CAPTCHA");
    } else {
      alert("❌ Invalid CAPTCHA");
    }
  }}
/>;

📦 API Reference
| Prop         | Type       | Default    | Description                                        |
| ------------ | ---------- | ---------- | -------------------------------------------------- |
| `length`     | `number`   | `6`        | Number of characters in the CAPTCHA                |
| `onChange`   | `function` | `() => {}` | Callback that returns `(typedText, actualCaptcha)` |
| `width`      | `number`   | `120`      | Width of the CAPTCHA canvas (px)                   |
| `height`     | `number`   | `40`       | Height of the CAPTCHA canvas (px)                  |
| `background` | `string`   | `#eef5f9`  | Canvas background color                            |
| `fontSize`   | `number`   | `22`       | Font size of CAPTCHA characters (px)               |
| `error`      | `boolean`  | `false`    | If `true`, displays error message below CAPTCHA    |


⚠️ Error Handling
When error={true} is passed, the following message appears below the CAPTCHA:

Enter characters as displayed in image


🔁 Features
Refreshable image with distortion, rotation, and noise

User-friendly design similar to Indian Post

Error display support

Supports all React versions





📦 API Reference


| Prop           | Type        | Default   | Description                                      |          |         |           |
| -------------- | ----------- | --------- | ------------------------------------------------ | -------- | ------- | --------- |
| `variant`      | `string`    | `"body1"` | Typography style (`h1`–`h6`, `body1`, `caption`) |          |         |           |
| `as`           | `string`    | —         | Override HTML tag                                |          |         |           |
| `children`     | `ReactNode` | —         | Text or elements inside                          |          |         |           |
| `color`        | `string`    | `"#000"`  | Text color                                       |          |         |           |
| `fontWeight`   | `number`    | auto      | Font weight override                             |          |         |           |
| `align`        | `string`    | `"left"`  | `left`                                           | `center` | `right` | `justify` |
| `gutterBottom` | `boolean`   | `false`   | Adds margin-bottom                               |          |         |           |
| `noWrap`       | `boolean`   | `false`   | Truncates long text with ellipsis                |          |         |           |
| `style`        | `object`    | `{}`      | Additional styles                                |          |         |           |









📃 License
ISC

👨‍💼 Author
Made with ❤️ by Nizampatnam Sai

---


`````
