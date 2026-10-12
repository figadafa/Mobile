import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

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
        <TouchableOpacity
          style={styles.originalButton}
          onPress={() => {}} // Preserving original empty behavior
        >
          <Ionicons
            name="hand-left"
            size={16}
            color="white"
          />
          <Text style={styles.originalButtonText}>Click Me</Text>
        </TouchableOpacity>

        {/* New button for Dark Mode example */}
        <TouchableOpacity
          style={styles.darkModeButton}
          onPress={() => router.push("/usecontext_example")}
        >
          <Ionicons
            name="moon"
            size={16}
            color="white"
          />
          <Text style={styles.darkModeButtonText}>Go to Dark Mode Example</Text>
        </TouchableOpacity>
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

  originalButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#ed2f1e", // Matching original red title color for consistency
    padding: 12,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
  },

  originalButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  darkModeButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#6200ee", // A distinct color for the new button
    padding: 12,
    borderRadius: 10,
    width: "100%",
    marginBottom: 10,
  },

  darkModeButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
