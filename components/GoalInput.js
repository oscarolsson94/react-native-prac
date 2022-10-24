import { StyleSheet, View, Button, TextInput } from "react-native";

export const GoalInput = ({ text, inputHandler, addHandler }) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={text}
      onChangeText={inputHandler}
      style={styles.textInput}
      placeholder="Your course goal!"
    />
    <Button title="Add Goal" onPress={addHandler} />
  </View>
);

const styles = StyleSheet.create({
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
});
