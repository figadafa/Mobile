import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const DOCUMENTS = [
  { id: "intro/setup", title: "Introduction: Setup" },
  { id: "intro/basics", title: "Introduction: Basics" },
  { id: "hooks/usestate", title: "Hooks: useState" },
  { id: "hooks/usecontext", title: "Hooks: useContext" },
  { id: "advanced/routing", title: "Advanced: Routing" },
];

export default function DocsIndex() {
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof DOCUMENTS[0] }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(`/docs/${item.id}` as any)}
    >
      <Text style={styles.itemText}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={18} color="#666" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Documentation Content</Text>
      <FlatList
        data={DOCUMENTS}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    color: "#444",
  },
  separator: {
    height: 10,
  },
  backButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#6200ee",
    borderRadius: 8,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});
