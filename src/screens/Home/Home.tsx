import React from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import { styles } from './HomeStyles';
import UserHighlight from '../../components/UserHighlight/UserHighlight';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SocialButtons } from '../../components/SocialButtons/SocialButtons';
import AboutMe from '../../components/AboutMe/AboutMe';


export default function Home({ navigation }) {
  return (
  <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      <UserHighlight userName='Airan Rocha' imageSource={require('../../../assets/perfil.jpg')} />
      <SocialButtons />
      <AboutMe navigation={navigation} />
      <ExpoStatusBar style='light' />
    </ScrollView>
  </View>
  );
}