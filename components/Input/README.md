# Input

Input field with support for validation messages.

The input is controlled, so a value will always need to be passed to it.

## Usage
```
<Input
  recordField="name"
  value={state.name}
  onChange={changeName}
/>
```

## Input props
#### `recordField: string`
The field which the selected value of the dropdown correlates to.

#### `onChange: function ({ field: string, value: object | string })`
Function that will fire on the input's `onChange`.

#### `onFocus: function ($event)`
Function that will fire on the input's `onFocus`.

#### `onBlur: function ($event)`
Function that will fire on the input's `onBlur`.

#### `onKeyUp: function ($event)`
Function that will fire on the input's `onKeyUp`.

#### `inputAttrs: object`
Optional hash of `input` attributes.

### Validation
#### `validateFunction: function`
Function used to validate the user's input and update `validationErrors` that were triggered by users input. Returns true or false.

#### `validationErrors: arrayOf(string)`
Text to populate the Input's validation message. Will display in red below input.