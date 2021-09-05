import { ScrollViewProps } from 'react-native';
import styled from 'styled-components/native';

type ContainerProps = {
  bottomOffset?: number;
};

export const Container = styled.ScrollView.attrs<ContainerProps>(props => {
  return {
    contentContainerStyle: { alignItems: 'center', paddingBottom: props.bottomOffset },
    showsVerticalScrollIndicator: false,
  } as ScrollViewProps;
})<ContainerProps>`
  padding: 40px 24px 0 24px;
`;
