import { StyleSheet, Text, View, Pressable } from "react-native";

export const GoalItem = ({ text, deleteHandler }) => (
  <Pressable onPress={() => deleteHandler(text)}>
    <View style={styles.goalItem}>
      <Text style={styles.goalItemText}>{text}</Text>
    </View>
  </Pressable>
);

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e08cc",
  },
  goalItemText: {
    color: "white",
  },
});
