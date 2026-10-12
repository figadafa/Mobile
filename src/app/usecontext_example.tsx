import React, { createContext, useContext, useState } from "react";
import { View, Text, Button, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";

// Define TypeScript types for the Context
interface ThemeContextType {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default function UseContextExample() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Home />
    </ThemeContext.Provider>
  );
}

function Home() {
  return <Profile />;
}

function Profile() {
  return <UserName />;
}

function UserName() {
  return <UserNameItem />;
}

function UserNameItem() {
  const context = useContext(ThemeContext);
  const router = useRouter();

  if (!context) {
    return (
      <View style={styles.center}>
        <Text>Error: ThemeContext not found.</Text>
      </View>
    );
  }

  const { darkMode, setDarkMode } = context;

  const themeStyles = darkMode ? styles.darkContainer : styles.lightContainer;
  const textStyles = darkMode ? styles.darkText : styles.lightText;

  return (
    <SafeAreaView style={[styles.container, themeStyles]}>
      <View style={styles.content}>
        <Text style={[styles.title, textStyles]}>
          {darkMode ? "Dark Mode Active" : "Light Mode Active"}
        </Text>
        
        <Text style={[styles.description, textStyles]}>
          This example demonstrates React Context being passed through a component hierarchy:
          Home {">"} Profile {">"} UserName {">"} UserNameItem.
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Toggle Theme"
            onPress={() => setDarkMode(!darkMode)}
            color={darkMode ? "#bb86fc" : "#6200ee"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Back to Home"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  lightContainer: {
    backgroundColor: "#ffffff",
  },
  darkContainer: {
    backgroundColor: "#121212",
  },
  lightText: {
    color: "#000000",
  },
  darkText: {
    color: "#ffffff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 12,
  },
});
