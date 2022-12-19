

import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../../config/firebase';
import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';

import { async } from '@firebase/util';
import { fetchAllBooks, fetchCreateBooks } from "../../../redux/actions/bookAction";
import { fetchCreateCategories } from '../../../redux/actions/categoriesAction';
import { Value } from 'react-native-reanimated';


const CreateCategory = ({ navigation }) => {
    const dispatch = useDispatch();
   

    const [id, setId] = useState("")
    const [nameCate, setNameCate] = useState("")
    
    

    const handleAddBook = () => {
        let newCategory = {
            nameCate: nameCate
        }
    
        console.log(newCategory)
        dispatch(fetchCreateCategories(newCategory));
        dispatch(fetchAllBooks());
    }
    const handleCancel = () => {
        navigation.goBack()
    }

    return (

        <View style={styles.CRUDContainer}>
            <View style={styles.formContainer}>
                {/* <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="ID"
                        style={styles.inputText}
                        se
                        onChangeText={(id) => setId(id)} />
                </View> */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Name" style={styles.inputText}
                        onChangeText={(nameCate) => setNameCate(nameCate)} />
                </View>

                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnSubmit} onPress={() => handleAddBook()}>
                        <Text style={styles.btnText}>Submit </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCancel} onPress={() => handleCancel()}>
                        <Text style={styles.btnText}>Cancel </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


export default CreateCategory

const styles = StyleSheet.create({
    CRUDContainer: {
        // backgroundColor: 'red',
        flex: 1,
    },
    formContainer: {
        //padding:20,
        //backgroundColor: 'black'
        width: "100%",
        alignItems: "center",
    },

    inputContainer: {
        width: "70%",

    },
    inputText: {
        height: 40,

        borderRadius: 10,
        borderBottomWidth: 2,
        borderBottomColor: "#d81b60",
        paddingVertical: 5,
        marginBottom: 10,
    },
    btnSubmit: {
        backgroundColor: "green",
        width: "50%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 45 / 2,
    },
    btnText: {
        color: "#FFF",
    },
    btnCancel: {
        marginLeft: 10,
        backgroundColor: "#d81b60",
        width: "45%",
        height: 45,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 45 / 2,
    },
    btnText: {
        color: "#FFF",
        fontSize: 20,
    },

    btnContainer: {
        marginTop: 20,
        // marginRight:60,
        width: "70%",
        flexDirection: 'row',
        //backgroundColor: 'red',
        //justifyContent: 'space-between',
    },
    title: {
        fontSize: 20,
    },
    img: {
        borderColor: "#000",
        borderWidth: 2.5,
        width: 150,
        height: 200,
        margin: 10,
    },
    btn: {
        width: '60%',
        height: 35,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30 / 2,
    },
    btnTextx: {
        color: "#fff",
        fontSize: 20,
    },
})