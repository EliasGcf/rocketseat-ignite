import { styled } from 'stitches.config';

import AssetXLogoSvg from '@assets/svg/x-logo.svg';
import AssetDoneSvg from '@assets/svg/done.svg';

export const Container = styled('View', {
  flex: 1,
  backgroundColor: '$black',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '$responsive.24',
  paddingBottom: '$responsive.20',
});

export const XLogoSvg = styled(AssetXLogoSvg).attrs((props) => ({
  width: props.theme.sizes['responsive.93'],
  height: props.theme.sizes['responsive.58'],
  fill: '#242428',
}));

export const DoneSvg = styled(AssetDoneSvg, {
  marginTop: '$responsive.5',
});

export const Title = styled('Text', {
  marginTop: '$responsive.10',
  color: '$white',
  fontSize: '$responsive.3xl',
  fontFamily: '$archivo.semiBold',
});

export const Message = styled('Text', {
  color: '$label',
  fontSize: '$responsive.md',
  textAlign: 'center',
  lineHeight: '$responsive.6',
  marginTop: '$responsive.4',
  fontFamily: '$inter.regular',
});

export const Button = styled('TouchableOpacity', {
  height: '$responsive.14',
  paddingHorizontal: '$responsive.6',
  backgroundColor: '$gray.800',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'auto',
}).attrs(() => ({ activeOpacity: 0.7 }));

export const ButtonText = styled('Text', {
  fontFamily: '$inter.medium',
  fontSize: '$responsive.md',
  color: '$white',
});
