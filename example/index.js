// -----------------------------------------------------------------------------
// NO LONGER USED: PLEASE USE STORYBOOK. THANKS!
// -----------------------------------------------------------------------------
//
// import React from 'react';
// import { render } from 'react-dom';
// 
// import Button from '../components/Button';
// import Input from '../components/Input';
// import StepTracker from '../components/StepTracker';
// 
// const steps = [{name: 'Financing Start'}, {name: 'Trade In'}, {name: 'Delivery Options'}];
// 
// const clickBtn = function () {
//   console.log('button clicked');
// };
// 
// const inputValue = 'some input';
// 
// const inputChange = function() {
//   console.log('input changed');
// };
// 
// const inputBlur = function() {
//   console.log('input blur');
//   console.log('check input is valid');
// };
// 
// const inputFocus = function() {
//   console.log('input focus');
// };
// 
// const inputKeyUp = function() {
//   console.log('input key up');
// };
// 
// const inputKeyDown = function() {
//   console.log('input key down');
// };
// 
// render(
//   <div>
//     <h1>Fastlane UI Kit</h1>
//     <h2>Buttons</h2>
//     <Button
//       label="This is a primary button"
//       size="normal"
//       theme="success"
//       type="primary"
//       disabled={false}
//       className="additional-classname"
//       onClick={clickBtn}
//     />
//     <br />
//     <Button
//       label="This is a secondary button"
//       size="normal"
//       theme="success"
//       type="secondary"
//       disabled={false}
//       className="additional-classname"
//       onClick={clickBtn}
//     />
//     <br />
//     <Button
//       label="This is a secondary button"
//       size="normal"
//       theme="success"
//       type="dark"
//       disabled={false}
//       className="additional-classname"
//       onClick={clickBtn}
//     />
//     <br />
//     <h2>Input fields</h2>
//     <Input
//       defaultValue={inputValue}
//       placeholder="This is an input field"
//       disabled={false}
//       theme="material"
//       onChange={inputChange}
//       onBlur={inputBlur}
//       onFocus={inputFocus}
//       onKeyUp={inputKeyUp}
//       onKeyDown={inputKeyDown}
//       inputAttrs={
//         {name: 'test'},
//         {type: 'text'},
//         {required: false}
//       } />
//     <br/>
//     <Input
//       defaultValue={inputValue}
//       placeholder="This is a form field"
//       disabled={false}
//       theme="form-field"
//       onChange={inputChange}
//       onBlur={inputBlur}
//       onFocus={inputFocus}
//       onKeyUp={inputKeyUp}
//       onKeyDown={inputKeyDown}
//       inputAttrs={
//         {name: 'test'},
//         {type: 'text'},
//         {required: false}
//       } />
//     <br/>
//     <h2>Step Tracker</h2>
//     <StepTracker
//       steps={steps}
//       currentStep={1} />
//   </div>
// , document.getElementById('example-app'));
