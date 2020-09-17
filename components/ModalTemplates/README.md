# ModalTemplates

Specific templates for modal popover component.

## Usage

Offer Details Modal
```
<ModalPopover toggleModal={action('close modal')}>
  <ModalTemplates.OfferDetails
    title="Military and Veteran Discount"
    message="Cupcake ipsum dolor. Sit amet donut gummies brownie soufflé brownie. Macaroon jujubes danish halvah jujubes chocolate cake lollipop cheesecake macaroon. Halvah cake sweet caramels jelly-o sesame snaps chocolate bar tootsie roll. Topping icing icing tootsie roll fruitcake. Halvah dragée danish lollipop dragée. Pie gummi bears chocolate cake cheesecake lollipop halvah bonbon. Marshmallow cotton candy tootsie roll lollipop jelly beans. Gummies cake marshmallow donut caramels apple pie soufflé sesame snaps croissant. Chocolate bonbon carrot cake dragée cotton candy carrot cake jujubes caramels ice cream. Pastry gingerbread bonbon danish donut muffin bear claw sweet roll cheesecake. Chocolate bar sweet roll cupcake cotton candy cheesecake. Caramels biscuit cheesecake brownie halvah."
    closeModal={action('cancel and close modal')}
  />
</ModalPopover>
```

## OfferDetails props
#### `title: function ()`
Title that will appear in header of modal.

#### `message: function ()`
Description of offer.

#### `closeModal: function ()`
Function that will fire when clicking modal's close button.