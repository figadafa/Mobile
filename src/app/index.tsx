
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="information-circle"
          size={24}
          color="#ed2f1e"
          style={styles.icon}
        />

        <Text style={styles.title}>Percobaan Mobile</Text>

        <TextInput
          placeholder="I'm the input..."
          style={styles.input}
        />

        <View style={styles.button}>
          <Ionicons
            name="hand-left"
            size={16}
            color="white"
          />
          <Button
            title="Click Me"
            onPress={() => {}}
            color="white"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fcfbf9",
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 16,
    alignItems: "center",
  },

  icon: {
    marginBottom: 12,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
    textAlign: "center",
  },

  input: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 10,
    width: "100%",
  },

  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});