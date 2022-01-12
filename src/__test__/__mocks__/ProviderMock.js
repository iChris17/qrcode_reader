import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { qrReducer } from "../../redux/index";

const store = createStore(qrReducer, {
  QRData: [
      "www.youtube.com",
      "www.netflix.com"
  ],
});

const ProviderMock = (props) => (
  <NavigationContainer>
    <Provider store={store}>{props.children}</Provider>
  </NavigationContainer>
);

export default ProviderMock;
