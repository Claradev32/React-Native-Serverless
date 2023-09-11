import {
  StyleSheet,
  FlatList,
  View,
  Image,
  Text,
  Button
} from "react-native";
import { useEffect, useState } from "react";
import { DataStore, Predicates } from "aws-amplify";
import { Book } from "../src/models";

export default BookList = () => {
  const [books, setBooks] = useState([]);

  loadBooks = async () => {
    const books = await DataStore.query(Book, Predicates.ALL);
    setBooks(books);
  };

  useEffect(async () => {
        await this.loadBooks();
        DataStore.observe(Book).subscribe(loadBooks);
  }, [books]);

  return (
    <FlatList
      data={books}
      renderItem={({ item }) => (
        <View style={styles.bookItem}>
          <Image source={{ uri: item.image }} style={styles.bookImage} />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>{item.name}</Text>
            <Text style={styles.bookAuthor}>{item.author}</Text>
            <Text style={styles.bookPrice}>${item.price}</Text>
            <Button title="Buy Now" onPress={() => {}} />
          </View>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  storeName: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "bold",
  },
  bookItem: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#E0E0E0",
    backgroundColor: "#FFF",
  },
  bookImage: {
    width: 80,
    height: 110,
  },
  bookDetails: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-between",
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  bookAuthor: {
    color: "#666",
  },
  bookPrice: {
    color: "#E91E63",
    marginBottom: 10,
  },
});
