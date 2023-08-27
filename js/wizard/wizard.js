import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';
import { fighters } from './steps/choose-fighter-step/fighters.js';

export const initWizard = () => {
   let chossenFighter = '';
   // Heading
   const wizardHeading = () => {
      const element = createElementWithAttributes('h2', {
         class: 'welcome-screen__heading wizard-heading',
         textContent: 'Choose your fighter',
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
   const wizardButtonPrimary = () => {
      const element = createElementWithAttributes('a', {
         class: 'button button--primary',
         textContent: 'Choose',
         href: '#',
         onclick: 'route()',
      });

      element.addEventListener('click', () => {
         if (currentStepIndex === 0) {
            chossenFighter =
               fighters[
                  document.querySelector('.fighter-profile').getAttribute('data-fighter-index')
               ];
            console.log(chossenFighter);
         }

         currentStepIndex++;
         renderStep();
      });
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
      wizardWrapper.append(
         wizardHeading(),
         wizardProgressBar(maxSteps, currentStepIndex),
         steps[currentStepIndex],
         wizardButtonPrimary(),
      );
   };

   renderStep();

   return wizardWrapper;
};
