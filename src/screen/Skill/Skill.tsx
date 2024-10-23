import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './SkillStyles';

export default function Skill({ navigation }) {
  return (
    <View style={styles.container}>
        <Text>oi</Text>
        <Button title='Skills' onPress={()=> navigation.goBack()} />
    </View>
  );
}