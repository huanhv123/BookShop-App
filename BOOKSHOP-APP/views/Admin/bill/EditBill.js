import { StyleSheet, Text, View, TextInput, TouchableOpacity,Image,Platform } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';


import {firebase} from '../../../config/firebase';
import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { UpdateBill } from '../../../redux/actions/billAction';
import { fetchAllBills,fetchUpdateBills } from '../../../redux/actions/billAction';
import { async } from '@firebase/util';

const EditBill = ({route, navigation }) => {
  const dispatch = useDispatch();
  const {bill} = route.params;
  const [id, setId] = useState(bill.id)
  const [nameCus, setNameCus] = useState(bill.nameCus)
  const [total, setTotal] = useState((bill.total+""))
  const [status, setStatus] = useState(bill.status)
  
  const handleEditBill = () => {
    let newBill={
      id:id,
      nameCus: nameCus,
     
      total: parseInt(total),
      status: status,
    }
    
    dispatch(fetchUpdateBills(newBill));
  
  }
  const handleCancel = () => {
    navigation.goBack()
  }

  
  
  return (
    <View style={styles.CRUDContainer}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Name" style={styles.inputText}
          onChangeText={(nameCus)=>setNameCus(nameCus)} value={nameCus}/>
        </View>
       
       
        
       
        <View style={styles.inputContainer}>
          <TextInput placeholder="Total" style={styles.inputText}
          onChangeText={(total)=>setPrice(total)}
          value={total}
           />
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput placeholder="Status" style={styles.inputText}
          onChangeText={(status)=>setStatus(status)} value={status}/>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSubmit} onPress={()=>handleEditBill()}>
            <Text style={styles.btnText}>Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancel} onPress={()=>handleCancel()}>
            <Text style={styles.btnText}>Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditBill

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
    fontSize:20,
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
    borderColor:"#000",
    borderWidth:2.5,
    width: 150,
    height: 200,
    margin: 10,
  },
  btn:{
    width:'60%',
    height:35,
    backgroundColor:'blue',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30/2,
  },
  btnTextx: {
    color: "#fff",
    fontSize:20,
  },
})