import {Veiw,Text} from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Profile, Search} from "../screens";

import{Ionicon} from "expo/vector-icon"
import{COLORS} from "../constants/index"
const Tab=createBottomTabNavigator();
const  screenoption ={
    tabBarLabel:false,
    tabBarHideKeyboard:true,
    headerShown:false,
    tabBaeStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:70,
        
    }

}
const BottomTabNavigation=()=>{
    return(
       <Tab.Navigator screenOption={screenOption} >
        <Tab.Screen name="Home"
         component={Home}
         options={{
            tabBarIcon:({focused})=>{return < Ionicon name= {focused? "home":"home-outline"}
            size={24}
            color={focused?COLORS.primary:COLORS.gray2} />}
         }}
         />
    <Tab.Screen name="Search"
         component={Search}
         options={{
            tabBarIcon:({focused})=>{return < Ionicon name= {focused? "search":"search-sharp"}
            size={24}
            color={focused?COLORS.primary:COLORS.gray2} />}
         }}
         />    <Tab.Screen name="Profile"
         component={Profile}
         options={{
            tabBarIcon:({focused})=>{return < Ionicon name= {focused? "person":"person-outline"}
            size={24}
            color={focused?COLORS.primary:COLORS.gray2} />}
         }}
         />

       </Tab.Navigator>
    )
}
export default BottomTabNavigation