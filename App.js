import { NavigationContainer } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import{useFonts}from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from 'react';
import BottomTabNavigation from './navigations/BottomTabNavigation';
import {Cart} from '../screen';

const Stack =createNativeStackNavigator(); 
export default function App() {
  const [fontsLoaded]=useFonts({
reguler: require("./assets/fonts/Poppins-Regular.ttf"),
light: require("./assets/fonts/Poppins-Light.ttf"),
bold: require("./assets/fonts/Poppins-Bold.ttf"),
medium: require("./assets/fonts/Poppins-Medium.ttf"),
extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
SemiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  const OnLayoutRootVeiw=useCallback(async() => {
    if (fontsLoaded){
      await SplashScreen.hideAsync();

    }
  },[fontsLoaded]
  );
  if (!fontsLoaded){
    return null;
  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
      name='BottomtabNavigation'
      component={BottomTabNavigation}
      options={{headerShown:false}}
      />
       <Stack.Screen 
      name='Cart'
      
      component={Cart}
      options={{headerShown:false}}
      />
    </Stack.Navigator>
   </NavigationContainer>
  );
}

