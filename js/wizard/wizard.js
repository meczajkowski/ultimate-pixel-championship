import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';

export const initWizard = () => {
   // Heading
   const wizardHeading = (title) => {
      const element = createElementWithAttributes('h2', {
         class: 'welcome-screen__heading wizard-heading',
         textContent: title,
      });
      return element;
   };

   // Progress Bar
   const wizardProgressBar = (maxSteps, currentStepIndex) => {
      const container = createElementWithAttributes('div', {
         class: 'wizard-progress-bar',
      });

      const steps = createElementWithAttributes('div', {
         class: 'wizard-progress-bar__steps',
      });

      const stepIcons = (maxSteps, currentStepIndex) => {
         const icons = [];
         for (let i = 0; i < maxSteps; i++) {
            const element = createElementWithAttributes('img', {
               class: 'wizard-progress-bar__step-icon',
               src: `../../../../assets/step-icon-${currentStepIndex >= i ? 'active' : 'nude'}.svg`,
            });
            icons.push(element);
         }

         return icons;
      };

      const wizardProgress = () => {
         const container = createElementWithAttributes('div', {
            class: 'wizard-progress-bar__progress',
         });

         const indicator = createElementWithAttributes('span', {
            class: 'wizard-progress-bar__indicator',
            style: `${
               currentStepIndex == 0
                  ? 'width: 55%'
                  : currentStepIndex == 1
                  ? 'width: 55%'
                  : 'width: 100%'
            }`,
         });

         container.append(indicator);
         return container;
      };

      steps.append(...stepIcons(maxSteps, currentStepIndex), wizardProgress());
      container.append(steps);
      return container;
   };

   // Button Primary
   const wizardButtonPrimary = (title) => {
      const element = createElementWithAttributes('a', {
         class: 'button button--primary',
         textContent: title,
         href: '#',
         onclick: 'route()',
      });

      element.addEventListener('click', () => {
         if (currentStepIndex === maxSteps - 1) return;
         if (currentStepIndex === 0) {
            steps[1] = bookingDetailsStep();
         }
         currentStepIndex++;
         renderStep();
      });
      return element;
   };

   // Button Secondary
   const wizardButtonSecondary = () => {
      const element = createElementWithAttributes('a', {
         class: 'button button--secondary',
         textContent: 'Back',
         href: '#',
         onclick: 'route()',
      });

      // element.addEventListener('click', () => {
      //    currentStepIndex--;
      //    renderStep();
      // });
      return element;
   };

   // I keep steps in the array, so Im able to navigate through
   const steps = [chooseFighterStep(), bookingDetailsStep(), bookingConfirmationStep()];

   // I need to monitor which step is active. You can change value to see how step changes. Try 2 for example.
   let currentStepIndex = 0;

   // I need to know max steps amount, to prevent going to far
   const maxSteps = steps.length;

   // wrapper
   const wizardWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--wizard',
   });

   // I displaying only active step in my HTML
   const renderStep = () => {
      wizardWrapper.innerHTML = '';
      switch (currentStepIndex) {
         case 0:
            wizardWrapper.append(
               wizardHeading('Choose your fighter'),
               wizardProgressBar(maxSteps, currentStepIndex),
               steps[currentStepIndex],
               wizardButtonPrimary('Choose'),
            );
            break;
         case 1:
            wizardWrapper.append(
               wizardHeading('Booking details'),
               wizardProgressBar(maxSteps, currentStepIndex),
               steps[currentStepIndex],
               wizardButtonPrimary('Submit'),
               wizardButtonSecondary(),
            );
            break;
         case 2:
            wizardWrapper.append(
               wizardHeading('Confirmation'),
               wizardProgressBar(maxSteps, currentStepIndex),
               steps[currentStepIndex],
               wizardButtonPrimary('Submit another fighter'),
            );
      }
   };

   renderStep();

   return wizardWrapper;
};
