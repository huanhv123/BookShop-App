import React,
{ useState, useEffect } from 'react';
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    ToastAndroid,
    FlatList,
    StyleSheet,
    TextInput
} from 'react-native';
import { COLOURS } from '../../Coler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCreateBills } from '../../redux/actions/billAction';


const Pay = ({ navigation }) => {
    const dispatch = useDispatch();
    const [id, setId] = useState("")
    const [nameCus, setNameCus] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [total, setTotal] = useState("")

    const handleAddBill = () => {
        let newBill = {
            nameCustomer: nameCus,
            address: address,
            phone: phone,
            total: total,
        }

        console.log(newBill)
        dispatch(fetchCreateBills(newBill));
        // dispatch(fetchAllBooks());
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
              onChangeText={(id)=>setId(id)} />
            </View> */}
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Tên khách mua" style={styles.inputText}
                        onChangeText={(nameCus) => setNameCus(nameCus)} />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Địa chỉ" style={styles.inputText}
                        onChangeText={(address) => setAddress(address)}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput placeholder="Số địa thoại" style={styles.inputText}
                        onChangeText={(phone) => setCategory(phone)} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput placeholder="Tổng tiền" style={styles.inputText}
                        onChangeText={(total) => setTotal(total)} />
                </View>
                <TouchableOpacity
                onPress={()=>navigation.navigate("Home")}
                    style={styles.paymentBtn}>
                    <Text
                        style={styles.paymentBtnText}>
                        {/* Thanh toán (&#8363;{total + total / 20} ) */}
                        Xác nhận đặt hàng
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default Pay;

const styles = StyleSheet.create({
    CRUDContainer: {
        // backgroundColor: 'red',
        flex: 1,
    },
    formContainer: {
        padding: 20,
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
    paymentBtn: {
        marginTop: 20,
        width: 150,
        height: 40,
        backgroundColor: COLOURS.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentBtnText: {
        fontSize: 12,
        fontWeight: '500',
        letterSpacing: 1,
        color: COLOURS.white,
        textTransform: 'uppercase',
    },

});