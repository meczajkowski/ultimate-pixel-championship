import { welcomeScreen } from './js/screens/welcome-screen.js';
import { wizardScreen } from './js/screens/wizard-screen.js';

document.addEventListener('DOMContentLoaded', () => {
   const app = document.querySelector('#app');
   const displayWelcomeScreen = welcomeScreen();
   const displayWizardScreen = wizardScreen();

   // Display welcome screen
   app.append(displayWelcomeScreen);

   // Display wizard screen
   // app.append(displayWizardScreen);
});
