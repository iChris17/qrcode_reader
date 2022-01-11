import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import QrReaderStack from "./QrReaderStack";
import QrListStack from "./QrListStack";

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          tabBarLabel: "QR Reader",
          tabBarIcon: ({ color, size }) => (
            <Icon name="qrcode" color={color} size={size} />
          ),
        }}
        name="QR Reader"
        component={QrReaderStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "QR List",
          tabBarIcon: ({ color, size }) => (
            <Icon name="list" color={color} size={size} />
          ),
        }}
        name="QR Lisr"
        component={QrListStack}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
