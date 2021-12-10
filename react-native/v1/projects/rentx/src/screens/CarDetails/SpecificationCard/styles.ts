import { styled } from 'stitches.config';

import { Text } from '@components/react-native/Text';

export const Container = styled('View', {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$gray.100',
  height: '$responsive.23',

  borderBottomColor: '$gray.200',
  borderBottomWidth: '$responsive.px',
});

export const Title = styled(Text, {
  marginTop: 12,
  color: '$text',
  fontFamily: '$button',
  fontSize: '$responsive.xs',
});
