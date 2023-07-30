import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';

export const welcomeScreen = () => {
   const welcomeStepButtonPrimary = () => {
      const element = createElementWithAttributes('button', {
         class: 'button button--primary',
         textContent: 'Choose',
      });
      return element;
   };

   const welcomeStepHeading = () => {
      const element = createElementWithAttributes('h1', {
         class: 'welcome-screen__heading',
         textContent: 'Ultimate Pixel',
      });

      const span = createElementWithAttributes('span', {
         class: 'welcome-screen__heading welcome-screen__heading--span',
         textContent: 'Championships',
      });

      const line = createElementWithAttributes('span', {
         class: 'welcome-screen__heading-underline',
      });

      span.append(line);
      element.append(span);
      return element;
   };

   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.append(welcomeStepHeading());
   welcomeStepWrapper.append(welcomeStepButtonPrimary());

   return welcomeStepWrapper;
};
