import { CardStyleInterpolators, createStackNavigator, HeaderStyleInterpolators, TransitionPresets, TransitionSpecs } from '@react-navigation/stack';
import Home from '../screen/Home/Home';
import Skill from '../screen/Skill/Skill';
import { Easing } from 'react-native';

const {Navigator, Screen} = createStackNavigator();

export default function MyStack() {
    const animation ={
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 500,
            mass: 3,
            overshootClamping: true,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        },
    }
    const animation2 ={
        animation: 'timing',
        config: {
            duration: 100,
            easing: 100,
        },
    }

    return (
        <Navigator>
            <Screen
                name="Home"
                component={Home}
                options={{
                    title:'Perfil',
                }}
            />
            <Screen
                name="Skill"
                component={Skill}
                options={{
                    title:'Soft Skill\'s',
                    // gestureDirection: 'horizontal-inverted',
                    // headerStyleInterpolator: HeaderStyleInterpolators.forUIKit,
                    // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                    ...TransitionPresets.ModalSlideFromBottomIOS,
                }}
            />
        </Navigator>
    );
}