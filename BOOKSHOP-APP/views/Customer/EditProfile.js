import {
  View,
  Text,
  TouchableOpacity,
  ToastAndroid,
  Image,
  TextInput,
  StyleSheet,
} from "react-native";
import Ionic from "react-native-vector-icons/Ionicons";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUpdateCustomers } from "../../redux/actions/customersAction";
import { fetchGetCategoryByID } from "../../redux/actions/categoriesAction";


const EditProfile = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {customerInfo} = route.params;
  const [nameCus, setNameCus] = useState(customerInfo.nameCus);
  const [adderss, setAddress] = useState(customerInfo.adderss);
  const [phoneCus, setPhoneCus] = useState(customerInfo.phoneCus);
  const [BoD, setBoD] = useState(customerInfo.BoD);
  const [sexCus, setSexCus] = useState(customerInfo.sexCus);
  const [id, setId] = useState(customerInfo.id);
  

  const handleEditProfile = () => {
    let newProfile = {
      id: id,
      nameCus: nameCus,
      adderss: adderss,
      phoneCus: phoneCus,
      BoD: BoD,
      sexCus: sexCus,
    };

  dispatch(fetchUpdateCustomers(newProfile));
  // dispatch(fetchGetCategoryByID());
  };
  const handleCancel = () => {
    navigation.goBack();
  };
  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>
          Chỉnh sửa Profile
        </Text>
      </View>
      <View style={{ padding: 20, alignItems: "center" }}>
        <Image
          source={{
            uri: "https://img6.thuthuatphanmem.vn/uploads/2022/02/12/hinh-nen-sao-dem-tuyet-dep_052755541.jpg",
          }}
          style={{ width: 80, height: 80, borderRadius: 100 }}
        />
        <Text
          style={{
            color: "#3493D9",
          }}
        >
          Đổi hình đại diện
        </Text>
      </View>
      <View style={{ padding: 40 }}>
        <View style={{ paddingBottom: 10 }}>
          <TextInput
            placeholder="Tên"
            //defaultValue={name}
            onChangeText={(nameCus) => setNameCus(nameCus)}
            value={nameCus}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingBottom: 10 }}>
          <TextInput
            placeholder="Năm sinh"
            //defaultValue={name}
            onChangeText={(BoD) => setBoD(BoD)}
            value={BoD}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Giới tính"
            //defaultValue={accountName}
            onChangeText={(sex) => setSexCus(sex)}
            value={sexCus}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Địa chỉ"
            onChangeText={(add) => setAddress(add)}
            value={adderss}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Số điện thoại"
            onChangeText={(phone) => setPhoneCus(phone)}
            value={phoneCus}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
      </View>
      {/* <View>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Switch to Professional account
        </Text>
        <Text
          style={{
            marginVertical: 10,
            padding: 10,
            color: '#3493D9',
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: '#EFEFEF',
          }}>
          Persnol information setting
        </Text>
      </View> */}
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={() => handleEditProfile()}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Chỉnh sửa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCancel()}>
          <View style={styles.btn2}>
            <Text style={styles.btnText}>Hủy</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  btn: {
    backgroundColor: "#5FD068",
    padding: 10,
    borderRadius: 5,
    // width: "60%",
    alignItems: "center",
  },
  btn2: {
    backgroundColor: "#C21010",
    padding: 10,
    borderRadius: 5,
    // width: "60%",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
