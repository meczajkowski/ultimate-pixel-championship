import { initWizard } from '../wizard/wizard.js';

export const wizardScreen = () => {
   const wizardScreenWrapper = document.createElement('div');
   const wizard = initWizard();
   wizardScreenWrapper.append(wizard);
   return wizardScreenWrapper;
};
