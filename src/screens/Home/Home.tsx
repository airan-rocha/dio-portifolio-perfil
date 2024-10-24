import React from 'react';
import { Button, Text, View, ScrollView } from 'react-native';
import { styles } from './HomeStyles';
import UserHighlight from '../../components/UserHighlight/UserHighlight';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import { SocialButtons } from '../../components/SocialButtons/SocialButtons';

const texto = "Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView, either set the height of the view directly (discouraged) or make sure all parent views have bounded height. Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector makes quick to debug."

export default function Home({ navigation }) {
  return (
  <View style={styles.container}>
    <ScrollView style={styles.scrollContainer}>
      <UserHighlight userName='Airan Rocha' imageSource={require('../../../assets/perfil.jpg')} />
      <Text>Olá</Text>
      <Button title='Skills' onPress={()=> navigation.navigate('Skill')} />
      <SocialButtons />

      <Text style={{marginTop:20}}>{texto}</Text>
      <Text>{texto}</Text>
      <Text>{texto}</Text>
      <Text>{texto}</Text>

      <ExpoStatusBar style='light' />
    </ScrollView>
  </View>
  );
}