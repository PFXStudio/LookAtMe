import { cls } from '../cls.js';

export const TabbarLinkColors = (colorsProp = {}, dark) => {
  return {
    textIos: cls(
      'text-black text-opacity-40',
      dark('dark:text-white dark:text-opacity-55')
    ),
    textActiveIos: 'text-primary',
    textMaterial: cls(
      'text-md-light-on-surface-variant',
      dark('dark:text-md-dark-on-surface-variant')
    ),
    textActiveMaterial: cls(
      'text-md-light-on-secondary-container',
      dark('dark:text-md-dark-on-secondary-container')
    ),
    iconBgIos: '',
    iconBgActiveIos: '',
    iconBgMaterial: '',
    iconBgActiveMaterial: cls(
      'bg-md-light-secondary-container',
      dark('dark:bg-md-dark-secondary-container')
    ),
    ...colorsProp,
  };
};
