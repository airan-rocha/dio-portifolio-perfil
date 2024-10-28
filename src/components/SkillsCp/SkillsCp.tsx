import React from 'react';
import { View } from 'react-native';

import { styles } from './SkillsCpStyle';
import { SkillBox } from './SkillBox/SkillBox';

export function SkillsCp() {
  const mySkills = [
    {
      name: 'Liderança',
      description: 'Não demonstra medo de assumir projetos e executa muito bem o papel de líder incentivando e motivando os colegas quanto a realização dos projetos.',
      starRating: 7,
    },
    {
      name: 'Objetividade',
      description: 'Não demonstra medo de assumir projetos e executa muito bem o papel de líder incentivando e motivando os colegas quanto a realização dos projetos.',
      starRating: 6,
    },
    {
      name: 'Franqueza',
      description: 'Fala com as pessoas de forma clara e com muito respeito sem demonstrar medo de represálias.',
      starRating: 6,
    },
    {
      name: 'name',
      description: 'description',
      starRating: 1,
    },
  ];

  return (
    <View style={styles.container}>
        {
          mySkills.map(({name, description, starRating}, index) => (
            <SkillBox key={index} name={name} description={description} starRating={starRating} />
          ))
        }
    </View>
  );
}