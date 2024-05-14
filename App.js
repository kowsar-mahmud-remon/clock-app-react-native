import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
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
    <ImageBackground source={require("./assets/light-bg.png")}
      style={{ flex: 1 }}>


      <View style={styles.container}>

        <View style={styles.topSection}>
          <View style={styles.topSectionLeft}>
            <Text style={styles.topSectionTextOne}>
              “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
            </Text>
            <Text style={styles.topSectionTextTwo}>
              - Ada Lovelace
            </Text>
          </View>
          <Image source={require("./assets/refresh.png")} />

        </View>

        <View style={{ marginBottom: 36 }}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={require("./assets/sun.png")} />
            <Text style={{ fontFamily: "inter-regular", fontSize: 15, color: "white", marginLeft: 8, letterSpacing: 5 }}>
              GOOD MORNING
            </Text>
          </View>

          <View style={{ marginTop: 8 }}>
            <Text>
              <Text style={{ fontFamily: "inter-bold", fontSize: 100, color: "white" }}>11:30</Text>
              <Text style={{ fontFamily: "inter-regular", fontSize: 15, color: "white" }}>
                BST
              </Text>
            </Text>
          </View>

          <View style={{ marginTop: 16 }}>


            <Text style={{ fontFamily: "inter-bold", fontSize: 15, color: "white", letterSpacing: 3 }}>
              IN LONDON, UK
            </Text>

          </View>

        </View>

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 32,
    paddingHorizontal: 26
  },
  topSection: {
    flexDirection: "row",

  },
  topSectionLeft: {
    flex: 1,
  },
  topSectionTextOne: {
    fontFamily: "inter-regular",
    color: "white",
    fontSize: 12,
  },
  topSectionTextTwo: {
    fontFamily: "inter-bold",
    color: "white",
    fontSize: 12,
    marginTop: 8,
  }
});
