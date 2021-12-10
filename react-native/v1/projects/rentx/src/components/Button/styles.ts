import { FC } from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import { styled } from 'stitches.config';

import { Text } from '@components/react-native/Text';

export const ButtonContainer = styled(RectButton as unknown as FC<RectButtonProps>, {
  alignItems: 'center',
  justifyContent: 'center',
  height: '$responsive.14',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$brand.mid',
      },

      success: {
        backgroundColor: '$success.mid',
      },
    },

    enabled: {
      false: { opacity: 0.5 },
    },
  },
});

export const ButtonText = styled(Text, {
  color: '$white',
  fontFamily: '$button',
  fontSize: '$responsive.md',
});
