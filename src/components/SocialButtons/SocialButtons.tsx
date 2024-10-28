import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from './SocialButtonsStyles';
import { SocialButton } from './SocialButton/SocialButton';

export function SocialButtons() {
  return (
    <>
      <Text style={styles.text} >Siga-me: </Text>
      <View style={styles.container}>
          <SocialButton title='GitHub' iconFontAwesome5Name='github-square' onPress={() => Linking.openURL('https://github.com/airan-rocha/dio-portifolio-perfil')} />
          <SocialButton title='Linkedin' iconFontAwesome5Name='linkedin' onPress={() => Linking.openURL('https://br.linkedin.com/in/airan-rocha')} />
          <SocialButton title='Facebook' iconFontAwesome5Name='facebook-square' onPress={() => Linking.openURL('https://www.facebook.com/airansp')} />
          <SocialButton title='Instagram' iconFontAwesome5Name='instagram-square' onPress={() => Linking.openURL('https://www.instagram.com/rocha_airan/')} />
      </View>
    </>
  );
}