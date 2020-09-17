# Button

Standard button component, which accepts a theme, size, and type.

## Usage
```
<Button
  label="Click Me"
  type="primary"
  size="small"
  theme="success"
  onClick={clickBtn}
  className="an-additional-class"
  buttonAttrs={{
    type: 'button',
    name: 'click-me'
  }}
/>
```

## Button props

#### `label: string`
Default label on the button.

#### `type: string ('default' | 'primary' | 'secondary')`
Determines button type.

#### `size: string ('small' | 'normal' | 'large')`
Determines button size.

#### `theme: string ('success')`
Determines color theme of button.

#### `onClick: function`
Function that will be called on the button's `onClick`.

#### `className: string`
Optional additional classname to be applied to the button

#### `buttonAttrs: object`
Optional hash of button attributes.