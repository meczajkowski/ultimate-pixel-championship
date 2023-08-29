import { createElementWithAttributes } from '../../../helpers/createElementWithAttributes.js';
import { fighters } from './fighters.js';

export const chooseFighterStep = () => {
   let activeFighter = 0;
   // Fighter profile
   const chooseFighterStepFighterProfile = (activeFighter, fighter, active = '') => {
      // main container
      const fighterProfile = createElementWithAttributes('div', {
         class: `fighter-profile ${active}`,
         'data-fighter-index': activeFighter,
      });

      const fighterAvatar = () => {
         const container = createElementWithAttributes('div', {
            class: 'fighter-profile__avatar',
         });

         const image = createElementWithAttributes('img', {
            class: 'fighter-profile__avatar-image',
            // src: '../../../../assets/karen.png',
            src: fighter.imageUrl,
         });

         const base = createElementWithAttributes('div', {
            class: 'fighter-profile__avatar-base',
         });

         container.append(base, image);
         return container;
      };

      const fighterName = createElementWithAttributes('h3', {
         class: 'fighter-profile__name',
         // textContent: 'Annoyed Karen',
         textContent: fighter.name,
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
            // textContent: '67',
            textContent: fighter.health,
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
            // textContent: '14 - 18',
            textContent: fighter.attack,
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
            // textContent: 'Passive Aggressiveness',
            textContent: fighter.special,
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
            // textContent: 'Logical thinking',
            textContent: fighter.weakness,
         });
         container.append(title, value);
         return container;
      };

      fighterStats.append(fighterHealth(), fighterStrength());
      fighterDetails.append(fighterStats, fighterSpecial(), fighterWeakness());
      fighterProfile.append(fighterAvatar(), fighterName, fighterDetails);
      return fighterProfile;
   };

   // All fighters
   const fightersContainer = createElementWithAttributes('div', {
      class: 'fighters',
   });

   // Next Fighter navigation
   const chooseFighterStepNextFighter = () => {
      const element = createElementWithAttributes('img', {
         class: 'navigation-arrow navigation-arrow--right',
         src: '../../../../assets/arrow.svg',
      });

      element.addEventListener('click', () => {
         if (activeFighter >= fighters.length - 1) return;
         activeFighter++;
         renderFighterProfile();
      });

      return element;
   };

   // Prev Fighter navigation
   const chooseFighterStepPrevFighter = () => {
      const element = createElementWithAttributes('img', {
         class: 'navigation-arrow navigation-arrow--left',
         src: '../../../../assets/arrow.svg',
      });

      element.addEventListener('click', () => {
         if (activeFighter <= 0) return;
         activeFighter--;
         renderFighterProfile();
      });

      return element;
   };

   const renderFighterProfile = () => {
      fightersContainer.innerHTML = '';
      fightersContainer.append(
         ...fighters.map((fighter) =>
            fighter === fighters[activeFighter]
               ? chooseFighterStepFighterProfile(activeFighter, fighter, 'active')
               : '',
         ),
      );
      sessionStorage.setItem('activeFighter', JSON.stringify(fighters[activeFighter]));
   };

   // wrapper
   const chooseFighterStepWrapper = createElementWithAttributes('div', {
      class: 'wrapper wrapper--choose-fighter-step',
   });

   renderFighterProfile();
   chooseFighterStepWrapper.append(fightersContainer);
   chooseFighterStepWrapper.append(chooseFighterStepNextFighter(), chooseFighterStepPrevFighter());

   return chooseFighterStepWrapper;
};
