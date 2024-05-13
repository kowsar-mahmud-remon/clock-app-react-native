import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    "inter-regular": Inter_400Regular,
    "inter-bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "inter-regular" }}>My New App</Text>
      <Text style={{ fontFamily: "inter-bold" }}>My New App</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
