import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Skill from '../screens/Skill/Skill';
import IconFontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Text, View } from 'react-native';

const {Navigator, Screen} = createStackNavigator();

export default function MyStack() {
    const animation = {
        animation: 'spring',
        config: {
            stiffness: 300,
            damping: 1000,
            mass: 8,
            overshootClamping: true,
            restDisplacementThreshold: 10,
            restSpeedThreshold: 5,
        },
    }

    return (
        <Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerStyle:{backgroundColor: '#3f465a'},
            }}
        >
            <Screen
                name="Home"
                component={Home}
                options={{
                    title:'Perfil - Portifólio',
                    // headerShown: false,
                    // headerTransparent: true,
                }}
            />
            <Screen
                name="Skill"
                component={Skill}
                options={{
                    title:'Soft Skill\'s',
                    headerRight: () => <IconFontAwesome5 name='brain' size={30} color='#fff' style={{marginRight: 20}} /> ,
                    gestureDirection: 'horizontal',
                    gestureEnabled: true,
                    transitionSpec: {
                        open: animation,
                        close: animation,
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
                    // ...TransitionPresets.SlideFromRightIOS,
                    // presentation: 'transparentModal',
                    // headerShown: false,
                }}
            />
        </Navigator>
    );
}