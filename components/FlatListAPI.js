import { StyleSheet, Text, View,FlatList,SafeAreaView,ActivityIndicator, RefreshControl } from 'react-native'
import React,{useState,useEffect} from 'react'

const FlatListAPI = () => {

    const[refreshing,setRefreshing] = useState(true);
    const[dataSource,setDatasource] = useState([]);

    //Service to get the data from the sever to render
    const getData = async() => {
        await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response)=> response.json())
        .then((responsejson)=>{
            setDatasource(responsejson);
            setRefreshing(false);
        }).catch(()=>{
            console.error(error);
        });

    };

    useEffect(()=>{
        getData();
    },[]);

    const ItemSeparatorView = () => {
        return(
            <View
            style={{
                height:0.5,
                width:'100%',
                backgroundColor:'#c8c8c8'
            }}
            />
        );
    };

    const onResfresh=()=>{
        //Clear old data of the list
        setDatasource([]);
        //Call the service to get lastest data
        getData();
    };

    const getItem = (item)=>{
        //function for click on an item
        alert('Id : '+item.id+' Tilte : '+item.title)
    };

    const ItemView = ({item})=>{
        return(
            <Text 
            style = {styles.itemStyle}
            onPress = {() => getItem(item)}>
                {item.title}
            </Text>
        )
    }

  return (
    <SafeAreaView style={{flex:1}}>
        <View style={styles.container}>
            {refreshing?<ActivityIndicator/>:null}
            <FlatList
            data={dataSource}
            keyExtractor={(index)=>index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            refreshControl={
                <RefreshControl
                refreshing={refreshing}
                onRefresh={onResfresh}
                />}
            onPres
            />
        </View>
    </SafeAreaView>
  )
}

export default FlatListAPI

const styles = StyleSheet.create({
    container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 10,
    },
    itemStyle: {
    fontSize: 20,
    padding: 10,
    },
    });
    