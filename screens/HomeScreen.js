
import React from "react";
import { View } from "react-native";
import Navbar from "../components/Navbar"; 
import BookList from "../components/BookList";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Navbar navigation={navigation} />
      <BookList/>
    </View>
  );
};
export default HomeScreen;
