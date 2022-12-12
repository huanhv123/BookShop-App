// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Platform } from 'react-native'
// import React, { useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { updateBook } from '../../../redux/actions/bookAction';
// import * as ImagePicker from 'expo-image-picker';
// import { firebase } from '../../../config/firebase';
// import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
// import { fetchAllBooks, fetchUpdateBooks } from "../../../redux/actions/bookAction";
// import { async } from '@firebase/util';
// import { fetchUpdateCategories } from '../../../redux/actions/categoriesAction';
// const EditCategory = ({ route, navigation }) => {
//   const dispatch = useDispatch();
//   const { categories } = route.params;
//   const [id, setId] = useState(categories.id)
//   const [nameCate, setNameCate] = useState(categories.nameCate)
 
//   const handleEditCategory = () => {
//     let newCategory = {
//       id: id,
//       nameCate: nameCate,
//     }
//     // console.log(newBook)
//     dispatch(fetchUpdateCategories(newCategory));
//     // dispatch(fetchAllBooks());
//   }
//   const handleCancel = () => {
//     navigation.goBack()
//   }


  
//   return (
// //     <View style={styles.container}>
// //         <View style={styles.header}>
// //             <Text style={styles.text_header}>Edit Book</Text>
// //         </View>
// //         </View>
// //     )
// //   }
//     <View style={styles.CRUDContainer}>
//       <View style={styles.formContainer}>
//         <View style={styles.inputContainer}>
//           <TextInput 
//           placeholder="ID" 
//           style={styles.inputText}
//           onChangeText={(id)=>setId(id)} 
//           value={id}
//           editable={false}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <TextInput placeholder="Name" style={styles.inputText}
//             onChangeText={(nameCate) => setNameCate(nameCate)} value={nameCate} />
//         </View>
        
//         <View style={styles.btnContainer}>
//                     <TouchableOpacity style={styles.btnSubmit} onPress={() => handleEditCategory()}>
//                         <Text style={styles.btnText}>Submit </Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.btnCancel} onPress={() => handleCancel()}>
//                         <Text style={styles.btnText}>Cancel </Text>
//                     </TouchableOpacity>
//                 </View>
//         </View>
//       </View>
   
//   )
// }

// export default EditCategory

// const styles = StyleSheet.create({
//   CRUDContainer: {
//     // backgroundColor: 'red',
//     flex: 1,
//   },
//   formContainer: {
//     //padding:20,
//     //backgroundColor: 'black'
//     width: "100%",
//     alignItems: "center",
//   },

//   inputContainer: {
//     width: "70%",

//   },
//   inputText: {
//     height: 40,

//     borderRadius: 10,
//     borderBottomWidth: 2,
//     borderBottomColor: "#d81b60",
//     paddingVertical: 5,
//     marginBottom: 10,
//   },
//   btnSubmit: {
//     backgroundColor: "green",
//     width: "50%",
//     height: 45,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 45 / 2,
//   },
//   btnText: {
//     color: "#FFF",
//   },
//   btnCancel: {
//     marginLeft: 10,
//     backgroundColor: "#d81b60",
//     width: "45%",
//     height: 45,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 45 / 2,
//   },
//   btnText: {
//     color: "#FFF",
//     fontSize: 20,
//   },

//   btnContainer: {
//     marginTop: 20,
//     // marginRight:60,
//     width: "70%",
//     flexDirection: 'row',
//     //backgroundColor: 'red',
//     //justifyContent: 'space-between',
//   },
//   title: {
//     fontSize: 20,
//   },
//   img: {
//     borderColor: "#000",
//     borderWidth: 2.5,
//     width: 150,
//     height: 200,
//     margin: 10,
//   },
//   btn: {
//     width: '60%',
//     height: 35,
//     backgroundColor: 'blue',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 30 / 2,
//   },
//   btnTextx: {
//     color: "#fff",
//     fontSize: 20,
//   },
// })