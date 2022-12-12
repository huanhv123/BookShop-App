// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   Image,
//   ImageBackground,
// } from "react-native";
// import React, { useState } from "react";
// import { COLOURS } from "../Coler";
// import  Ionicons  from 'react-native-vector-icons/Ionicons';

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <View style={styles.loginContainer}>
//             <ImageBackground 
//                 source={{uri: require('../assets/images/background.png')}}
//                 resizeMode='cover'
//                 style={styles.bgContainer}

//             >
//                 <View style={styles.logoLogin}>
//                     <Ionicons name='person' color='#FFF' size={36}/>
//                 </View>
//                 <Text style={styles.signinText}>    
//                     Đăng nhập
//                 </Text>
//                 <View style={styles.formContainer}>
//                     <View style={styles.inputContainer}>
//                         <TextInput placeholder='   Email' style={styles.inputText}/>
//                     </View>
//                     <View style={styles.inputContainer}>
//                         <TextInput placeholder='   Mật khẩu' style={styles.inputText}/>
//                     </View>
//                     <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("MainScreen")}>
//                         <Text style={styles.btnTxt} >Đăng nhập</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("MainScreen")}>
//                         <Image style={styles.img} source={{uri: require('../assets/images/search.png')}}/>
//                         <Text style={styles.btnTxt} >Đăng nhập với google</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity >
//                         <Text style={styles.txtForgot} >Quên mật khẩu?</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate("Register")}>
//                         <Text style={{marginLeft: 150, color: '#FF8787',}} >Đăng ký!</Text>
//                     </TouchableOpacity>
//                 </View>
//             </ImageBackground>
//         </View>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   loginContainer: {
//     flex: 1,
// },
// logoLogin: {
//     width: 60,
//     height: 60,
//     borderRadius: 60/2,
//     backgroundColor: '#d81b60',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 40,
// }, 
// signinText: {
//     color: '#d81b60',
//     fontSize: 30,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//     marginTop: 10,
//     color: '#FFF',

// },
// formContainer: {
//     width: '80%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingTop: 50,
// },
// inputContainer: {
//     width: '70%',
//     marginBottom: 10,
//     backgroundColor: 'white',
//     borderRadius: 10,
// },
// inputText: {
//     borderBottomWidth: 3,
//     // borderBottomColor: '#d81b60',
//     paddingVertical:10,
//     color: '#000',
//     borderRadius: 10,
// },
// btn: {
//     backgroundColor: '#3AB0FF',
//     width: '70%',
//     height: 45,
//     alignItems: 'center',
//     justifyContent:'center',
//     borderRadius: 10,
//     marginTop: 50,
    
// },
// btn1: {
//   backgroundColor: '#3AB0FF',
//   width: '70%',
//   height: 45,
//   alignItems: 'center',
//   justifyContent:'center',
//   borderRadius: 10,
//   marginTop: 50,
//   flexDirection: 'row',

// },
// btnTxt: {
//     color: '#FFF'
// },
// bgContainer: {
//     flex: 1,
//     alignItems: 'center',
// },
// txtForgot : {
//     marginTop: 20,
//     marginLeft: 100,
//     color: 'white',
//     fontStyle: 'Underline'
// },
// img :{
//   width: 20,
//   height: 20,
//   marginRight: 10,
// },
// });
