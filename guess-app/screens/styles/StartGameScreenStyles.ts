import { StyleSheet } from "react-native";
import Colors from '../../constants/Colors';

// const deviceHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex:1,
        // marginTop: deviceHeight < 380 ? 30 : 100,
        alignItems: 'center'
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    },
    instructionsText: {
        color: Colors.accent500,
        fontSize: 24,

    }
});