import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';

export const welcomeScreen = () => {
   const welcomeStepButtonPrimary = () => {
      const element = createElementWithAttributes('a', {
         class: 'button button--primary',
         textContent: 'Choose',
         href: '/ultimate-pixel-championship/wizard',
         onclick: 'route()',
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

   const welcomeStepDescription = () => {
      const element = createElementWithAttributes('p', {
         class: 'welcome-screen__description',
         textContent: 'Fill out the form to sign up for upcoming tournee.',
      });
      return element;
   };

   const welcomeStepImage = () => {
      const element = createElementWithAttributes('img', {
         class: 'image image--welcome-screen',
         src: 'https://meczajkowski.github.io/ultimate-pixel-championship/assets/swords.png',
      });
      return element;
   };

   const welcomeStepWrapper = document.createElement('div');
   welcomeStepWrapper.append(welcomeStepHeading());
   welcomeStepWrapper.append(welcomeStepImage());
   welcomeStepWrapper.append(welcomeStepDescription());
   welcomeStepWrapper.append(welcomeStepButtonPrimary());

   return welcomeStepWrapper;
};
