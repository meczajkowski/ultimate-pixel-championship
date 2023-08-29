import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

const form = () => {
   const form = createElementWithAttributes('form', {
      class: 'booking-details-form',
   });

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

      const container = createElementWithAttributes('div', {
         class: 'booking-details-form__input-container',
      });

      container.append(label, input);
      return container;
   };

   form.append(input('text', 'COMMANDER', 'Your name'), input('email', 'EMAIL', 'Your email'));
   return form;
};

export const bookingDetailsStep = () => {
   const bookingDetailsStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--booking-details-step',
   });

   bookingDetailsStepWrapper.append(form());

   return bookingDetailsStepWrapper;
};
