import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function DocDetail() {
  const { slug } = useLocalSearchParams();
  const router = useRouter();

  // Slug can be a string or an array of strings in catch-all routes
  const slugPath = Array.isArray(slug) ? slug.join(" / ") : slug;

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.label}>Viewing Document:</Text>
        <Text style={styles.slug}>{slugPath}</Text>
        
        <Text style={styles.content}>
          This is a dynamic route demonstration for Codelab 2. 
          The parameters are extracted using "useLocalSearchParams".
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.back()}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f2f5",
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: "#666",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  slug: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: "#444",
    lineHeight: 24,
    marginBottom: 32,
  },
  button: {
    backgroundColor: "#007aff",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
