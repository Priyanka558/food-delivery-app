/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
 
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';
// import CustomDrawer from './src/components/navigation/CustomDrawer';
// import MainLayout from './src/screens/MainLayout';


// //const Drawer = createDrawerNavigator();
// const App = () => {
//   const Stack = createStackNavigator();
//   //const Drawer = createDrawerNavigator();
//   return (
//     <NavigationContainer>
//       {/* <Drawer.Navigator
//       drawerContent={(props:any)=><CustomDrawer/>}
//         screenOptions={{
//           drawerType: 'slide',
//           drawerStyle: {
//             flex: 1,
//             width: '65%',
//             paddingRight: 20,
//             backgroundColor: 'transparent',
//           },
//           overlayColor: 'transparent',
//           sceneContainerStyle: {backgroundColor: 'transparent'},
//         }}
//         initialRouteName="MainLayout">
//         <Drawer.Screen name="MainLayout" component={MainLayout} />
//       </Drawer.Navigator> */}
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false
//       }}
//       initialRouteName='Home'
//     >
//       <Stack.Screen
//         name="Home"
//         component={CustomDrawer}
//       />
//     </Stack.Navigator>
//   </NavigationContainer>
//   );
// };


// export default App;

import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }:any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}