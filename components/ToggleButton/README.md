# ToggleButton

Toggle button component

## Usage
```
<ToggleButton
  toggleOptions={['Open', 'History']}
  onChange={this.clickOption}
  selection={optionSelected}
/>
```

## ToggleButton props

#### `toggleOptions: array`
Array of labels for each button

#### `onChange: function (newSelection)`
Callback for when button is clicked

#### `selection: string`
Label of selected button