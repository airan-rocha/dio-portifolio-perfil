import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';
import IconFontAwesome5 from '@expo/vector-icons/FontAwesome5'

import { styles } from './SocialButtonStyles';

interface SocialButtonProps {
    title: string,
    onPress?: (() => void) | undefined,
    iconFontAwesome5Name?: string,
}

export function SocialButton(props: SocialButtonProps) {
    const {title, onPress, iconFontAwesome5Name: iconAntDesignName} = props;

    const Icon = () => {
        if (iconAntDesignName){
            return (
                <IconFontAwesome5 name={iconAntDesignName} size={30} color={'#fff'} />
            )
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Icon />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
        </>
  );
}