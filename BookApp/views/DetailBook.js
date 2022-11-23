import { StyleSheet, View, Text, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import ReadMore from '@fawazahmed/react-native-read-more'

const DetailBook = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.img}>
          <Image style={styles.book} source={require('../assets/image-book/spy-x-family-tap-1.jpg')} />
        </View>
        <View style={styles.text}>
          <Text style={styles.text1}>
            SPY x FAMILY 1 (ジャンプコミックス)
          </Text>
          <Text style={styles.text2}>
            149.400 đ
          </Text>
          {/* <Button title="-" />
          <Text>1</Text>
          <Button title="+" /> */}
          <Button title='Add to cart' onPress={()=>navigation.navigate("Cart")}>
          </Button>
          <Button title='Buy now' color="red"  onPress={()=>navigation.navigate("Cart")}>
          </Button>
        </View>
      </View>
      <Text style={styles.text4}>
        Thông tin sản phẩm
      </Text>
      <View style={styles.decrction}>
        <View >
          <Text style={styles.text3}>Mã hàng:</Text>
          <Text style={styles.text3}>Thể loại:</Text>
          <Text style={styles.text3}>Tác giả :</Text>
          <Text style={styles.text3}>Nhà xuất bản:</Text>
          <Text style={styles.text3}>Ngày xuất bản:</Text>
        </View>
        <View >
          <Text style={styles.text3}>8154156515461</Text>
          <Text style={styles.text3}>Truyện tranh</Text>
          <Text style={styles.text3}>Tatsuya Endo</Text>
          <Text style={styles.text3}>Shueisha</Text>
          <Text style={styles.text3}>2019</Text>
        </View>
      </View>
      <Text style={styles.text3}>
        Nội dung:
      </Text>
      <ReadMore numberOfLines={3} style={styles.text3}>
        Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình và cho con theo học tại học viện danh giá nhất Ostania hòng tiếp cận yếu nhân cầm đầu phe chủ chiến của đất nước này: Desmon Donavan! Và thật tình cờ, đứa trẻ mà Twilight nhận làm "con" ở cô nhi viện, Anya, lại có khả năng đọc suy nghĩ của người khác. Chưa kể "người vợ" anh buộc phải chọn lựa trong lúc vội vàng, Yor, lại là một… sát thủ...!!
        Ba người với lí do riêng để che giấu thân phận đã cùng chung sống với nhau dưới một mái nhà. Từ đây câu chuyện siêu hấp dẫn và hài hước về gia đình điệp viên chính thức mở ra...!!
      </ReadMore>
      <View>
      </View>
    </View>
  )
}

export default DetailBook

const styles = StyleSheet.create({
  container: {
    padding: 5,
    // flex: 1,
    backgroundColor: 'white smoke',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
  },
  decrction: {
    flexDirection: 'row',

  },
  // img: {
  //   float: 'left',
  // },
  text: {
    // float: 'right',
    width: '55%',
    padding: 5,
    marginTop: 25,
  },
  book: {
    height: 200,
    width: 150,


  },
  text2: {
    fontSize: 20,
    color: 'red',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text1: {
    fontSize: 18,
    color: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text3: {
    fontSize: 15,
    color: 'black',
  },
  text4: {
    fontSize: 20,
    fontWeight: "bold",
  }

  ,
})

