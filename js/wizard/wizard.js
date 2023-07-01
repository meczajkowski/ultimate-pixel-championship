import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';

export const initWizard = () => {
   // I keep steps in the array, so Im able to navigate through
   const steps = [chooseFighterStep(), bookingDetailsStep(), bookingConfirmationStep()];

   // I need to monitor which step is active. You can change value to see how step changes. Try 2 for example.
   const currentStepIndex = 0;

   // I need to know max steps amount, to prevent going to far
   const maxSteps = steps.length;

   const wizardWrapper = document.createElement('div');

   // I displaying only active step in my HTML
   wizardWrapper.append(steps[currentStepIndex]);

   return wizardWrapper;
};
