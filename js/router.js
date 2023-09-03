import { welcomeScreen } from './screens/welcome-screen.js';
import { wizardScreen } from './screens/wizard-screen.js';

const displayWelcomeScreen = welcomeScreen();
const displayWizardScreen = wizardScreen();
const app = document.querySelector('#app');

export const route = (event) => {
   // console.log(event);
   event = event || window.event;
   console.log(event);
   event.preventDefault();
   window.history.pushState({}, '', event.target.href);
   handleLocation();
};

const routes = {
   '/ultimate-pixel-championship/': displayWelcomeScreen,
   '/ultimate-pixel-championship/wizard': displayWizardScreen,
};

const handleLocation = async () => {
   const path = window.location.pathname;

   // Check if the path is unexpected
   if (!routes[path]) {
      window.location.href = '/ultimate-pixel-championship/'; // Redirect to root path
      return;
   }

   const route = routes[path];

   app.innerHTML = '';
   app.append(route);
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
