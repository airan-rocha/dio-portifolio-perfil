import React from 'react';
import { View } from 'react-native';

import { styles } from './SkillsCpStyle';
import { SkillBox } from './SkillBox/SkillBox';

export function SkillsCp() {
  return (
    <View style={styles.container}>
        <SkillBox name='Liderança' description='Habilidade em liderar' starRating={7} />
        <SkillBox name='Objetividade' description='Habilidade em liderar' starRating={6} />
        <SkillBox name='Franqueza' description='Habilidade em liderar' starRating={5} />
        <SkillBox name='Franqueza' description='Habilidade em liderar' starRating={4} />
        <SkillBox name='Franqueza' description='Habilidade em liderar' starRating={3} />
    </View>
  );
}