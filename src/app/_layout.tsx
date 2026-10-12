import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="usecontext_example" options={{ title: "Dark Mode Example" }} />
    </Stack>
  );
}