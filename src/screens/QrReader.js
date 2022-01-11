import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
  View,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch } from "react-redux";

const QrReader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPermissions, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      askForCameraPermission();
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, [])
  );

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  };

  //method that gets the result of the scan
  const handleBarCodeScanned = ({ data }) => {
    //asking if it is an QR Code
    const QRData = data;
    setScanned(true);
    setText(QRData);

    dispatch({ type: "SAVE_QRDATA", payload: QRData });
  };

  if (!hasPermissions) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>You need to allow the app to use the camera</Text>
        <Button title="Allow" onPress={() => askForCameraPermission()} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {!isVisible ? (
        <>
          <Text>Loading camera</Text>
          <ActivityIndicator size="large" color="#AEAEAE" />
        </>
      ) : (
        <>
          <View style={styles.barcodebox}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 500, width: 600 }}
            />
          </View>
          <Text style={styles.text}>{text}</Text>
          <Button
            title={!scanned ? "Scanning" : "Scan"}
            onPress={() => setScanned(false)}
            color={"skyblue"}
            disabled={!scanned}
          />
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 15,
    borderRadius: 10,
  },
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 500,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "black",
  },
  text: {
    fontSize: 20,
    margin: 5,
  },
});

export default QrReader;
