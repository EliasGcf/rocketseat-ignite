import React from 'react';

import AppleIcon from '@assets/svgs/apple-icon.svg';
import GoogleIcon from '@assets/svgs/google-icon.svg';
import AppLogoWithName from '@assets/svgs/logo-with-name.svg';

import { SocialButton } from '@screens/SignIn/SocialButton';

import { Container, Description, Footer, Main, Title } from './styles';

export function SignIn() {
  return (
    <Container>
      <Main>
        <AppLogoWithName />

        <Title>Controle suas finanças de forma muito simples</Title>

        <Description>Faça seu login com uma das contas abaixo</Description>
      </Main>

      <Footer>
        <SocialButton
          icon={GoogleIcon}
          title="Entrar com Google"
          style={{ marginTop: -27, marginBottom: 16 }}
        />
        <SocialButton title="Entrar com Apple" icon={AppleIcon} />
      </Footer>
    </Container>
  );
}
