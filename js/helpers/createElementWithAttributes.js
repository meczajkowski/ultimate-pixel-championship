// Helper function to create elements with attributes
export const createElementWithAttributes = function (elementType, attributes) {
   const element = document.createElement(elementType);
   for (const key in attributes) {
      if (key === 'textContent') {
         element.textContent = attributes[key];
      } else {
         element.setAttribute(key, attributes[key]);
      }
   }
   return element;
};
