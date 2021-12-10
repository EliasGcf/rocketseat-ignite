import { styled, theme } from 'stitches.config';

export const Dot = styled('View', {
  borderRadius: 9999,
  width: theme.sizes['responsive.3'] / 2,
  height: theme.sizes['responsive.3'] / 2,
  backgroundColor: '$gray.300',

  variants: {
    isActive: {
      true: {
        backgroundColor: '$title',
      },
    },

    shouldHaveSpacing: {
      true: {
        marginRight: 8,
      },
    },
  },
});
