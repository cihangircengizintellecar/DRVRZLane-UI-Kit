<!-- # OfferRow

Component for row in offers & incentives table in the Fastlane Purchase Interface.

## Usage

```
<OfferRow
  id="12345ABCDEFG"
  name="2017 Lexus GS Manuf. Incentive"
  value="$5,000"
  reqs="This special offer is for those who risked their lives defending"
  isSelected={true}
  onSelect={action('onSelect')}
  onExpand={action('onExpand')}
/>
```

## Rebate props
#### `name: text`
Offer name.

#### `value: number`
Offer value.

#### `reqs: text`
Description of offer.

#### `isSelected: boolean`
Option to set offer as selected.

#### `onSelect: function ()`
Function that will fire when clicking and selecting offer.

#### `onExpand: function ()`
Function that will fire when clicking expand icon to see details. -->