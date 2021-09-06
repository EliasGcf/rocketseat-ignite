import React from 'react';

import AppleIcon from '@assets/svgs/apple-icon.svg';
import GoogleIcon from '@assets/svgs/google-icon.svg';
import AppLogoWithName from '@assets/svgs/logo-with-name.svg';

import { useAuth } from '@hooks/useAuth';

import { SocialButton } from '@screens/SignIn/SocialButton';

import { Alert } from 'react-native';
import { Container, Description, Footer, Main, Title } from './styles';

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (err) {
      Alert.alert('Erro ao realizar login');
      console.log(err);
    }
  }

  return (
    <Container>
      <Main>
        <AppLogoWithName />

        <Title>
          Controle suas{'\n'}finanças de forma{'\n'}muito simples
        </Title>

        <Description>Faça seu login com{'\n'}uma das contas abaixo</Description>
      </Main>

      <Footer>
        <SocialButton
          icon={GoogleIcon}
          title="Entrar com Google"
          style={{ marginTop: -27, marginBottom: 16 }}
          onPress={handleSignInWithGoogle}
        />
        <SocialButton
          enabled={false}
          icon={AppleIcon}
          title="Entrar com Apple"
          style={{ opacity: 0.5 }}
        />
      </Footer>
    </Container>
  );
}
