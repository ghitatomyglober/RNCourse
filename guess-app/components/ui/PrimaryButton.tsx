import { View, Text, Pressable, GestureResponderEvent } from 'react-native';
import { styles } from './styles/PrimaryButtonStyles';
import Colors from '../../constants/Colors'

interface Props {
    children: JSX.Element | string,
    onPress?: ((event: GestureResponderEvent) => void) | null | undefined,
};

function PrimaryButton({ children, onPress } : Props) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => 
                    pressed 
                        ? [styles.buttonInnerContainer, styles.pressed] 
                        : styles.buttonInnerContainer} 
                onPress={onPress} 
                android_ripple={{color: Colors.primary600}}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;