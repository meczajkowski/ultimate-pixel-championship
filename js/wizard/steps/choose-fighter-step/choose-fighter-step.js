import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';

export const chooseFighterStep = () => {
   // Heading
   const chooseFighterStepHeading = () => {
      const element = createElementWithAttributes('h2', {
         class: 'welcome-screen__heading wizard-heading',
         textContent: 'Choose your fighter',
      });
      return element;
   };

   // Fighter profile
   const chooseFighterStepFighterProfile = () => {
      // main container
      const fighterProfileContainer = createElementWithAttributes('div', {
         class: 'fighter-profile',
      });

      const fighterAvatar = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__avatar',
         });

         const image = createElementWithAttributes('img', {
            class: 'fighter-profile__avatar-image',
            src: '../../../../assets/karen.png',
         });

         const base = createElementWithAttributes('div', {
            class: 'fighter-profile__avatar-base',
         });

         container.append(base, image);
         return container;
      };

      const fighterName = createElementWithAttributes('h3', {
         class: 'fighter-profile__name',
         textContent: 'Annoyed Karen',
      });

      // details container
      const fighterDetails = createElementWithAttributes('div', {
         class: 'fighter-profile__details',
      });

      // stats container
      const fighterStats = createElementWithAttributes('div', {
         class: 'fighter-profile__stats',
      });

      // stats health
      const fighterHealth = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__stat-container fighter-profile__stat-container--health',
         });

         const title = createElementWithAttributes('h4', {
            class: 'fighter-profile__stat-title fighter-profile__stat-title--health',
            textContent: 'HEALTH',
         });

         const value = createElementWithAttributes('h5', {
            class: 'fighter-profile__stat-value fighter-profile__stat-value--health',
            textContent: '67',
         });

         container.append(title, value);
         return container;
      };

      // stats strength
      const fighterStrength = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__stat-container fighter-profile__stat-container--strength',
         });

         const title = createElementWithAttributes('h4', {
            class: 'fighter-profile__stat-title fighter-profile__stat-title--strength',
            textContent: 'ATTACK',
         });

         const value = createElementWithAttributes('h5', {
            class: 'fighter-profile__stat-value fighter-profile__stat-value--strength',
            textContent: '14 - 18',
         });

         container.append(title, value);
         return container;
      };

      // stats special attack
      const fighterSpecial = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__stat-container fighter-profile__stat-container--special',
         });

         const title = createElementWithAttributes('h4', {
            class: 'fighter-profile__stat-title fighter-profile__stat-title--special',
            textContent: 'SPECIAL ATTACK',
         });

         const value = createElementWithAttributes('h5', {
            class: 'fighter-profile__stat-value fighter-profile__stat-value--special',
            textContent: 'Passive Aggressiveness',
         });
         container.append(title, value);
         return container;
      };

      // stats weakness
      const fighterWeakness = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__stat-container fighter-profile__stat-container--weakness',
         });

         const title = createElementWithAttributes('h4', {
            class: 'fighter-profile__stat-title fighter-profile__stat-title--weakness',
            textContent: 'WEAKNESS',
         });

         const value = createElementWithAttributes('h5', {
            class: 'fighter-profile__stat-value fighter-profile__stat-value--weakness',
            textContent: 'Logical thinking',
         });
         container.append(title, value);
         return container;
      };

      fighterStats.append(fighterHealth(), fighterStrength());
      fighterDetails.append(fighterStats, fighterSpecial(), fighterWeakness());
      fighterProfileContainer.append(fighterAvatar(), fighterName, fighterDetails);
      return fighterProfileContainer;
   };

   // Button Primary
   const chooseFighterStepButtonPrimary = () => {
      const element = createElementWithAttributes('a', {
         class: 'button button--primary',
         textContent: 'Choose',
         href: '#',
         onclick: 'route()',
      });
      return element;
   };

   // wrapper
   const chooseFighterStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--choose-fighter-step',
   });

   chooseFighterStepWrapper.append(chooseFighterStepHeading());
   chooseFighterStepWrapper.append(chooseFighterStepFighterProfile());
   chooseFighterStepWrapper.append(chooseFighterStepButtonPrimary());

   return chooseFighterStepWrapper;
};
