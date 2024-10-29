import React from 'react';
import { Alert, Share, Text, View } from 'react-native';
import { styles } from './AboutMeStyles';

export default function AboutMe(props: any) {
  const {navigation} = props;
  const aboutMe = "Sou entusiasmado com novas tecnologias e programação. No meu dia a dia, além do meu trabalho como técnico de computadores, eu gosto de estudar linguagens de programação com foco em criação de sites e aplicativos de celular. Atualmente uma das linguagens que mais estou estudando é o javaScript juntamente com o framework React Native, tendo foco no desenvolvimento de aplicativos para o sistema operacional Android. Já estou bem avançado quanto a utilização e desenvolvimento com essas tecnologias. Se quiser saber mais sobre mim ou apenas conversar um pouco, basta entrar em contato comigo através do meu e-mail ou de uma das minhas redes sociais, eu irei gostar muito de conversar com você."

  const buttonTag = [
    {
      name: "Soft Skill's",
      action: () => {navigation.navigate('Skill')},
    },
    {
      name: "Certificados",
      action: () => {Alert.alert("Certificados", "Não há certificados adicionados")},
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Sobre min:</Text>
      <Text style={styles.textContent}>{aboutMe}</Text>
      <View style={styles.tagsContainer}>
        {
          buttonTag.map(({name, action}, index) => (
            <Text key={index} style={styles.tag} onPress={action} >{name}</Text>
          ))
        }
      </View>
    </View>
  );
}