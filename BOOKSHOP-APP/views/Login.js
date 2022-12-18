import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  ImageBackground,
} from "react-native";
import React, { useState } from "react";
import { COLOURS } from "../Coler";
import  Ionicons  from 'react-native-vector-icons/Ionicons';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.loginContainer}>
            <View 
                // source={{uri: require('../assets/images/background.png')}}
                // source={{uri: require('../assets/images/background.png')}}
                // resizeMode='cover'
                style={styles.bgContainer}
            >
                <View style={styles.logoLogin}>
                    <Image style={styles.logoImg} source={require('../assets/images/logo-book-shop.jpg')}/>
                </View>
                <Text style={styles.signinText}>    
                    Đăng nhập
                </Text>
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder='   Email' style={styles.inputText}/>
                    </View>
                    <View style={styles.inputContainer2}>
                        <TextInput placeholder='   Mật khẩu' style={styles.inputText}/>
                    </View>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("AdminNavigatorScreen")}>
                        <Text style={styles.btnTxt} >Đăng nhập</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn1} onPress={() => navigation.navigate("AdminNavigatorScreen")}>
                        <Image style={styles.img} source={require('../assets/images/search.png')}/>
                        <Text style={styles.btnTxt} >GOOGLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.txtForgot} >Quên mật khẩu?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                        <Text style={{marginLeft: 150, color: '#FF8787'}} >Đăng ký!</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#EEEEEE',
},
logoLogin: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    // backgroundColor: '#d81b60',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
}, 
signinText: {
    color: '#d81b60',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 10,
    color: '#000',

},
formContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
},
inputContainer: {
    width: '90%',
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
},
inputContainer2: {
    width: '90%',
    // marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
},
inputText: {
    // borderBottomWidth: 3,
    // borderBottomColor: '#d81b60',
    border: 'solid',
    paddingVertical:10,
    color: '#000',
    borderRadius: 10,
},
btn: {
    backgroundColor: '#3AB0FF',
    width: '45%',
    height: 45,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 10,
    marginTop: 20,
    
},
btn1: {
  backgroundColor: '#3AB0FF',
  width: '45%',
  height: 45,
  alignItems: 'center',
  justifyContent:'center',
  borderRadius: 10,
  marginTop: 20,
  flexDirection: 'row',

},
btnTxt: {
    color: '#FFF'
},
bgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
txtForgot : {
    marginTop: 20,
    marginLeft: 100,
    color: 'black',
    fontStyle: 'Underline',
    marginBottom: 10,
},
img :{
  width: 20,
  height: 20,
  marginRight: 10,
},
logoImg: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: '#d81b60',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 40,
},
});
