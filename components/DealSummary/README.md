# DealSummary

A component that summarizes information for a deal.

## Usage
```
<DealSummary
  headerText="Fastlane Purchase Information"
  manufacturerLogo={lexusLogoImage}
  carName="2017 Lexus RX 350"
  carColor="Nebula Gray Pearl"
  carCondition="New"
  msrp="35,291"
  tradeInOffer="-13,495"
  downPayment="-"
  monthlyPayment="-"
  leaseTerm="-"
  apr="-"
  offersAndIncentives=[]
  extendedWarranty="-"
  gapInsurance="-"
  total="21,796"
/>
```

## DealSummary props
#### `headerText: string`
Text to show up in header.

#### `manufacturerLogo: image path`
Logo of the manufacturer that made the car.

#### `carName: string`
Year, make, and model of car.

#### `carColor: string`
Color of car.

#### `carCondition: string`
New or used.

#### `msrp: string`
Manufacturer's recommended retail price.

#### `tradeInOffer: string`
Amount offered for trade in vehicle.

#### `downPayment: string`
Amount of down payment.

#### `monthlyPayment: string`
Amount of monthly payment.

#### `leaseTerm: string`
Length of lease term.

#### `apr: string`
Annual percentage rate.

#### `offersAndIncentives: array of objects`
If there are offers and incentives chosen for this deal, we should display them.

#### `extendedWarranty: string`
If customer has 100,000 mile extended warranty, value should be "Yes." If not, "No."

#### `gapInsurance: string`
If customer has gap insurance, value should be "Yes." If not, "No."

#### `total: string`
Total amount due.