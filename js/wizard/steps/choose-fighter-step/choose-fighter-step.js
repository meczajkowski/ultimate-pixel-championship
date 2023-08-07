import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

export const chooseFighterStep = () => {
   const chooseFighterStepHeading = () => {
      const element = createElementWithAttributes('h2', {
         class: 'welcome-screen__heading wizard-heading',
         textContent: 'Choose your fighter',
      });
      return element;
   };
   const chooseFighterStepWrapper = document.createElement('div');
   chooseFighterStepWrapper.append(chooseFighterStepHeading());

   return chooseFighterStepWrapper;
};
