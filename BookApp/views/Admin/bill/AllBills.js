import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView,
  TextInput
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Surface, Title, TextInput } from "react-native-paper";
import { Card } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import { fetchAllBills,fetchSearchBill,fetchDeleteBills } from "../../../redux/actions/billAction";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";



const AllBills = ({ navigation }) => {
  const bills = useSelector((state) => state.bill.bills);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  let isSuccess = useSelector((state) => state.bill.isSuccess)
  useEffect(() => {
    dispatch(fetchAllBills())
    // if(isSuccess==true){
    //     dispatch(fetchAllBooks())
    // }
    // if(isSuccess==false && books.length==0){
    //   dispatch(fetchAllBooks())
    // }
  }, [isSuccess]);
  const handleSeachBill = (key) => {
    dispatch(fetchSearchBill(key))
  }
  const handleDeleteBill = (id) => {
    // console.log(id)
    dispatch(fetchDeleteBills(id))
    // dispatch(fetchAllBooks())
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TextInput placeholder="Search" style={styles.inputText}
            onChangeText={(text) => setSearch(text)}
          />
          <TouchableOpacity
            onPress={() => handleSeachBill(search)}
          >
            <Ionicons
              name="search"
              color="#000"
              size={40}
              justifyContent="center"
              alignItems="center"
              style={styles.iconSearch}
            />
          </TouchableOpacity>

        </View>
        {/* <View style={styles.rightHeader}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateBook")}
          >
            <AntDesign
              name="pluscircleo"
              size={35}
              color={"#000"}
            />
          </TouchableOpacity>
        </View> */}
      </View>
      <ScrollView>
        {bills != null ? (
                bills.map((item)=>
             (
              <Card key={item.id} style={styles.item}>
                <View style={styles.rowView}>
                  <View style={styles.contentItem}>
                    <Text style={styles.title}>{item.nameCus}</Text>
                    <Text>{item.total}</Text>
                    <Text>{item.status}</Text>
                  </View>
                  <View style={styles.btnTool}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate("EditBill", {
                          bill: {
                            id: item.id,
                            nameCus: item.nameCus,
                            // category: action.payload.category,
                            // author: item.author,
                            total: item.total,
                            status: item.status,
                            // descriptionBook: item.descriptionBook,
                            // photoBook: item.photoBook,
                          },
                        })
                      }
                      style={{ marginHorizontal: 16 }}
                    >
                      <Icon name="edit" size={30} color={"blue"} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleDeleteBill(item.id)}>
                      <Icon name="trash" size={30} color={"red"} />
                    </TouchableOpacity>
                  </View>
                </View>
              </Card>
            )

)
        ) : null}
      </ScrollView>
    </SafeAreaView>
  );
};


export default AllBills;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  header: {
    marginTop: Platform.OS === "android" ? 24 : 0,
    padding: 10,
    // elevation: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor:"red",
    width: "100%"
    // height: "auto",
  },
  leftHeader: {
    // backgroundColor:"yellow",
    width: "88%",
    // marginBottom: 10,
    borderRadius: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    // paddingLeft: 30,
  },
  inputText: {
    justifyContent: "center",
    alignItems: "center",
    color: "#000",
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 2,
    width: "85%",
    height: 50,
    // backgroundColor:"green",
    paddingLeft: "6%",
    fontSize: 20,
    fontWeight: "500",
  },
  iconSearch: {
    // backgroundColor:"red",
    width: "13%",
  },
  rightHeader: {
    // backgroundColor:"green",
    width: "10%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    // height: "100%",
    width: "100%",
    // padding: 9.5,
    // backgroundColor: "blue",
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 100 / 2,
  },
  item: {
    padding: 10,
    // margin: 16,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 4,
    borderRadius: 8,
    backgroundColor: "#f5f5f5",
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor:"red",
    width: "100%",
  },
  contentItem: {
    // backgroundColor:"green",
    width: "70%",
  },
  btnTool: {
    width: "30%",
    flexDirection: "row",
    justifyContent: "flex-end",
    // backgroundColor:'yellow'
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});
7