# WarrantyBox

Component for row in offers & incentives table in the Fastlane Purchase Interface.

## Usage

```
<WarrantyBox
  package="A"
  name="Roadside Assistance"
  description="2 Years / 25,000 Miles"
  value="1,000"
  toggleSelect={action('toggle select warranty')}
/>
```

## WarrantyBox props
#### `package: string`
Name of package, e.g. "A." The string "Package " will be prepended to the name and does not need to be passed in.

#### `name: string`
Name of warranty.

#### `description: string`
Description of warranty.

#### `value: string`
Dollar value of warranty.

#### `isSelected: boolean`
Option to set warranty as selected.

#### `toggleSelect: function ()`
Function that will fire when clicking on warranty box.