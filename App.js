import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }
    const addGoalHandler = () => {
        console.log(enteredGoal);
        //setCourseGoals([...courseGoals, enteredGoal]);
        setCourseGoals(currentGoals => {
            return [...courseGoals, enteredGoal]
        })
    }
    return (
        <View style={styles.abacaxi}>
            <View style={styles.salsixa}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.batata}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <Button title="Add" onPress={addGoalHandler}/>
            </View>
            <View>
                {courseGoals.map((goal) => <Text key={goal}>{goal}</Text>)}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    abacaxi: {
        padding: 50,
    },
    salsixa: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    batata: {
        borderColor: 'black',
        borderWidth: 1,
        width: '80%'
    }
});
