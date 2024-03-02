import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text>Hi</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.menu}>
        <Text>Haha</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "auto",

    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  menu: {
    width: "auto",
    flex: 1,
    backgroundColor: "#333",
    textAlign: "center",
  },
});
