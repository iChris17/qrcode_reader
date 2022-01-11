import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QrReader from "../screens/QrReader";

const Stack = createStackNavigator();

const QrReaderStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="QR Reader"
        component={QrReader}
        options={{
          title: "QR Reader",
        }}
      />
    </Stack.Navigator>
  );
};

export default QrReaderStack;
