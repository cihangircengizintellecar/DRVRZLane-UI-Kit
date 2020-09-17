import React from 'react';
import cls from './Slider.scss';
import PropTypes from 'prop-types';
import RCSlider from 'rc-slider';

Slider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  value: PropTypes.number,
  label: PropTypes.string,
  displayedValue: PropTypes.string,
  onChange: PropTypes.func
};

function Slider ({
  min = 0,
  max = 1,
  step = 1,
  value = 0,
  displayedValue = '0',
  label = 'Slider',
  onChange
}) {
  return (
    <div className={cls.Slider}>
      <div className={cls.labelWrapper}>
        <label className={cls.SliderLabel}>{label}</label>
        <span className={cls.SliderLabelRight}>{displayedValue}</span>
      </div>

      <RCSlider
        className={cls.sliderClass}
        min={min}
        max={max}
        step={step}
        defaultValue={Number(value)}
        onChange={onChange}
      />
    </div>
  );
}

export default Slider;