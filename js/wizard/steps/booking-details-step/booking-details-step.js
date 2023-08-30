import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

const form = () => {
   const form = createElementWithAttributes('form', {
      class: 'booking-details-form',
   });

   const chosenFighter = () => {
      const label = createElementWithAttributes('label', {
         class: 'booking-details-form__label booking-details-form__label--fighter',
         textContent: 'CHOSEN FIGHTER',
      });

      const fighterName = createElementWithAttributes('p', {
         class: 'booking-details-form__chosen-fighter',
         textContent: JSON.parse(sessionStorage.getItem('activeFighter')).name,
      });

      const container = createElementWithAttributes('div', {
         class: 'booking-details-form__input-container',
      });

      container.append(label, fighterName);
      return container;
   };

   const input = (type, heading, placeholder) => {
      const input = createElementWithAttributes('input', {
         class: `booking-details-form__input booking-details-form__input--${type}`,
         id: `booking-details-form__input--${type}`,
         name: heading,
         placeholder: placeholder,
      });

      const label = createElementWithAttributes('label', {
         class: `booking-details-form__label booking-details-form__label--${type}`,
         for: `booking-details-form__input--${type}`,
         textContent: heading,
      });

      const error = createElementWithAttributes('div', {
         class: 'booking-details-form__error-label',
      });

      const container = createElementWithAttributes('div', {
         class: 'booking-details-form__input-container',
      });

      container.append(label, input, error);
      return container;
   };

   form.append(
      chosenFighter(),
      input('text', 'COMMANDER', 'Your name'),
      input('email', 'EMAIL', 'Your email'),
   );
   return form;
};

export const bookingDetailsStep = () => {
   const bookingDetailsStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--booking-details-step',
   });

   bookingDetailsStepWrapper.append(form());

   return bookingDetailsStepWrapper;
};
