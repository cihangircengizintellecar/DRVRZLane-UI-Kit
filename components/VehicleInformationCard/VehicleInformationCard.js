import React, { PropTypes } from 'react';

import Button from '../Button';
import classes from './VehicleInformationCard.scss';

export const VehicleInformationCard = ({
  isSelected,
  toggleSelect,
  manufacturerLogo,
  year,
  name,
  color,
  vin,
  condition,
  price,
  mileage,
  buyVehicle
}) => {
  const toggleSelectVehicle = () => {
    if (typeof toggleSelect === 'function') {
      toggleSelect(!isSelected);
    }
  };

  const clickBuyButton = () => {
    if (typeof buyVehicle === 'function') {
      buyVehicle(vin);
    }
  };

  const classNames = ['VehicleInformationCard', (isSelected === true ? 'selected' : '')];
  let listPrice = price ? `List Price: $${price.toLocaleString()}` : null;
  const mileageCount = mileage ? `Mileage: ${mileage.toLocaleString()}` : null;
  if (listPrice && mileageCount) {
    listPrice += ' | ';
  }

  return (
    <div className={classNames.map((c) => classes[c] || c).join(' ')} onClick={toggleSelectVehicle}>
      <div className={`${classes.flex__row} ${classes.flex__row}`}>
        <div className={`${classes.flex__row__item} ${classes.flex__row__item} ${classes.offer}`}>

          <div className={classes.carSummary}>
            <div className={classes.flex__row}>
              <div className={`${classes.flex__row__item} ${classes.manufacturerLogoWrapper}`}>
                <img src={manufacturerLogo} />
              </div>

              <div className={`${classes.flex__row__item} ${classes.carDetails}`}>
                <div className={classes.yearAndName}>{year} {name}</div>
                <div className={classes.color}>{color}</div>
                <div className={classes.vin}>{vin}</div>
                <div className={classes.condition}>{condition}</div>
                {listPrice && mileageCount ? <div className={classes.price}>{listPrice}{mileageCount}</div> : null}
              </div>
            </div>
            {buyVehicle && <div className={classes.flex__row}>
              <div className={classes.flex__row__item}>
                <Button
                  label="Enter Purchase Flow"
                  type="primary"
                  size="normal"
                  theme="success"
                  onClick={clickBuyButton}
                />
              </div>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

VehicleInformationCard.propTypes = {
  manufacturerLogo: PropTypes.string,
  year: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  condition: PropTypes.string,
  vin: PropTypes.string,
  price: PropTypes.number,
  mileage: PropTypes.number,
  carCondition: PropTypes.string,
  code: PropTypes.string,
  toggleSelect: PropTypes.func,
  isSelected: PropTypes.bool,
  buyVehicle: PropTypes.func
};

export default VehicleInformationCard;
