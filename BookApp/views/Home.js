import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet,Dimensions, TextInput } from 'react-native'
import React from 'react'
import { COLOURS } from '../Coler';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const items = [
  { id: 1, name: "Tôi thấy hoa Vàng trên cỏ xanh", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_1.png') },
  { id: 2, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },
  { id: 3, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },
  { id: 4, name: "Cho tôi xin một Vé đi tuổi thơ", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },  

]

const Home = ({ navigation }) => {
  const HeaderComponent = () => {
    return (
      <View style={[{ flex: 1 }]}>
        <Text style={styles.title}>Sách</Text>
      </View>
    );
  };

  const ItemSeperator = () => {
    return (
      <View style={styles.seperator} />
    )
  };

  const ItemBox = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailBook')}
      style={{
        width: '50%',
        alignItems: 'center',
        // marginVertical: 14,
        // backgroundColor: 'green'
      }}
    >
      <View style={styles.product}>
        <Image style={styles.img_prod} source={{uri: item.image}} />
        <View style={styles.prod_details}>
          <TouchableOpacity>
            <Text style={styles.prod_name}>{item.name}</Text>
          </TouchableOpacity>
          <Text style={styles.prod_price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View>
      <View style={styles.inputContainer}>
        <TextInput placeholder='   Search' style={styles.inputText}/>
        <Ionicons name='search-circle' color='black' size={30} />
      </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          // backgroundColor: 'red',
          // flex: 1
        }}>
        {/* {items.map(data => {
          return <ItemBox data={data} key={data.id} />;
        })} */}
        {/* <FlatList
        ListHeaderComponent={HeaderComponent}
        ItemSeperatorComponent={ItemSeperator}
        keyExtractor={(item, index) => index}
        data={items}
        renderItem={ItemBox}
        numColumns={2}
      /> */}

        {
          items.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('DetailBook')}
              style={{
                width: "100%",
                flexDirection:"row",
                justifyContent:'center',
                width: '50%',
                alignItems: 'center',
                padding:10,
                justifyContent:'center',
                marginVertical: 14,
                // backgroundColor: 'green'
              }}
            >
              <View style={styles.product}>
                <Image style={styles.img_prod} source={{uri: item.image}} />
                <View style={styles.prod_details}>
                  <TouchableOpacity>
                    <Text style={styles.prod_name}>{item.name}</Text>
                  </TouchableOpacity>
                  <Text style={styles.prod_price}>{item.price}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        }
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'flex-start',
    width: '100%',
    // width: '100%',
    // height: '100%',
    // backgroundColor: "#863A6F"
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginLeft: 10,
    marginTop: 10,
  },
  seperator: {
    height: 1,
    width: "100%",
    backgroundColor: "black",
    // flexDirection: "column",
    flex: "center",
  },
  product: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    border: "1px solid black",
    borderRadius: 10,
    width: 'auto',
    height: 300,
  },
  img_prod: {
    width: 100,
    height: 200,
    marginTop: 10,
    marginLeft: 25,
  },
  prod_details: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 10,
  },
  prod_name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    width: 'auto',
  },
  prod_price: {
    fontSize: 13,
    color: "black",
    justifyContent: 'flex-end',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
    // backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
},
inputText: {
    borderBottomWidth: 3,
    // borderBottomColor: '#d81b60',
    paddingVertical:10,
    color: '#000',
    borderRadius: 10,
    width: '70%',
},
});