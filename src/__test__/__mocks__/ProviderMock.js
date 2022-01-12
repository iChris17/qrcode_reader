import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { qrReducer } from "../../redux/index";
import PropTypes from "prop-types";

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

ProviderMock.propTypes = {
  children: PropTypes.any,
};

export default ProviderMock;
