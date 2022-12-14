import {
  View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView
} from 'react-native';
import React from 'react'
//const { wrapper, header, headerTitle, backIconStyle, body, orderRow } = styles;


const HistoryBill = () => {
  return (
    <View style={styles.wrapper}>
      {/* <View style={styles.header}>
        <View />
        <Text style={styles.headerTitle}>Order History</Text>
        <TouchableOpacity onPress={()=>{}}>
          <Image source={{uri:'https://download.asrock.com/Wallpaper/2021_AQUA_1920x1080.jpg'}} style={styles.backIconStyle} />
        </TouchableOpacity>
      </View> */}
      <View style={styles.body}>
        <ScrollView>
          <View style={styles.orderRow} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Mã hóa đơn:</Text>
              <Text style={{ color: '#2ABB9C' }}>123456</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày đặt:</Text>
              <Text style={{ color: '#C21C70' }}>20/07/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
              <Text style={{ color: '#2ABB9C' }}>Đã giao hàng </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng tiền:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>80000</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.orderRow} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Mã hóa đơn:</Text>
              <Text style={{ color: '#2ABB9C' }}>18874</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày đặt:</Text>
              <Text style={{ color: '#C21C70' }}>15/12/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
              <Text style={{ color: '#2ABB9C' }}>Chưa giao hàng </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng tiền:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>100000</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.orderRow} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Mã hóa đơn:</Text>
              <Text style={{ color: '#2ABB9C' }}>213124</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Ngày đặt:</Text>
              <Text style={{ color: '#C21C70' }}>14/12/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Trạng thái:</Text>
              <Text style={{ color: '#2ABB9C' }}>Chưa giao hàng </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Tổng tiền:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>10000</Text>
            </View>
          </View>
        </ScrollView>

      </View>
    </View>
  );
}

export default HistoryBill

const styles = StyleSheet.create({

  wrapper: { flex: 1, backgroundColor: '#fff' },
  // header: { flex: 1, backgroundColor: '#2ABB9C', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 10 },// eslint-disable-line
  // headerTitle: { fontFamily: 'Avenir', color: '#fff', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: '#F6F6F6' },
  orderRow: {
    height: 150,
    backgroundColor: '#FFF',
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: '#DFDFDF',
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: 'space-around'
  }
})