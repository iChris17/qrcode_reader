import React, { useState, useEffect } from "react";
import { Text, SafeAreaView, Button, StyleSheet, View } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { store } from "../redux/index";

const QrReader = () => {
  const [hasPermissions, setHasPermissions] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("");

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermissions(status === "granted");
    })();
  };

  //request permission once the component is mounted
  useEffect(() => {
    askForCameraPermission();
  }, []);

  //method that gets the result of the scan
  const handleBarCodeScanned = ({ type, data }) => {
    //asking if it is an QR Code
    const QRData = type === 256 ? data : "Not a QR Code";
    setScanned(true);
    setText(QRData);

    if (type === 256) {
      store.dispatch({ type: "SAVE_QRDATA", payload: QRData });
    }
  };

  if (hasPermissions === null) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Requesting the permission for the camera</Text>
      </SafeAreaView>
    );
  }

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
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.text}>{text}</Text>
      <Button
        title={!scanned ? "Scanning" : "Scan"}
        onPress={() => setScanned(false)}
        color={"skyblue"}
        disabled={!scanned}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  barcodebox: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 400,
    width: 250,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "orange",
  },
  text: {
    fontSize: 25,
    margin: 15,
  },
});

export default QrReader;
