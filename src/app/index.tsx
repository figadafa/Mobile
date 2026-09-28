
import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="information-circle"
          size={24}
          color="#2563eb"
          style={styles.icon}
        />

        <Text style={styles.title}>Hello World</Text>

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
          <Text style={styles.buttonText}>Click Me</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe",
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
    backgroundColor: "#2563eb",
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