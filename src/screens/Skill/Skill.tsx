import React from 'react';
import { Button, Text, View, Alert } from 'react-native';

import { styles } from './SkillStyles';
import { SkillsCp } from '../../components/SkillsCp/SkillsCp';
import { ScrollView } from 'react-native-gesture-handler';

export default function Skill({ navigation }) {

  function saibaMaisClassificacao(){
    Alert.alert('Classificação ⭐️', 'a classificação por estrelas vão de 1 (não desenvolvido) a 7 (totalmente desenvolvido). A classificação a partir de 4 estrelas indica que a habilidade está em desenvolvimento. Classificações mais baixas indicam em qual área a pessoa deve se dicar mais ao desenvolvimento.')
  }

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Abaixo são apresentados as habilidades comportamentas e interpessoais que se referem à forma como a pessoa se relaciona com os outros e consigo mesmo. <Text onPress={saibaMaisClassificacao} style={styles.link}>Entenda a classificação</Text></Text>

        <ScrollView  style={styles.scrollView}>
          <SkillsCp />
        </ScrollView>
    </View>
  );
}