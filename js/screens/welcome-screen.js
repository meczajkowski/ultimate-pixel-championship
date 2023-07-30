import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';

export const welcomeScreen = () => {
   const welcomeStepButtonPrimary = () => {
      const element = createElementWithAttributes('button', {
         class: 'button button--primary',
         textContent: 'Choose',
      });
      return element;
   };

   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.append(welcomeStepButtonPrimary());

   return welcomeStepWrapper;
};
