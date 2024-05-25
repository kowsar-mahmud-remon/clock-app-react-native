// import { StatusBar } from 'expo-status-bar';
// import { ActivityIndicator, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
// import { useState } from 'react';


// const RowView = ({ level, value }) => {
//   return (
//     <View style={{
//       flexDirection: "row",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: 8
//     }}>
//       <View>
//         <Text style={{
//           fontFamily: "inter-regular",
//           color: "#303030",
//           fontSize: 10,
//           letterSpacing: 2
//         }}>
//           {level}
//         </Text>
//       </View>
//       <View>
//         <Text style={{
//           fontFamily: "inter-regular",
//           color: "#303030",
//           fontSize: 20
//         }}>
//           {value}
//         </Text>
//       </View>
//     </View>
//   );
// };

// export default function App() {
//   const [showMore, setShowMore] = useState(false);

//   let [fontsLoaded] = useFonts({
//     "inter-regular": Inter_400Regular,
//     "inter-bold": Inter_700Bold,
//   });

//   if (!fontsLoaded) {
//     return <ActivityIndicator />;
//   }
//   return (
//     <ImageBackground source={require("./assets/light-bg.png")}
//       style={{ flex: 1 }}>
//       <View style={styles.container}>

//         {
//           !showMore && (
//             <View style={styles.topSection}>
//               <View style={styles.topSectionLeft}>
//                 <Text style={styles.topSectionTextOne}>
//                   “The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”
//                 </Text>
//                 <Text style={styles.topSectionTextTwo}>
//                   - Ada Lovelace
//                 </Text>
//               </View>
//               <Image source={require("./assets/refresh.png")} />

//             </View>
//           )
//         }

//         <View style={{ marginBottom: 36 }}>

//           <View style={{ flexDirection: "row", alignItems: "center" }}>
//             <Image source={require("./assets/sun.png")} />
//             <Text style={{ fontFamily: "inter-regular", fontSize: 15, color: "white", marginLeft: 8, letterSpacing: 5 }}>
//               GOOD MORNING
//             </Text>
//           </View>

//           <View style={{ marginTop: 8 }}>
//             <Text>
//               <Text style={{ fontFamily: "inter-bold", fontSize: 100, color: "white" }}>11:30</Text>
//               <Text style={{ fontFamily: "inter-regular", fontSize: 15, color: "white" }}>
//                 BST
//               </Text>
//             </Text>
//           </View>

//           <View style={{ marginTop: 16 }}>
//             <Text style={{ fontFamily: "inter-bold", fontSize: 15, color: "white", letterSpacing: 3 }}>
//               IN LONDON, UK
//             </Text>
//           </View>

//           <TouchableOpacity onPress={() => { setShowMore(!showMore); }}
//             style={{ flexDirection: "row", width: 115, height: 40, backgroundColor: "#fff", borderRadius: 30, marginTop: 50, justifyContent: "space-between", paddingLeft: 16, paddingRight: 4, alignItems: "center" }}>
//             <Text style={{ fontFamily: "inter-bold", fontSize: 12, color: "#000", letterSpacing: 3 }}>
//               {showMore ? "LESS" : "MORE"}
//             </Text>
//             <Image source={showMore ? require("./assets/arrow-up.png") : require("./assets/arrow-down.png")} />


//           </TouchableOpacity>
//         </View>

//       </View>

//       {showMore && (
//         <View style={{ backgroundColor: "#fff", opacity: 0.8, paddingVertical: 48, paddingHorizontal: 26 }}>
//           <RowView level={"CURRENT TIME ZONE"} value={"EUROPE/LONDON"} />
//           <RowView level={"DAY OF THE YEAR"} value={"295"} />
//           <RowView level={"DAY OF THE WEEK"} value={"5"} />
//           <RowView level={"WEEK NUMBER"} value={"42"} />
//         </View>
//       )}
//     </ImageBackground>

//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'space-between',
//     marginTop: 32,
//     paddingHorizontal: 26
//   },
//   topSection: {
//     flexDirection: "row",

//   },
//   topSectionLeft: {
//     flex: 1,
//   },
//   topSectionTextOne: {
//     fontFamily: "inter-regular",
//     color: "white",
//     fontSize: 12,
//   },
//   topSectionTextTwo: {
//     fontFamily: "inter-bold",
//     color: "white",
//     fontSize: 12,
//     marginTop: 8,
//   }
// });




////////////////////Stack Navigation/////////////

// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Text, View, TouchableOpacity, Image } from 'react-native';


// function HomeScreen({ navigation }) {
//   const userId = 1;
//   return (

//     <View>
//       <Text>Home screen</Text>

//       <TouchableOpacity onPress={() => {
//         navigation.navigate("Detail", { userId });
//       }}>
//         <Text>Go to detail</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// function DetailsScreen({ navigation, route }) {
//   const id = route.params.userId;
//   return (
//     <View>
//       <Text>Details Screen</Text>
//       <Text>{id}</Text>
//     </View>
//   );
// };

// const Stack = createNativeStackNavigator();


// const Logo = () => {
//   return (
//     <Image source={require("./assets/favicon.png")} />
//   );
// };


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: "orange",
//           },
//           headerTintColor: "white",
//           headerTitleStyle: {
//             fontWeight: "bold",
//             fontSize: 30
//           }
//         }}
//       >
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//         />
//         <Stack.Screen
//           name="Detail"
//           component={DetailsScreen}
//           options={{
//             title: "Detail Page",
//             // headerTitle: () => <Logo />,
//             headerStyle: {
//               backgroundColor: "blue",
//             },
//             headerTintColor: "white",
//             headerTitleStyle: {
//               fontWeight: "bold",
//               fontSize: 30
//             }
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }




////////////////////Bottom tab navigation/////////////

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Text, View, TouchableOpacity, Image } from 'react-native';

// const Tab = createBottomTabNavigator();


// function HomeScreen() {
//   return (

//     <View>
//       <Text>Home screen</Text>
//     </View>
//   );
// };

// function DetailsScreen() {
//   return (
//     <View>
//       <Text>Details Screen</Text>
//     </View>
//   );
// };

// function ProfileScreen() {
//   return (
//     <View>
//       <Text>Profile Screen</Text>
//     </View>
//   );
// };

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         initialRouteName="Home"
//       >
//         <Tab.Screen
//           name="Home"
//           component={HomeScreen}
//         />
//         <Tab.Screen
//           name="Detail"
//           component={DetailsScreen}
//         />
//         <Tab.Screen
//           name="Profile"
//           component={ProfileScreen}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

////////////////////Drawer navigation/////////////

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View, TouchableOpacity, Image } from 'react-native';

const Drawer = createDrawerNavigator();


function HomeScreen() {
  return (

    <View>
      <Text>Home screen</Text>
    </View>
  );
};

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

function ProfileScreen() {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
      >
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
        />
        <Drawer.Screen
          name="Detail"
          component={DetailsScreen}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}