import React, { useEffect, useState } from "react";
import { Text, StyleSheet, FlatList, View, SafeAreaView } from "react-native";
import { useSelector } from "react-redux";
import SearchInput from "../components/SearchInput";

const Item = ({ item }) => {
  return (
    <View style={styles.containerItemList}>
      <Text style={styles.itemText}>{item}</Text>
    </View>
  );
};

const QrList = () => {
  const [QRData, setQRData] = useState([]);

  const datafromredux = useSelector((state) => state.QRData);

  useEffect(() => {
    setQRData(datafromredux);
  }, [datafromredux]);

  const handleFilter = (valueSearch) => {
    if (valueSearch === "") {
      setQRData(datafromredux);
      return;
    }
    const filterList = QRData.filter((qr) => {
      return qr.toLowerCase().includes(valueSearch.toLowerCase());
    });
    setQRData(filterList);
  };

  if (QRData.length === 0) {
    return (
      <SafeAreaView style={{ padding: 10, alignItems: "center" }}>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          There are no QR Codes scanned. Please, go and scan some
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <SearchInput onSearchEnter={handleFilter} />
      <FlatList
        data={QRData}
        numColumns={1}
        showsVerticalScrollIndicator={false}
        keyExtractor={(data, index) => index}
        renderItem={({ item }) => <Item item={item} />}
        contentContainerStyle={styles.flatListcontainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatListcontainer: {
    margin: 10,
    padding: 10,
    marginTop: Platform.OS === "android" ? 3 : 0,
    backgroundColor: "white",
    borderRadius: 5,
  },
  containerItemList: {
    backgroundColor: "grey",
    marginBottom: 2,
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 20,
    color: "#fff",
  },
});

export default QrList;
