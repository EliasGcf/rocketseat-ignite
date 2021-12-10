import { FC } from 'react';
import { BorderlessButton, BorderlessButtonProps } from 'react-native-gesture-handler';

import { styled } from 'stitches.config';

export const ButtonContainer = styled(
  BorderlessButton as unknown as FC<BorderlessButtonProps>,
  {
    width: '$12',
    height: '$12',
    alignItems: 'center',
    justifyContent: 'center',
  },
);
