import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { API, graphqlOperation, DataStore } from "aws-amplify";
import { createBook } from "../src/graphql/mutations";
import Navbar from "../components/Navbar";
import { Book } from "../src/models";

const AddBookScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  const addBook = async () => {
    try {
      if (name === "" || price === "" || author === "") return;

      const input = {
        name,
        price: parseFloat(price),
        author,
        image,
      };
      await DataStore.save(new Book(input));

      setName("");
      setPrice("");
      setAuthor("");
      setImage("");
    } catch (error) {
      console.error("Error saving book:", error);
      alert("Error saving book. Please try again.");
    }
  };
  return (
    <>
      <Navbar />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          value={author}
          onChangeText={setAuthor}
          placeholderTextColor="#666"
        />
        <TextInput
          style={styles.input}
          placeholder="Image URL (optional)"
          value={image}
          onChangeText={setImage}
          placeholderTextColor="#666"
        />
        <View style={styles.buttonContainer}>
          <Button title="Add Book" onPress={addBook} color="#34A853" />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  input: {
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 12,
  },
});
export default AddBookScreen;
