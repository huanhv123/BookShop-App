// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ToastAndroid,
//   Image,
//   TextInput,
//   StyleSheet,
// } from 'react-native';
// import Ionic from 'react-native-vector-icons/Ionicons';

// const EditProfile = (navigation) => {
//   return (
//     <View
//       style={{
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'white',
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           padding: 10,
//         }}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionic name="close-outline" style={{ fontSize: 35 }} />
//         </TouchableOpacity>
//         <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Edit Profile</Text>
//         <TouchableOpacity
//           onPress={() => {
//             TostMessage();
//             navigation.goBack();
//           }}>
//           <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
//         </TouchableOpacity>
//       </View>
//       <View style={{ padding: 20, alignItems: 'center' }}>
//         <Image
//           source={{
//             uri: 'https://img6.thuthuatphanmem.vn/uploads/2022/02/12/hinh-nen-sao-dem-tuyet-dep_052755541.jpg',
//           }}
//           style={{ width: 80, height: 80, borderRadius: 100 }}
//         />
//         <Text
//           style={{
//             color: '#3493D9',
//           }}>
//           Change profile photo
//         </Text>
//       </View>
//       <View style={{ padding: 10 }}>
//         <View>
//           <TextInput
//             placeholder="Name"
//             //defaultValue={name}
//             style={{
//               fontSize: 16,
//               borderBottomWidth: 1,
//               borderColor: '#CDCDCD',
//             }}
//           />
//         </View>
//         <View style={{ paddingVertical: 10 }}>

//           <TextInput
//             placeholder="Email"
//             //defaultValue={accountName}
//             style={{
//               fontSize: 16,
//               borderBottomWidth: 1,
//               borderColor: '#CDCDCD',
//             }}
//           />
//         </View>
//         <View style={{ paddingVertical: 10 }}>

//           <TextInput
//             placeholder="Sex"
//             //defaultValue={accountName}
//             style={{
//               fontSize: 16,
//               borderBottomWidth: 1,
//               borderColor: '#CDCDCD',
//             }}
//           />
//         </View>
//         <View style={{ paddingVertical: 10 }}>
//           <TextInput
//             placeholder="Address"
//             style={{
//               fontSize: 16,
//               borderBottomWidth: 1,
//               borderColor: '#CDCDCD',
//             }}
//           />
//         </View>
//         <View style={{ paddingVertical: 10 }}>
//           <TextInput
//             placeholder="Phone"
//             style={{
//               fontSize: 16,
//               borderBottomWidth: 1,
//               borderColor: '#CDCDCD',
//             }}
//           />
//         </View>
//       </View>
//       {/* <View>
//         <Text
//           style={{
//             marginVertical: 10,
//             padding: 10,
//             color: '#3493D9',
//             borderTopWidth: 1,
//             borderBottomWidth: 1,
//             borderColor: '#EFEFEF',
//           }}>
//           Switch to Professional account
//         </Text>
//         <Text
//           style={{
//             marginVertical: 10,
//             padding: 10,
//             color: '#3493D9',
//             borderTopWidth: 1,
//             borderBottomWidth: 1,
//             borderColor: '#EFEFEF',
//           }}>
//           Persnol information setting
//         </Text>
//       </View> */}
//     </View>
//   )
// }

// export default EditProfile

// const styles = StyleSheet.create({})