export const useAutoCloseDetails = () => {
  const detailsAccordions = document.querySelectorAll('.faq__accordion');

  detailsAccordions.forEach((accordion) => {
    accordion.addEventListener('toggle', function () {
      if (accordion.open) {
        detailsAccordions.forEach((item) => {
          if (item !== accordion) {
            item.removeAttribute('open');
          }
        });
      }
    });
  });
};
