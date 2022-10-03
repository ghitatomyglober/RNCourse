import { View, Alert, FlatList } from 'react-native';
import { styles } from './styles/GameScreenStyles';
import Title from '../components/ui/Title';
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

interface Props {
    userNumber: number,
    onGameOver: (guessRounds: number) => void
}

function generateRandomBetween(min: number, max: number, exclude: number) : number {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
  
    if (rndNum === exclude) {
      return generateRandomBetween(min, max, exclude);
    } else {
      return rndNum;
    }
  }

  let minBoundary = 1;
  let maxBoundary = 100;

function GameScreen({userNumber, onGameOver} : Props) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
      }, []);

    function nextGuessHandler(direction: string) { // direction => 'lower', 'greater'
        if ((direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)){
                Alert.alert("Don't lie!", 'You know that this is wrong...', 
                            [{ text: 'Sorry!', style: 'cancel'}])
                return;
            }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRandomNumber)
        setGuessRounds((prevGuessRounds) => [newRandomNumber, ...prevGuessRounds]);
    }
    
    const guessRoundsListLength = guessRounds.length;

    return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="md-remove" size={24} color="white" />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('greater')}>
                        <Ionicons name="md-add" size={24} color="white" />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
            <FlatList
                data={guessRounds}
                renderItem={(itemData) => (
                    <GuessLogItem
                        roundNumber={guessRoundsListLength - itemData.index}
                        guess={itemData.item}
                    />)}
                keyExtractor={(item: number, index: number) => '${item}'}
            />
      </View>
    </View>
    )
}

export default GameScreen;