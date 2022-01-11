import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const SearchInput = ({ onSearchEnter }) => {
  const [term, setTerm] = useState("");

  return (
    <View style={styles.searchWrapperStyle}>
      <Icon size={18} name="search" color="grey" style={styles.iconStyleLeft} />
      <TextInput
        placeholder="Type to search"
        placeholderTextColor="grey"
        style={styles.searchInputStyle}
        value={term}
        onChangeText={(newText) => {
          setTerm(newText);
        }}
        onEndEditing={() => {
          onSearchEnter(term);
        }}
      />
      <Icon
        size={18}
        name="times"
        color="grey"
        style={styles.iconStyleRight}
        onPress={() => {
          setTerm("");
          onSearchEnter("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapperStyle: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
    margin: 10,
  },
  iconStyleLeft: {
    marginTop: 12,
    marginHorizontal: 8,
    marginLeft: 12,
  },
  iconStyleRight: {
    marginTop: 12,
    marginHorizontal: 8,
    marginRight: 15,
  },
  searchInputStyle: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 0,
    margin: 0,
    color: "white",
  },
});

export default SearchInput;
