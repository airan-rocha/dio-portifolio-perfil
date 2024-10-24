import React from 'react';
import { Button, Image, ImageBackground, ImageSourcePropType, Text, View } from 'react-native';

import { styles } from './UserHighlightStyles';
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';

interface UserProps {
    userName: string,
    imageSource: ImageSourcePropType,
}

export default function UserHighlight(props:UserProps) {
    const {userName, imageSource} = props;
    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../../../assets/binaryBg.png')} />
            <View style={styles.userContainer}>
                <Image style={styles.imagePerfil} source={imageSource} />
                <Text style={styles.textName}>{userName}</Text>
            </View>
            
        </View>
    );
}