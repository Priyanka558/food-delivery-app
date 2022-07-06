import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS} from '../../constants';
import MainLayout from '../../screens/MainLayout';
// import MainLayout from '../../screens/MainLayout';
// import Home from '../../screens/Home/Home';

//const Drawer = createDrawerNavigator();

const CustomDrawer = () => {
  //const Drawer = createDrawerNavigator();
  return (
    <View style={{flex: 1, backgroundColor: COLORS.primary}}>
      {/* <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          overlayColor: 'transparent',
          sceneContainerStyle: {backgroundColor: 'transparent'},
        }}
        initialRouteName="MainLayout">
        <Drawer.Screen name="MainLayout" component={MainLayout} />
      </Drawer.Navigator> */}
      <Text>Custom drawer</Text>
    </View>
  );
};

export default CustomDrawer;
