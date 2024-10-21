import Swiper from 'swiper';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    modules: [Autoplay],
    allowTouchMove: false,
    slidesPerView: 1.6,
    loop: true,
    autoplay: {
      delay: 0,
    },
    speed: 1500,
    freeMode: true,
    breakpoints: {
      414: {
        slidesPerView: 2.1,
      },
      769: {
        slidesPerView: 1.5,
      },
      901: {
        slidesPerView: 1.9,
      },
      993: {
        slidesPerView: 2.2,
      },
      1201: {
        slidesPerView: 2.65,
      },
    },
  });
};

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    fadeEffect: {
      crossFade: true,
    },
    speed: 750,
    effect: 'fade',
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
