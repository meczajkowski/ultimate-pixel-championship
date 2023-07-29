export const welcomeScreen = () => {
   const welcomeStepWrapper = document.createElement('div');
   const welcomeStepButtonPrimary = document.createElement('button');

   welcomeStepButtonPrimary.classList.add('button', 'button--primary');
   welcomeStepButtonPrimary.innerText = 'Choose';

   welcomeStepWrapper.innerText = 'Welcome screen';
   welcomeStepWrapper.append(welcomeStepButtonPrimary);

   return welcomeStepWrapper;
};
