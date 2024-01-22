import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { PlayerContext } from "./src/context/PLayerContext";
import StackNavigation from "./src/navigation/Stacknavigation";

export default function App() {
  return (
    <PlayerContext>
      <StackNavigation />
    </PlayerContext>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
