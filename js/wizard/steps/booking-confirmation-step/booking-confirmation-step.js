import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

const confirmationHeading = () => {
   const element = createElementWithAttributes('h2', {
      class: 'booking-confirmation__heading',
      textContent: `Thank you for signing up, Commander ${
         JSON.parse(sessionStorage.getItem('submitedFighter'))?.commander
      }!`,
   });
   return element;
};

const image = () => {
   const element = createElementWithAttributes('img', {
      class: 'image image--booking-confirmation-step',
      src: 'https://meczajkowski.github.io/ultimate-pixel-championship/assets/swords.png',
   });
   return element;
};

const confirmationInfo = () => {
   const element = createElementWithAttributes('p', {
      class: 'booking-confirmation__info',
      textContent:
         'You will be notified about the next steps in the championship process via email.',
   });
   return element;
};

export const bookingConfirmationStep = () => {
   const bookingConfirmationStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--booking-confirmation-step',
   });

   bookingConfirmationStepWrapper.append(confirmationHeading(), image(), confirmationInfo());
   return bookingConfirmationStepWrapper;
};
