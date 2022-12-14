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
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
              <Text style={{ color: '#2ABB9C' }}>123456</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
              <Text style={{ color: '#C21C70' }}>20/07/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
              <Text style={{ color: '#2ABB9C' }}>Completed </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>80000</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.orderRow} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
              <Text style={{ color: '#2ABB9C' }}>8984512</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
              <Text style={{ color: '#C21C70' }}>15/07/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
              <Text style={{ color: '#2ABB9C' }}>Pending</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>183000</Text>
            </View>
          </View>
        </ScrollView>
        <ScrollView>
          <View style={styles.orderRow} >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Order id:</Text>
              <Text style={{ color: '#2ABB9C' }}>1878451</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>OrderTime:</Text>
              <Text style={{ color: '#C21C70' }}>20/01/2022</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Status:</Text>
              <Text style={{ color: '#2ABB9C' }}>Completed </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: '#9A9A9A', fontWeight: 'bold' }}>Total:</Text>
              <Text style={{ color: '#C21C70', fontWeight: 'bold' }}>813000</Text>
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