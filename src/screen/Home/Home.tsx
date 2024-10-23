import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './HomeStyles';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>oi</Text>
        <Button title='Skills' onPress={()=> navigation.navigate('Skill')} />
    </View>
  );
}