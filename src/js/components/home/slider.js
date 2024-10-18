import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

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
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    loop: true,
    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};
