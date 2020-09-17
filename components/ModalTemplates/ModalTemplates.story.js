import React from 'react';
import { storiesOf } from '@storybook/react'; import { action } from '@storybook/addon-actions';
import Button from '../Button';
import ModalTemplates from '../ModalTemplates';
import ModalPopover from '../ModalPopover';

storiesOf('ModalTemplates', module)
  .add('OfferDetails', () => (
    <div>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <p> - </p>
      <ModalPopover toggleModal={action('close modal')}>
        <ModalTemplates.OfferDetails
          title="Military and Veteran Discount (With a Lot Of Extra Text To Make Sure The X Doesn't Overlap The Title)"
          message="Cupcake ipsum dolor. Sit amet donut gummies brownie soufflé brownie. Macaroon jujubes danish halvah jujubes chocolate cake lollipop cheesecake macaroon. Halvah cake sweet caramels jelly-o sesame snaps chocolate bar tootsie roll. Topping icing icing tootsie roll fruitcake. Halvah dragée danish lollipop dragée. Pie gummi bears chocolate cake cheesecake lollipop halvah bonbon. Marshmallow cotton candy tootsie roll lollipop jelly beans. Gummies cake marshmallow donut caramels apple pie soufflé sesame snaps croissant. Chocolate bonbon carrot cake dragée cotton candy carrot cake jujubes caramels ice cream. Pastry gingerbread bonbon danish donut muffin bear claw sweet roll cheesecake. Chocolate bar sweet roll cupcake cotton candy cheesecake. Caramels biscuit cheesecake brownie halvah."
          closeModal={action('cancel and close modal')}
        />
      </ModalPopover>
    </div>
  ))
  .add('Success', () => (
    <ModalPopover toggleModal={action('close modal')}>
      <ModalTemplates.Success
        header="Success!"
        message="You have completed your dealer deposit."
        closeModal={action('cancel and close modal')}
      >
        <Button
          label="Finish"
          type="primary"
          size="normal"
          theme="success"
          onClick={action('click')}
          disabled={false}
        />
      </ModalTemplates.Success>
    </ModalPopover>
  ))
  .add('Self Closing (should close after 3 seconds)', () => (
    <ModalPopover isSelfClosing clickClose={action('close modal')}>
      <ModalTemplates.SuccessWide
        header="Creation Successful!"
        message="To finalize the dealership setup, you will be taken to the warranty and add-ons screen to fill in the dealership's options."
      />
    </ModalPopover>
  ));
