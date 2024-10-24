import '../assets/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAccordion } from './components/accordion.js';
import { usePriceSwitcher } from './components/pricing/priceSwitcher.js';
import { useAutoCloseDetails } from './components/pricing/autoCloseDetails.js';

useTheme();
useBurger();
useAccordion();
usePriceSwitcher();
useAutoCloseDetails();
