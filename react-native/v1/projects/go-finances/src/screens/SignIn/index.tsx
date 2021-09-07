import React, { useState } from 'react';
import { useTheme } from 'styled-components';

import AppleIcon from '@assets/svgs/apple-icon.svg';
import GoogleIcon from '@assets/svgs/google-icon.svg';
import AppLogoWithName from '@assets/svgs/logo-with-name.svg';

import { useAuth } from '@hooks/useAuth';

import { SocialButton } from '@screens/SignIn/SocialButton';

import { ActivityIndicator, Alert, Platform } from 'react-native';
import { Container, Description, Footer, Main, Title } from './styles';

export function SignIn() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const { signInWithGoogle, signInWithApple } = useAuth();

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();
    } catch (err) {
      setIsLoading(false);
      Alert.alert('Erro ao realizar login');
      console.log(err);
    }
  }

  async function handleSignInWithApple() {
    try {
      setIsLoading(true);
      await signInWithApple();
    } catch (err) {
      setIsLoading(false);
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
        {Platform.OS === 'ios' && (
          <SocialButton
            icon={AppleIcon}
            title="Entrar com Apple"
            onPress={handleSignInWithApple}
          />
        )}

        {isLoading && (
          <ActivityIndicator
            size={48}
            color={theme.colors.primary}
            style={{ marginTop: 16 }}
          />
        )}
      </Footer>
    </Container>
  );
}
