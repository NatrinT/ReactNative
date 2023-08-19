import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useState } from "react";

const FlatList_HeaderFooter = () => {
  const [listItems, setListName] = useState([
    { id: 1, title: "Button" },
    { id: 2, title: "Card" },
    { id: 3, title: "Input" },
    { id: 4, title: "Avatar" },
    { id: 5, title: "CheckBox" },
    { id: 6, title: "Header" },
    { id: 7, title: "Icon" },
    { id: 8, title: "Lists" },
    { id: 9, title: "Rating" },
    { id: 10, title: "Pricing" },
    { id: 11, title: "Avatar" },
    { id: 12, title: "CheckBox" },
    { id: 13, title: "Header" },
    { id: 14, title: "Icon" },
    { id: 15, title: "Lists" },
  ]);

  const ItemView = ({item}) => {
    return (
      //falstlist item
      <View style = {styles.itemStyle}>
        <Text 
        style = {styles.item} 
        onPress = {() => getItem(item)}>
          {item.id}
          {'.'}
          {item.title.toUpperCase()}
        </Text>
      </View>
    )
  }

  const EmptyListMessage = ({ item }) => {
    return (
      <Text style={styles.emptyListStyle} onPress={() => getItem(item)}>
        No Data Found
      </Text>
    )
  }

  const ItemSeperaterView = () => {
    return (
      //flatlist line seperate
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    )
  }

  const getItem = (item) => {
    alert("Id : " + item.id + " Name : " + item.title);
  }

  const ListHeader = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>"React Native Component"</Text>
      </View>
    )
  }

  const ListFooter = () => {
    return (
      <View style={styles.headerFooterStyle}>
        <Text style={styles.textStyle}>"Thai_Nichi Institute of Technology"</Text>
      </View>
    )
  }

  return (
    <SafeAreaView>
        <View>
            <FlatList
            data={listItems}
            keyExtractor={(item) => item.id.toString}
            ItemSeparatorComponent={ItemSeperaterView}
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            renderItem={ItemView}
            ListEmptyComponent={EmptyListMessage}
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatList_HeaderFooter;

const styles = StyleSheet.create({
  emptyListStyle: {
    padding: 10,
    fontSize: 18,
    textAlign: "center",
  },
  itemStyle: {
    padding: 10,
  },
  headerFooterStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "#606070",
  },
  textStyle: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    padding: 7,
  },
});
