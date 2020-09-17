# Checkbox

Standard checkbox `input[type='checkbox']` component. There are two ways to use:

## Usage
```
<Checkbox
  label='Add shrimp ($5.00)'
  onChange={checkedShrimp}
  recordField='wantsShrimp'
  checked={wantsShrimp}
/>
```

## Checkbox props
#### `label: string`
Label for the checkbox

#### `recordField: string`
The field which the value of the checkbox correlates to.

#### `onChange: function`
Function that will fire on the checkbox's `onChange`

#### `className: string`
Optional additional classname to be applied to the checkbox wrapper

#### `checked: boolean`
A boolean to tell the checkbox to be checked.
