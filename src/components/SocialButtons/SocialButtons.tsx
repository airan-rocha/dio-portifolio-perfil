import React from 'react';
import { View, Text, Linking } from 'react-native';
import { styles } from './SocialButtonsStyles';
import { SocialButton } from './SocialButton/SocialButton';

export function SocialButtons() {
  return (
    <View style={styles.container}>
        <Text style={styles.text} >Siga-me: </Text>
        <SocialButton title='GitHub' iconFontAwesome5Name='github-square' onPress={() => Linking.openURL('https://github.com/airan-rocha/dio-portifolio-perfil')} />
        <SocialButton title='Linkedin' iconFontAwesome5Name='linkedin' onPress={() => console.log('button press')} />
        <SocialButton title='Facebook' iconFontAwesome5Name='facebook-square' onPress={() => console.log('button press')} />
        <SocialButton title='Instagram' iconFontAwesome5Name='instagram-square' onPress={() => console.log('button press')} />
    </View>
  );
}