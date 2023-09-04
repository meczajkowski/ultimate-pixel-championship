import { chooseFighterStep } from './steps/choose-fighter-step/choose-fighter-step.js';
import { bookingDetailsStep } from './steps/booking-details-step/booking-details-step.js';
import { bookingConfirmationStep } from './steps/booking-confirmation-step/booking-confirmation-step.js';
import { createElementWithAttributes } from '../helpers/createElementWithAttributes.js';
import { fighters } from './steps/choose-fighter-step/fighters.js';

export const initWizard = () => {
   let commanderCredentials;
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
      const button = createElementWithAttributes('button', {
         class: 'button button--primary',
         textContent: title,
      });
      const element = createElementWithAttributes('a', {
         href: '#',
         onclick: 'route()',
         type: 'button',
         tabindex: -1,
      });

      element.append(button);

      element.addEventListener('click', () => {
         if (currentStepIndex === maxSteps) return;

         if (currentStepIndex === 0) {
            steps[1] = bookingDetailsStep();
            currentStepIndex++;
            renderStep();
         } else if (currentStepIndex === 1) {
            // form validation start
            const commander = document.querySelector('.booking-details-form__input--text');
            const email = document.querySelector('.booking-details-form__input--email');
            const commanderRegex = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]{2,15}$/;
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            const setError = (element, message) => {
               const inputParent = element.parentElement;
               const errorDisplay = inputParent.querySelector('.booking-details-form__error-label');
               errorDisplay.innerText = message;
               element.classList.add('booking-details-form__input--error');
            };

            const setSuccess = (element) => {
               const inputParent = element.parentElement;
               const errorDisplay = inputParent.querySelector('.booking-details-form__error-label');
               errorDisplay.innerText = '';
               element.classList.remove('booking-details-form__input--error');
            };

            const isValidCommander = (commander) => commanderRegex.test(commander);
            const isValidEmail = (email) => emailRegex.test(email);

            const validateInputs = () => {
               let isValidForm = false;

               const commanderValue = commander.value.trim();
               const emailValue = email.value.trim();

               // A check to see if the inputs are empty before allowing submission.
               if (commanderValue === '') {
                  setError(commander, 'Enter the commander name');
                  isValidForm = false;
               } else if (!isValidCommander(commanderValue)) {
                  setError(commander, 'Enter 2 - 15 letters only');
                  isValidForm = false;
               } else {
                  setSuccess(commander);
                  isValidForm = true;
               }
               // A check to see if the inputs are empty before allowing submission.
               if (emailValue === '') {
                  setError(email, 'Enter the email address');
                  isValidForm = false;
               }
               // A check to validate the email input against a standard email format.
               else if (!isValidEmail(emailValue)) {
                  // Logic to display an error message when the email input is invalid.
                  setError(email, 'Enter the correct email address');
                  isValidForm = false;
               } else {
                  setSuccess(email);
                  isValidForm = true;
               }

               isValidForm = isValidCommander(commanderValue) && isValidEmail(emailValue);
               return isValidForm;
            };

            if (!validateInputs()) return;
            // form validation end

            commanderCredentials = {
               commander: commander.value.trim(),
               email: email.value.trim(),
               fighter: JSON.parse(sessionStorage.getItem('activeFighter')),
            };
            console.log(commanderCredentials);
            sessionStorage.setItem('submitedFighter', JSON.stringify(commanderCredentials));
            // sessionStorage.removeItem('activeFighter');
            sessionStorage.setItem('activeFighter', JSON.stringify(fighters[0]));
            steps[0] = chooseFighterStep();
            steps[2] = bookingConfirmationStep();
            currentStepIndex++;
            console.log(currentStepIndex);
            renderStep();
         } else if (currentStepIndex === 2) {
            currentStepIndex = 0;
            renderStep();
         }
      });
      return element;
   };

   // Button Secondary
   const wizardButtonSecondary = () => {
      const element = createElementWithAttributes('a', {
         href: '#',
         onclick: 'route()',
         type: 'button',
         tabindex: -1,
      });

      const button = createElementWithAttributes('button', {
         class: 'button button--secondary',
         textContent: 'Back',
      });

      element.append(button);

      element.addEventListener('click', () => {
         currentStepIndex = 0;
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
