import { cls } from '../cls.js';

export const ChipClasses = (props, colors) => {
  return {
    base: {
      common: `text-sm inline-flex items-center justify-center align-middle rounded-full px-3`,
      ios: 'rounded-full h-7',
      material: 'rounded-lg h-8 font-medium',
      fill: {
        ios: cls(
          colors.fillBg || colors.fillBgIos,
          colors.fillText || colors.fillTextIos
        ),
        material: cls(
          colors.fillBg || colors.fillBgMaterial,
          colors.fillText || colors.fillTextMaterial
        ),
      },
      outline: {
        common: `border`,
        ios: cls(
          colors.outlineText || colors.outlineTextIos,
          colors.outlineBorder || colors.outlineBorderIos
        ),
        material: cls(
          colors.outlineText || colors.outlineTextMaterial,
          colors.outlineBorder || colors.outlineBorderMaterial
        ),
      },
    },
    media: {
      common: '-my-1 mr-1 select-none',
      ios: '-ml-3',
      material: '-ml-2',
    },
    deleteButton:
      '-mr-2 -my-1 ml-1 h-full flex items-center justify-center w-6 cursor-pointer opacity-50 active:opacity-100 select-none',
  };
};
