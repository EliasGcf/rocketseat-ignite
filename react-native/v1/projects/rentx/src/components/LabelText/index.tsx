import { styled } from 'stitches.config';

import { Text } from '@components/react-native/Text';

export const LabelText = styled(Text, {
  letterSpacing: 2,
  textTransform: 'uppercase',

  color: '$label',
  fontFamily: '$label',
  fontSize: '$responsive.xxs',
});
