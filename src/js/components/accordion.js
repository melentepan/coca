export const useAccordion = () => {
  const accordionLists = document.querySelectorAll('.accordion');

  accordionLists.forEach((el) => {
    el.addEventListener('click', (e) => {
      const accordionList = e.currentTarget;
      const accordionOpenedItem = accordionList.querySelector(
        '.accordion__item--opened',
      );
      const accordionOpenedContent = accordionList.querySelector(
        '.accordion__item--opened .accordion__content',
      );

      const accordionControl = e.target.closest('.accordion__control');
      if (!accordionControl) return;
      e.preventDefault();
      const accordionItem = accordionControl.parentElement;
      const accordionContent = accordionControl.nextElementSibling;

      if (accordionOpenedItem && accordionOpenedItem != accordionItem) {
        accordionOpenedItem.classList.remove('accordion__item--opened');
        accordionOpenedContent.style.maxHeight = null;
      }
      accordionItem.classList.toggle('accordion__item--opened');

      if (accordionItem.classList.contains('accordion__item--opened')) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      } else {
        accordionContent.style.maxHeight = null;
      }
    });
  });
};
