# Dropdown

Standard select menu component.

## Usage

Strings
```
<Dropdown
  recordField='state'
  options={[ 'TX', 'PA' ]}
  onChange={selectState}
  placeholder='Select a state:'
  selectedValue={props.selectedState}
/>
```

Objects
```
<Dropdown
  recordField='user'
  keyForLabel='name'
  options={{[
    { id: 1, name: 'Adam'},
    { id: 2, name: 'Ted' }
  ]}}
  onChange={selectUser}
  placeholder='Select a user:'
  selectedValue={props.currentUser}
/>
```

## Dropdown props
#### `recordField: string`
The field which the selected value of the dropdown correlates to.

#### `onChange: function ({ field: string, value: object | string })`
Function that will fire on the select menu's `onChange`.

#### `className: string`
Optional additional classname to be applied to the dropdown wrapper.

#### `options: arrayOf(string) | arrayOf(object)`
Array of options to choose from. If `objects`, will use `id` key to determine which option is selected.

#### `selectedValue: string | object`
The selected option in the dropdown list. If options are strings, must be string. If options are objects, must be object.

#### `placeholder: string`
Text for the initial option in the dropdown list.

#### `dropdownAttrs: object`
Optional hash of `select` attributes.

#### `noDefaultOption: boolean`
Determine whether to show or hide the default (no value) option.

### For use with `objects`

#### `keyForLabel: string`
Key to look for within object to display option text.