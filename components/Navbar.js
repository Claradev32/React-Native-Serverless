
import { Button, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default Navbar = ({ navigation }) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navIcon}>
         <Icon name="shopping-cart" size={25} color="#fff" />
      </Text>
      <Text style={styles.storeName}>Bookstore</Text>
      <Button
        style={styles.addbtn}
        title="Add New"
        onPress={() => navigation.navigate("AddBook")}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "rgb(34, 117, 150)",
    height: 50,
  },
  addbtn: {
    border: "1px solid white",
    color: "rgb(255, 255, 255)",
  },
});