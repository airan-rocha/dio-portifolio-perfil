import React from 'react';
import { Image, ImageSourcePropType, Linking, Text, TouchableOpacity, View } from 'react-native';
import IconIonicons from '@expo/vector-icons/Ionicons'
import { styles } from './UserHighlightStyles';

interface UserProps {
    userName: string,
    imageSource: ImageSourcePropType,
}

export default function UserHighlight(props:UserProps) {
    const {userName, imageSource} = props;
    const mail= 'rocha.airan@gmail.com';

    const openMail = () => Linking.openURL(`mailto:${mail}`);

    return (
        <View style={styles.container}>
            <Image style={styles.bgImage} source={require('../../../assets/binaryBg.png')} />
            <View style={styles.userContainer}>
                <Image style={styles.imagePerfil} source={imageSource} />
                <View style={styles.infoContainer}>
                    <TouchableOpacity style={styles.mailContainer} onPress={openMail}>
                        <IconIonicons name='mail' size={20} color='#000' style={{marginRight: 10,}} />
                        <Text>{mail}</Text>
                    </TouchableOpacity>
                    <Text style={styles.textName}>{userName}</Text>
                </View>
            </View>
            
        </View>
    );
}