import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QrList from "../screens/QrList";

const Stack = createStackNavigator();

const QrListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QR List"
        component={QrList}
        options={{
          title: "QR List",
        }}
      />
    </Stack.Navigator>
  );
};

export default QrListStack;
