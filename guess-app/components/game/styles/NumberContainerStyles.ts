import { StyleSheet, Dimensions } from "react-native";
import Colors from '../../../constants/Colors'

const deviceWidth = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        borderWidth:4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24, 
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 28 : 24,
        // fontWeight: 'bold'
        fontFamily: 'open-sans-bold'
    }
});