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

const EditProfile = (navigation) => {
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
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: "#CDCDCD",
            }}
          />
        </View>
        <View style={{ paddingVertical: 10 }}>
          <TextInput
            placeholder="Email"
            //defaultValue={accountName}
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
        <TouchableOpacity>
          <View style={styles.btn}>
            <Text style={styles.btnText}>Chỉnh sửa</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
