import '../assets/scss/main.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  usePartnersSlider,
  useInsightSlider,
  useTestimonialsSlider,
} from './components/home/slider.js';
import { useAccordion } from './components/accordion.js';

useTheme();
useBurger();
usePartnersSlider();
useInsightSlider();
useTestimonialsSlider();
useAccordion();
