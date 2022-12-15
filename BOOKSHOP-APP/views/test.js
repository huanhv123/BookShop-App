// import {
//     StyleSheet,
//     Text,
//     View,
//     SectionList,
//     SafeAreaView,
//     Image,
//     FlatList,
//     TextInput,
//     TouchableOpacity,
//   } from 'react-native'
//   import React from 'react'
//   import { StatusBar } from 'expo-status-bar';
//   import { COLOURS } from '../Coler';
//   import Ionicons from 'react-native-vector-icons/Ionicons';
//   const Home = ({ navigation }) => {
//     const books = [
//       {
//         "id": "KgU3amaqKAfnIXNSZ5Lp",
//         "price": 190000,
//         "nameBook": "Làm Bạn Với sdvdsfsd ",
//         "category": "Tiểu thuyết",
//         "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2FLamBanVoiBauTroi.jpg?alt=media&token=44dec27d-e84a-4a3a-8f9c-9191172f1975",
//         "author": "Nguyễn Nhật Ánh",
//         "descriptionBook": "Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Và đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời.",
  
//       },
//       {
//         "id": "YEu6vuffiCFNZUJOtJcu",
//         "nameBook": "Xã Hội Việt Nam",
//         "price": 900000,
//         "author": "Lương Đức Thiệp",
//         "category": "Văn học",
//         "descriptionBook": "- Tại sao người ta lại định dạng quốc gia Việt Nam bằng một cái tên lai ghép giữa Ấn và Hoa – INDOCHINOISE? Văn hóa Việt Nam đã vay mượn gì Trung Hoa, và định hình văn hóa cho dân tộc như thế nào? Người Việt đã tạo nên một xã hội riêng, một lối sinh hoạt thế nào mà trải qua bao thế kỷ dân tộc Việt Nam không bị tan chìm và đồng hóa trong khối Hán tộc?",
//         "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fxa-hoi-viet-nam.jpg?alt=media&token=f75b87ea-836a-4359-a897-040c78d2caca"
//       },
//       {
//         "id": "u3aBKDpKY3w5HURpltbP",
//         "nameBook": "Spy X Family",
//         "author": "Tatsuya Endo",
//         "category": "Manga",
//         "descriptionBook": "Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình",
//         "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=09f42923-4e71-4864-a292-66426df3b2f7",
//         "price": 59000
//       }
//     ]
  
//     const Separator = () => {
//       return (
//         <View
//           style={{
//             height: 50,
//             width: 1,
//             backgroundColor: "white",
//           }}
//         />
//       );
//     }
//     const ItemList = ({ items }) => {
//       return (
//         <View>
//           <View style={styles.title}>
//             <Text style={styles.title}>Sách</Text>
//           </View>
//           <FlatList
//             horizontal={true}
//             showsHorizontalScrollIndicator={false}
//             //ListHeaderComponent={HeaderComponent}
//             // ItemSeperatorComponent={ItemSeperator}
//             ItemSeparatorComponent={Separator}
//             pagingEnabled={true}
//             keyExtractor={(item, index) => index}
//             data={items}
//             renderItem={ItemBox}
//           />
//         </View>
  
//       );
//     }
//     const SECTIONS = [
//       {
//         title: 'Mua nhiều nhất',
//         data: books
//       },
//       {
//         title: 'Hot',
//         data: books
//       },
//       {
//         title: 'Truyện tranh',
//         data: books
//       },
//     ];
  
//     const fff = [
//       {
//         title: 'Mua nhiều nhất',
//         data: books
//       },
//       {
//         title: 'Hot',
//         data: books
//       },
//       {
//         title: 'Truyện tranh',
//         data: books
//       },
//     ];
//     const ListItem = ({ item }) => {
//       return (
//         <TouchableOpacity style={styles.item}>
//           <View style={{
//             width:'100%',
//             // height:"70%",
//             alignItems:'center',
//             justifyContent:'center',
//             }} >
//             <Image
//               source={{
//                 uri: item.photoBook,
//               }}
//               style={styles.itemPhoto}
//               resizeMode="stretch"
//             />
//           </View>
//           <View style={{
//             width:'100%',
//             // height:"30%"
//             paddingHorizontal:10
//           }} >
  
//             <Text style={styles.itemText}
//               maxFontSizeMultiplier={2}
//               allowFontScaling={false}
//               accessible={true}
//               numberOfLines={2}
//               >
//               {item.nameBook}</Text>
              
//               <Text style={{...styles.itemText,paddingBottom:7,color:'#C92127'}}
//               maxFontSizeMultiplier={1}
//               allowFontScaling={false}
//               accessible={true}
//               numberOfLines={1}>
//               {item.price}đ</Text>
//           </View>
  
//         </TouchableOpacity>
//       );
//     };
  
//     const ListHeaderComponentStyle = () => {
//       return (
//         <View style={{
//           margin: 10,
//           backgroundColor: "#37C845",
//           width: "100%",
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginBottom: '7%',
//         }}>
//           <Text>sdfsdf</Text>
//         </View>
//       );
//     };
  
//     return (
//       <View style={styles.container}>
//         <StatusBar style="light" />
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={{ flex: 1 }}>
//             <View style={{ ...styles.partContainer, height: 65, backgroundColor: '#37C845' }}>
//               <View style={{
//                 width: '10%',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 elevation: 1,
//                 // borderRadius:10/2,
//                 // borderWidth:2,
//                 borderColor: '#'
//               }}>
//                 <Ionicons name="grid-outline" size={30} />
//               </View>
//               <View style={styles.searchContainer}>
  
//                 <TextInput
//                   underlineColorAndroid="transparent"
//                   placeholder='Tìm kiếm'
//                   placeholderTextColor='grey'
//                   showSoftInputOnFocus={true}
//                   style={{
//                     flex: 1,
//                     fontWeight: '700',
//                     backgroundColor: '#fff',
//                     paddingLeft: 7,
//                     borderRightWidth:2
//                   }}
//                 />
//                 <TouchableOpacity
//                   onPress={() => { }}
//                   style={{
//                     width: "14%",
//                     backgroundColor: "#dddddd",
//                     alignItems: 'center',
//                     justifyContent: 'center'
//                   }}
//                 >
//                   <Ionicons name="search" size={30} />
//                 </TouchableOpacity>
  
//               </View>
//               <View style={{
//                 width: '10%',
//                 flexDirection: 'row',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 // padding: 1,
//                 // backgroundColor: "#dddddd", 
//                 // marginHorizontal: 20,
//                 elevation: 1,
//                 // borderRadius:10/2,
//                 // borderWidth:2,
//                 // borderColor:'#000'
//               }}>
//                 <Ionicons name="cart-outline" size={30} style={{ marginRight: 0 }} />
//               </View>
//             </View>
//           </View>
//           <View style={{ ...styles.partContainer, backgroundColor: '#dddddd' }} >
//             <SectionList
//               contentContainerStyle={{ paddingVertical: 0, backgroundColor: '#E5E5E5' }}
//               stickySectionHeadersEnabled={false}
//               sections={SECTIONS}
//               showsVerticalScrollIndicator={false}
//               showsHorizontalScrollIndicator={false}
//               renderSectionHeader={({ section }) => (
//                 <View style={{ 
//                   backgroundColor: '#fff',
//                    width: '100%', 
//                    marginBottom: '7%',
//                     }}>
//                   <Text style={styles.sectionHeader}>{section.title}</Text>
//                   {section != null ? (
//                     <FlatList
//                       horizontal
//                       data={section.data}
//                       renderItem={({ item }) => <ListItem item={item} />}
//                       showsHorizontalScrollIndicator={false}
//                     />
//                   ) : null}
//                 </View>
//               )}
//               renderItem={({ item, section }) => {
//                 if (section) {
//                   return null;
//                 }
//                 return <ListItem item={item} />;
//               }}
//             />
//           </View>
  
//         </SafeAreaView>
//       </View>
//     )
//   }
  
//   export default Home
  
//   const styles = StyleSheet.create({
//     container: {
//       // flex: 1,
//       backgroundColor: '#E5E5E5',
//       // alignContent: 'center'
//     },
//     partContainer: {
//       width: '100%',
//       backgroundColor: '#fff',
//       borderBottomWidth: 1,
//       borderBottomColor: "#E5E5E5",
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexDirection: 'row',
//       marginBottom: '7%'
//     },
//     searchContainer: {
//       width: '70%',
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       // padding: 1,
//       backgroundColor: "#fff",
//       marginHorizontal: 10,
//       elevation: 1,
//       borderRadius: 10 / 2,
//       borderWidth: 2,
//       borderColor: '#000'
//     },
//     iconSearch: {
  
//     },
//     sectionHeader: {
//       fontWeight: '800',
//       fontSize: 25,
//       color: '#2F2E2E',
//       // marginTop: 20,
//       // marginBottom: 5,
//       // padding:10,
//       paddingHorizontal: 10,
//       paddingVertical: 10,
//       backgroundColor: '#37C845',
//       width: '100%',
//       height: '20%'
//     },
//     item: {
//       margin: 10,
//       // backgroundColor: "red",
//       width: "90%",
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: '7%',
//       flexDirection:'column',
//       borderRadius:16/2,
//       borderWidth:1.5,
//       // backgroundColor: "red", 
//     },
//     itemPhoto: {
//       width: 160,
//       height: 200,
//     },
//     itemText: {
//       color: '#000',
//       marginTop: 5,
//       width: "100%",
//       fontWeight:'700',
//       fontSize:17
//     },
//   });