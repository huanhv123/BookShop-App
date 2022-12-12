// import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native'
// import React from 'react'
// import { COLOURS } from '../Coler';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { Rating, AirbnbRating } from 'react-native-ratings';
// const items = [
//   { id: 1, name: "Làm Bạn Với Bầu Trời",rating : "3.5", category: "Văn học", price: 190000, image: require('../assets/image-book/LamBanVoiBauTroi.jpg') },
//   { id: 2, name: "Xã Hội Việt Nam",rating : "4.5", category: "Nghệ thuật", price: 190000, image: require('../assets/image-book/xa-hoi-viet-nam.jpg') },
//   { id: 3, name: "Spy X Family",rating : "3.5", category: "Manga", price: 190000, image: require('../assets/image-book/spy-x-family-tap-1.jpg') },
//   { id: 4, name: "Cho tôi xin một Vé đi tuổi thơ",rating : "5", category: "Văn học", price: 190000, image: require('../assets/images/Nguyen_Nhat_Anh_2.png') },

// ]

// const Home = ({ navigation }) => {
//   // const HeaderComponent = () => {
//   //   return (
//   //     <View style={[{ flex: 1 }]}>
//   //       <Text style={styles.title}>Sách</Text>
//   //     </View>
//   //   );
//   // };

//   const ItemSeperator = () => {
//     return(
//       <View style={styles.seperator} />
//     )
//   };

//   const ItemBox = ({ item }) => (
//     <TouchableOpacity
//       onPress={() => navigation.navigate('DetailBook')}
//       style={{
//         width: '50%',
//         alignItems: 'center',
//         // marginVertical: 14,
//         // backgroundColor: 'green'
//       }}
//     >
//       <View style={styles.product}>
//         <Image style={styles.img_prod} source={{uri: item.image}} />
//         <View style={styles.prod_details}>

//             <Text style={styles.prod_name}>{item.name}</Text>
//             <Text style={styles.prod_price}>{item.category}</Text>
//             <Rating
//                     startingValue={Math.floor(parseInt(item.rating))}
//                     // ratingCount={5}
//                     imageSize={10}
//                     showRating
//                   />
//           <Text style={styles.prod_price}>{item.price}</Text>
//         </View>
//       </View>
//     </TouchableOpacity>
//   );
//   return (
//     <View style={styles.container}>
//       <View>
//         <View style={styles.inputContainer}>
//           <TextInput placeholder='   Search' style={styles.inputText} />
//           <Ionicons name='search-circle' color='black' size={30} />
//           <Ionicons name='cart' color='black' size={30} />
//         </View>
//       </View>
//       <View style={styles.title}>
//         <Text style={styles.title}>Sách</Text>
//       </View>
//       <FlatList
//          horizontal={true}
//          //ListHeaderComponent={HeaderComponent}
//          ItemSeperatorComponent={ItemSeperator}
//          keyExtractor={(item, index) => index}
//          data={items}
//          renderItem={ItemBox}
//       />
//       <View style={styles.title}>
//         <Text style={styles.title}>Hot</Text>
//       </View>
//       <FlatList
//          horizontal={true}
//          //ListHeaderComponent={HeaderComponent}
//          ItemSeperatorComponent={ItemSeperator}
//          keyExtractor={(item, index) => index}
//          data={items}
//          renderItem={ItemBox}
//       />
//       {/* <View
//         style={{
//           flexDirection: 'row',
//           flexWrap: 'wrap',
//           justifyContent: 'space-around',
//           // backgroundColor: 'red',
//           // flex: 1
//         }}>


//         {
//           items.map(item => (
//             <TouchableOpacity
//               key={item.id}
//               onPress={() => navigation.navigate('DetailBook')}
//               style={{
//                 width: "100%",
//                 flexDirection: "row",
//                 justifyContent: 'center',
//                 width: '50%',
//                 alignItems: 'center',
//                 padding: 10,
//                 justifyContent: 'center',
//                 marginVertical: 14,
//                 // backgroundColor: 'green'
//               }}
//             >
//               <View style={styles.product}>
//                 <Image style={styles.img_prod} source={{ uri: item.image }} />
//                 <View style={styles.prod_details}>
//                   <Text style={styles.prod_name}>{item.name}</Text>
//                   <Rating
//                     startingValue={Math.floor(parseInt(item.rating))}
//                     // ratingCount={5}
//                     imageSize={10}
//                     showRating
//                   />
//                   <View style={{
//                     flexDirection: "row",
//                     justifyContent: 'space-between',
//                     marginTop: 10,
//                   }}>
//                     <Text style={styles.prod_price}>{item.category}</Text>
//                     <Text style={styles.prod_price}>{item.price}</Text>
//                   </View>

//                 </View>
//               </View>
//             </TouchableOpacity>
//           ))
//         }
//       </View> */}

//     </View>
//   )
// }

// export default Home

// const styles = StyleSheet.create({
//   container: {
    
//     justifyContent: 'flex-start',
//     // width: '100%',
//     // height: '100%',
//     // width: '100%',
//     // height: '100%',
//     backgroundColor: "#fff",
//   },

//   title: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "black",
//     marginLeft: 10,
//     marginTop: 10,
//   },
//   seperator: {
//     height: 1,
//     width: "100%",
//     //backgroundColor: "black",
//     //flexDirection: "column",
//     flex: "center",
//   },
//   product: {
//     flex: 1,
//     flexDirection: "column",
//     marginLeft: 50,
//     border: "1px solid black",
//     borderRadius: 10,
//     width: 150,
//     // width: 'auto',
//     // height: 'auto',
//   },
//   img_prod: {
//     width: 100,
//     height: 200,
//     marginTop: 10,
//     marginLeft: 25,
//   },
//   prod_details: {
//     flex: 1,
//     flexDirection: "column",
//     marginLeft: 10,
    
//   },
//   prod_name: {
//     fontSize: 18,
//     fontWeight: "bold",
//     color: "black",
//     width: 'auto',
//   },
//   prod_price: {
//     fontSize: 13,
//     color: "black",
//     justifyContent: 'flex-end',
//   },
//   inputContainer: {
//     width: '100%',
//     marginBottom: 10,
//     // backgroundColor: 'white',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   inputText: {
//     borderBottomWidth: 3,
//     // borderBottomColor: '#d81b60',
//     paddingVertical: 10,
//     color: '#000',
//     borderRadius: 10,
//     width: '70%',
//   },
// });