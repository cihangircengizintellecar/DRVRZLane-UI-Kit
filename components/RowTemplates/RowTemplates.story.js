import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import RowTemplates from '../RowTemplates';
import Table from '../TableElements/Table';

storiesOf('RowTemplates', module)
  .add('add-on row with value', () => (
    <RowTemplates.AddOnRow
      id="12345"
      title="Roadside Assistance"
      price="150"
      description="How does a bastard, orphan, lord, show me how to say no to this. Alexander, rumors only grow. Sewin’ some pants. I am inimitable, I am an original. I’m young, scrappy and hungry. The world was wide enough for both Hamilton and me."
      isSelected
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('add-on row with image', () => (
    <RowTemplates.AddOnRow
      id="12345"
      title="Roadside Assistance"
      image={'https://fastlane-images-development.s3.amazonaws.com/08686b7a-3750-4c41-b33f-0106a6690d4f.png'}
      price="150"
      description="How does a bastard, orphan, lord, show me how to say no to this. Alexander, rumors only grow. Sewin’ some pants. I am inimitable, I am an original. I’m young, scrappy and hungry. The world was wide enough for both Hamilton and me."
      isSelected
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('add-on row with long value', () => (
    <RowTemplates.AddOnRow
      id="12346"
      title="Roadside Assistance"
      price="123456.00"
      description="This special offer is for awesome people."
      isSelected
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('add-on row without value', () => (
    <RowTemplates.AddOnRow
      id="12347"
      title="Roadside Assistance"
      description="This special offer is for those who've risked their lives defending us."
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
      isSelected
    />
  ))
  .add('readOnly offer row', () => (
    <RowTemplates.OfferRow
      id="1"
      name="2017 Lexus GS Manuf. Incentive"
      category="General"
      compatibilities={['2', '3']}
      requirements="Dis is a short req."
      amount="200"
      type="fixed amount"
      isSelected
      readOnly
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('offer row with short req', () => (
    <RowTemplates.OfferRow
      id="1"
      name="2017 Lexus GS Manuf. Incentive"
      category="General"
      compatibilities={['2', '3']}
      requirements="Dis is a short req."
      amount="10000"
      type="fixed amount"
      isSelected
      readOnly={false}
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('offer row with long req', () => (
    <RowTemplates.OfferRow
      id="1"
      name="2017 Lexus GS Manuf. Incentive"
      category="General"
      compatibilities={['2', '3']}
      requirements="How does a bastard, orphan, lord, show me how to say no to this. Alexander, rumors only grow. Sewin’ some pants. I am inimitable, I am an original. I’m young, scrappy and hungry. The world was wide enough for both Hamilton and me."
      amount="9999.99"
      type="fixed amount"
      isSelected
      readOnly={false}
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('offer row with long title', () => (
    <RowTemplates.OfferRow
      id="1"
      name="X-Plan Ford Performance Partner Recognition Direct Offer Waffle Cake Muffin Pastry"
      category="General"
      compatibilities={['2', '3']}
      requirements="How does a bastard, orphan, lord, show me how to say no to this. Alexander, rumors only grow. Sewin’ some pants. I am inimitable, I am an original. I’m young, scrappy and hungry. The world was wide enough for both Hamilton and me."
      amount="9999.99"
      type="fixed amount"
      isSelected
      readOnly={false}
      onSelect={action('onSelect')}
      onExpand={action('onExpand')}
    />
  ))
  .add('dealer portal offer row', () => (
    <RowTemplates.OfferRow
      id="1"
      name="2017 Lexus GS Manuf. Incentive"
      category="General"
      compatibilities={['2', '3']}
      requirements="This special offer is for those who risked their lives defending"
      value="5000"
      type="fixed amount"
      hideCheckbox
    />
  ))
  .add('em portal offer row', () => (
    <Table headings={[{ label: 'Title' }, { label: 'Description' }, { label: '' }, { label: '' }, { label: '' }]}>
      <RowTemplates.OfferEMRow
        id="1"
        name="2017 Lexus GS Manuf. Incentive"
        requirements="What are their names? Good news, everyone! I've taught the toaster to feel love! Come, Comrade Bender! We must take to the streets! Leela's gonna kill me. Negative, bossy meat creature! I haven't felt much of anything since my guinea pig died."
        value="5000"
        terms="Jan 01, 2017 - Dec 31, 2017"
        isSelected
        onSelect={action('onSelect')}
        onExpand={action('onExpand')}
        onArchive={action('onArchive')}
      />
    </Table>
  ))
  .add('em portal warranties row', () => (
    <Table headings={[{ label: 'Image' }, { label: 'Title' }, { label: 'Description' }, { label: '' }, { label: '' }]}>
      <RowTemplates.AddOnEMRow
        id="1"
        name="Roadside Assistance"
        requirements="What are their names? Good news, everyone! I've taught the toaster to feel love! Come, Comrade Bender! We must take to the streets! Leela's gonna kill me. Negative, bossy meat creature! I haven't felt much of anything since my guinea pig died."
        value="5000"
        image="https://fastlane-images-development.s3.amazonaws.com/08686b7a-3750-4c41-b33f-0106a6690d4f.png"
        isSelected
        onSelect={action('onSelect')}
        onExpand={action('onExpand')}
        onArchive={action('onArchive')}
      />
    </Table>
  ))
  .add('em portal dealership row', () => (
    <RowTemplates.DealershipRow
      name="Sewell Lexus"
      franchise="Franchise"
      manufacturer="Lexus, Acura, BMW"
      location="Dallas, TX USA"
    />
  ))
  .add('em portal additional fee row', () => (
    <RowTemplates.AddFeeRow
      name="Waffle Tax"
      price="500.00"
      onArchive={action('onArchive')}
    />
  ))
  .add('em portal financing row', () => (
    <RowTemplates.FinancingRow
      onSelect={action('onSelect')}
      name="Wells Fargo"
      spread="7.5%"
      onChange={action('onChange')}
    />
  ))
  .add('em portal user row', () => (
    <RowTemplates.UsersRow
      name="Mike Mclaren"
      email="Mike@dialexa.com"
      onArchive={action('onArchive')}
    />
  ));
