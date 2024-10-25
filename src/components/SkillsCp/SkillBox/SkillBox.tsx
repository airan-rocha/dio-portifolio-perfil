import React, { useState } from 'react';
import { View, Text } from 'react-native';
import IconFontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './SkillBoxStyle';

interface SkillBoxProps {
    name: string,
    description: string,
    starRating: 1 | 2 | 3 | 4 | 5 | 6 | 7 ,
}

export function SkillBox(props: SkillBoxProps) {
    const {name, description, starRating} = props;
    const star2 = [{id: 1, name: 'star-o'},{id: 2, name: 'star-o'},{id: 3, name: 'star-o'},{id: 4, name: 'star-o'},{id: 5, name: 'star-o'},{id: 6, name: 'star-o'},{id: 7, name: 'star-o'}];
    
    for (let count = 0; count < starRating; count++) {
        if(count < star2.length){
            star2[count].name = 'star';
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.textName}>{name}</Text>
            <Text style={styles.textDescription}>{description}</Text>
            <View style={styles.starContainer}>
            {/* <IconFontAwesome name={star2[0].name} size={30} color='#fff000' />  */}
                {
                    star2.map(({id, name})=> (
                        <IconFontAwesome key={id} name={name} size={30} color='#fff000' />
                    ))
                }
            </View>
        </View>
  );
}