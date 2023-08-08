import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

export const chooseFighterStep = () => {
   // Heading
   const chooseFighterStepHeading = () => {
      const element = createElementWithAttributes('h2', {
         class: 'welcome-screen__heading wizard-heading',
         textContent: 'Choose your fighter',
      });
      return element;
   };

   // Button Primary
   const chooseFighterStepButtonPrimary = () => {
      const element = createElementWithAttributes('a', {
         class: 'button button--primary',
         textContent: 'Choose',
         href: '#',
         onclick: 'route()',
      });
      return element;
   };

   // wrapper
   const chooseFighterStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--choose-fighter-step',
   });

   chooseFighterStepWrapper.append(chooseFighterStepHeading());
   chooseFighterStepWrapper.append(chooseFighterStepButtonPrimary());

   return chooseFighterStepWrapper;
};
