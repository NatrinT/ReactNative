import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";

const News = () => {
  const [articles, setArticles] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-07-26&sortBy=publishedAt&apiKey=2a293fea23c44138ac76ff5c9b67a573"
      );
      const data = await response.json();
      setArticles(data.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user : ", error);
      setLoading(false);
    }
  };

  const ItemSeperaterView = () => {
    return (
      //flatlist line seperate
      <View
        style={{ height: 0.5, width: "100%", backgroundColor: "#C8C8C8" }}
      />
    )
  }

  const _renderItem = ({ item }) => {
    let urlToImage =
      item.urlToImage !== null
        ? item.urlToImage
        : "http://via.placeholder.com/150*100";

    return (
      <View style={{ flex: 1,flexDirection: "row" }}>
        <View style={{ flex: 1, margin: 10 }}>
          <Image
            source={{ uri: urlToImage }}
            resizeMode="cover"
            style={{ flex: 1, width: "100%", height: "100%" }}
          />
        </View>
        <View style={{ width: 200, alignSelf: "center", margin: 5 }}>
          <Text style={{ fontSize: 14, marginBottom: 5 }}>{item.title}</Text>
          <Text style={{ fontSize: 10 }}>{item.source.name}</Text>
        </View>
      </View>
    );
  };

  const _onRefresh = () => {
    setLoading(true);
    getData();
  };

  return (
    <View>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={articles}
          keyExtractor={(index) => index.toString()}
          renderItem={_renderItem}
          refreshing={loading}
          onRefresh={_onRefresh}
          ItemSeparatorComponent={ItemSeperaterView}
        />
      )}
    </View>
  );
};

export default News;

const styles = StyleSheet.create({});
