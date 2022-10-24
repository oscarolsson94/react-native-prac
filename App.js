import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";
import { GoalInput } from "./components/GoalInput";
import { GoalItem } from "./components/GoalItem";

export default function App() {
  const [text, setText] = useState("");
  const [goals, setGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setText(enteredText);
  };

  const addGoalHandler = () => {
    if (text) {
      setGoals((goals) => [...goals, { text, key: Math.random().toString() }]);
      setText("");
    }
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput
        text={text}
        inputHandler={goalInputHandler}
        addHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <Text>List of goals..</Text>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item.text} />}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
