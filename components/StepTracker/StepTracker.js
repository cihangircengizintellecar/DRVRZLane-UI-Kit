import PropTypes from 'prop-types';
import React from 'react';
import classes from './StepTracker.scss';

const StepTracker = function (props) {
  const sections = [];

  const click = (event) => {
    if (props.currentStep > event.target.attributes.value.value) { // allow navigation if you're going to a previous step
      props.onClick(props.steps[event.target.attributes.value.value].route);
    }
  };

  for (let i = 0; i < props.steps.length; i++) {
    const stepTrackerStepClasses = ['StepTracker__step__bar',
      props.currentStep === i ? 'current' : '',
      props.currentStep > i ? 'completed' : ''];

    if (i === 0) {
      stepTrackerStepClasses.push('first');
    }

    if (i === props.steps.length - 1) {
      stepTrackerStepClasses.push('last');
    }

    const stage = props.currentStep === i ? 'current-label' : '';
    sections.push(
      <div key={i} className={classes.StepTracker__step} onClick={click} value={i}>
        <div className={stepTrackerStepClasses.map((c) => classes[c]).join(' ')} value={i} />
        <div className={`${classes.label} ${classes[stage]}`} value={i} >{props.steps[i].name}</div>
      </div>
    );
  }

  return (
    <div className={classes.StepTracker}>
      {sections}
    </div>
  );
};

StepTracker.propTypes = {
  steps: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string
  })),
  currentStep: PropTypes.number,
  onClick: PropTypes.func,
  isLease: PropTypes.bool
};

export default StepTracker;