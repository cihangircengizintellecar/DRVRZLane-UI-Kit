# MobileFooter

Footer for mobile interface that shows vehicles customer is purchasing and trading. Shows dealer logo
by default, and slides up to show content when clicked.

## Usage

```
<MobileFooter
  dealerLogo={dealerLogoImage}
  carToPurchase={{
    manufacturerLogo: newManufacturerLogoImage,
    name: '2017 Lexus RX 350',
    color: 'Nebula Gray Pearl',
    vin: '734234SA234198',
    condition: 'New'
  }}
  carToTradeIn={{
    manufacturerLogo: tradeInManufacturerLogoImage,
    name: '2014 Lexus RX 350',
    color: 'Gray',
    vin: '232TTE34A12312',
    condition: 'Used'
  }}
  onClick={clickInfoFooter}
/>
```

## MobileFooter props
#### `onClick: function()`
Function that will fire on the footer's `onClick`.

#### `dealerLogo: string`
Image path for dealer's logo.

#### `carToPurchase: object`
Object containing manufacturer logo, name, color, vin, and condition of the car the customer is purchasing.

#### `carToTradeIn: object`
Object containing manufacturer logo, name, color, vin, and condition of the car the customer is trading in.
