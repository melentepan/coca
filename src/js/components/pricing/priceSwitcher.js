export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterpricePrice = document.querySelector('[data-price="enterprise"]');
  const priceTextList = document.querySelectorAll('[data-price="price-text"]');

  const priceMonthList = {
    starter: {
      default: 120,
      withSale: 100,
    },
    popular: {
      default: 1680,
      withSale: 1400,
    },
    enterprice: {
      default: 2520,
      withSale: 2100,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = `$${priceMonthList.starter.withSale * 12}`;
    popularPrice.textContent = `$${priceMonthList.popular.withSale * 12}`;
    enterpricePrice.textContent = `$${priceMonthList.enterprice.withSale * 12}`;

    priceTextList.forEach((element) => {
      element.textContent = '/yr';
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = `$${priceMonthList.starter.default}`;
    popularPrice.textContent = `$${priceMonthList.popular.default}`;
    enterpricePrice.textContent = `$${priceMonthList.enterprice.default}`;

    priceTextList.forEach((element) => {
      element.textContent = '/mo';
    });
  };

  switcher.checked = true;
  setPricesWithSale();

  switcher.addEventListener('click', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
