import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button';
import cls from './SignaturePad.scss';
import SignatureCanvas from 'react-signature-canvas';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 150;

class SignaturePad extends React.Component {
  static propTypes = {
    onSaveSignature: PropTypes.func,
    canvasWidth: PropTypes.number,
    canvasHeight: PropTypes.number
  }

  ref = (el) => {
    if (el) {
      const canvas = el.getCanvas();
      this.scaleToPixelDensity(canvas);

      this.signaturePad = el;
    }
  };

  scaleToPixelDensity (canvas) {
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    canvas.getContext('2d').scale(ratio, ratio);

    canvas.width = canvas.width / ratio;
    canvas.height = canvas.height / ratio;
  }

  computeWidthHeight () {
    const { canvasWidth = CANVAS_WIDTH, canvasHeight = CANVAS_HEIGHT } = this.props;
    const ratio = Math.max(window.devicePixelRatio || 1, 1);

    return {
      width: canvasWidth * ratio,
      height: canvasHeight * ratio
    };
  }

  canvasIsEmpty () {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty();
    }
    return true;
  }

  clearSignaturePad = () => {
    this.signaturePad.clear();
  };

  outputSignatureString = () => {
    if (!this.canvasIsEmpty()) {
      this.props.onSaveSignature(
        this.signaturePad.getTrimmedCanvas().toDataURL()
      );
    }
  }

  render () {
    const { canvasWidth = CANVAS_WIDTH } = this.props;
    const computedStyle = ({
      'maxWidth': `${canvasWidth}px`
    });

    return (
      <div className={cls.SignaturePadWrapper} style={computedStyle} data-hook="signature-pad-wrapper">
        <SignatureCanvas
          ref={this.ref}
          penColor="#777874"
          dotSize={2}
          canvasProps={this.computeWidthHeight()}
        />

        <div className={cls.BtnContainer}>
          <Button
            size="small"
            label="Clear"
            theme="dark"
            onClick={this.clearSignaturePad}
          />
          <Button
            size="small"
            label="Done"
            theme="primary"
            onClick={this.outputSignatureString}
          />
        </div>
      </div>
    );
  }
}

export default SignaturePad;