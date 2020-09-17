import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ModalPopover from './ModalPopover';

storiesOf('ModalPopover', module)
  .add('has options', () => (
    <ModalPopover clickClose={action('clickClose')}>
      <h2>Tootsie Roll</h2>
      <p>Tootsie roll pie gummi bears carrot cake lollipop. Donut chocolate cake pastry chocolate bonbon jelly-o. Topping icing jujubes. Caramels jelly-o marzipan tootsie roll chupa chups chupa chups bear claw sugar plum. Carrot cake bonbon danish cupcake candy topping pastry muffin cake. Soufflé cotton candy chocolate bar topping. Toffee cheesecake icing jelly-o tootsie roll macaroon icing. Cheesecake candy canes candy. Topping caramels brownie chocolate cake tootsie roll gummies chocolate bar jelly sweet roll. Sesame snaps topping wafer gummies. Powder dessert chocolate bar muffin cake tootsie roll chocolate cake jelly-o jujubes. Macaroon cake pudding brownie toffee jelly beans chocolate cake.</p>
    </ModalPopover>
  ))
  .add('hide close button', () => (
    <ModalPopover hideCloseButton>
      <h2>Tootsie Roll</h2>
      <p>Tootsie roll pie gummi bears carrot cake lollipop. Donut chocolate cake pastry chocolate bonbon jelly-o. Topping icing jujubes. Caramels jelly-o marzipan tootsie roll chupa chups chupa chups bear claw sugar plum. Carrot cake bonbon danish cupcake candy topping pastry muffin cake. Soufflé cotton candy chocolate bar topping. Toffee cheesecake icing jelly-o tootsie roll macaroon icing. Cheesecake candy canes candy. Topping caramels brownie chocolate cake tootsie roll gummies chocolate bar jelly sweet roll. Sesame snaps topping wafer gummies. Powder dessert chocolate bar muffin cake tootsie roll chocolate cake jelly-o jujubes. Macaroon cake pudding brownie toffee jelly beans chocolate cake.</p>
    </ModalPopover>
  ));
