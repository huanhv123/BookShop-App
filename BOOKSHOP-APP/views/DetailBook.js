import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  ToastAndroid
} from 'react-native';
import { COLOURS, Items } from '../data/Database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReadMore from '@fawazahmed/react-native-read-more'
import { Rating, AirbnbRating } from 'react-native-ratings';
// {navigation, route}
const DetailBook = ({navigation, route}) => {
  const {book} = route.params;
//   const book=    {
//     "id": "20yAMenArlRBTioCSAL3",
//     "descriptionBook": "Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối",
//     "releaseDate": "1/9/2019",
//     "photoBook": "https://firebasestorage.googleapis.com/v0/b/app-react-native-af9b3.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=6772ed49-3e84-4319-a1e0-0828353a6620",
//     "oldPrice": 198100,
//     "nameBook": "Làm Bạn Với Bầu Trời ( Bìa Cứng)",
//     "newPrice": 120000,
//     "view": 2143,
//     "4": 20,
//     "author": "Nguyễn Nhật Ánh"
// }
  const [product, setProduct] = useState({});
  const [starCount, setStarCount] = useState(4);
  const [count, setCount] = useState(0);
  const conmentCustomer = [
    {
      id:1,
      rating: 4,
      conten: 'dsgh j ks dkhfs jkdd ksadhf kjasd dhf usdhf ksdj hfusad hudf isa jksd fksfhs',
      'nameCus': 'GGGhssss'
    },
    {
      id:2,
      rating: 4,
      conten: 'dsgh j ks dkhfs jkdd ksadhf kjasd dhf usdhf ksdj hfusad hudf isa jksd fksfhs',
      'nameCus': 'GGGhssss'
    }
  ]

  const infoProduct = [
    {
      title:"Mã hàng:",
      value: book.id,
    },
    {
      title:"Tác giả:",
      value: book.author,
    },
    {
      title:"Ngày xuất bản:",
      value: book.releaseDate,
    },
  ]
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height / 2;

  useEffect(() => {
    // getDataFromDB();
  }, []);

  const addToCart = async (id) => {
    let itemArray = await AsyncStorage.getItem('cartItems');
    itemArray = JSON.parse(itemArray);
    bookCart={
      id:book.id,
      photoBook:book.photoBook,
      nameBook:book.nameBook,
      price:book.newPrice,
      quantityBuy:parseInt(count),
  }
    if (itemArray) {
      let array = itemArray;
      checkExitBook=true
      array.forEach((item)=>{
        if(item.id==book.id&&bookCart.quantityBuy>0){
          item.quantityBuy=parseInt(count)
          checkExitBook=false
        }
      })
      if(checkExitBook){
        array.push(bookCart);
        checkExitBook=false;
      }
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Sản phẩm thêm vào giỏ hàng',
          ToastAndroid.SHORT,
        );
        // navigation.navigate("Home");
      } catch (error) {
        return error;
      }
    } else {
      let array = [];
      array.push(bookCart);
      try {
        await AsyncStorage.setItem('cartItems', JSON.stringify(array));
        ToastAndroid.show(
          'Sản phẩm thêm vào giỏ hàng',
          ToastAndroid.SHORT,
        );
        // navigation.goBack();
      } catch (error) {
        return error;
      }
    }
  };

  const onStarRatingPress = (rating) => {
    setStarCount(rating);
  }

  const pustQuantity = (quantityBuy) => {
    setCount(quantityBuy + 1)
  }

  const minusQuantity = ( quantityBuy) => {
    if(quantityBuy>0){
      setCount(quantityBuy - 1)
    }

  }

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: "#E5E5E5",
        // position: 'relative',
      }}>
      <StatusBar
        backgroundColor='#000'
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: height,
            backgroundColor: "#EEEEEE",
            // position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            // marginBottom: 4,
            position: 'relative',
          }}>
          <View
            style={{
              width: width,
              height: "100%",
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: "#EEEEEE",
            }}>
            <View
            style={{
              zIndex: 1,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              // backgroundColor:'red',
              position: 'absolute',
              top:0,
              left:0,
              paddingTop: 10,
              paddingLeft: 10,
            }}
            >
            <TouchableOpacity
             onPress={() => navigation.goBack()}
             >
              <Entypo
                name="chevron-left"
                style={{
                  fontSize: 18,
                  color: "#fff",
                  padding: 10,
                  backgroundColor: "rgba(36, 36, 36, 0.5)",
                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
            <Image
              source={{uri: book.photoBook}}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
              }}
            />
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 12,
            marginBottom: 15,
            backgroundColor: '#fff',
            width:'100%',
            borderTopWidth:1,
            borderColor:'gray',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width:'100%',
              alignItems: 'center',
            }}>
            <Text
              maxFontSizeMultiplier={2}
              allowFontScaling={false}
              accessible={true}
              numberOfLines={2}
              style={{
                fontSize: 22,
                fontWeight: '650',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '100%',
              }}>
              {product.productName}
            </Text>
          </View>
          {/* gia sach */}
          <View
            style={{
              width: width,
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 14,
              borderBottomColor: "#fff",
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                letterSpacing: 1,
                color: 'red',
                marginRight: 10,
              }}>
              {
                parseInt(book.newPrice).toLocaleString('vi-VN')
              }&#8363;
            </Text>
            <Text
              style={{
                fontSize: 25,
                fontWeight: '700',
                color: 'gray',
                letterSpacing: 1,
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid'
              }}
            >
              {
                (parseInt(book.oldPrice)).toLocaleString('vi-VN')
              }&#8363;
            </Text>
          </View>
        </View>

        {/* thong tin chi tiet */}
        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 15,
            backgroundColor: '#fff'
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
              }}>
              Thông tin chi tiết
            </Text>
            {/* <View style={{
              flexDirection: 'row',
            }}>
             
            </View> */}
          </View>
          {infoProduct.map((item)=>(
          <View key={item.title}
            style={{
              flexDirection: 'column',
              marginVertical: 4,
              alignItems: 'center',
              borderWidth: 2
              // justifyContent: 'space-between',
            }}>
            <View
              style={{
                width: "100%",
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: "#fff",
                // padding:10,
              }}>
              <View
                style={{
                  width: "40%",
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderRightWidth: 2,
                  // backgroundColor:'red',
                  padding: 6,
                }}
              >
                <Text
                  maxFontSizeMultiplier={2}
                  allowFontScaling={false}
                  accessible={true}
                  numberOfLines={2}
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    color: 'gray',
                  }}>
                  {item.title}
                </Text>
              </View>
              <View
                style={{
                  width: "60%",
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10
                }}
              >
                <Text
                  maxFontSizeMultiplier={2}
                  allowFontScaling={false}
                  accessible={true}
                  numberOfLines={2}
                  style={{
                    fontSize: 18,
                    fontWeight: '600',
                    // maxWidth: '85%',
                    // color: 'gray',
                    // marginBottom: 4,
                    // marginRight:10,
                  }}
                >
                  {item.value}
                </Text>
              </View>
            </View>
          </View>
          ))}
          <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 15,
            backgroundColor: '#fff'
          }}
          >

          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 15,
            backgroundColor: '#fff'
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
              }}>
              Mô tả sản phẩm
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginVertical: 4,
              alignItems: 'center',
              marginBottom: 15
              // justifyContent: 'space-between',
            }}>
            <ReadMore numberOfLines={3}
              maxFontSizeMultiplier={3}
              allowFontScaling={false}
              accessible={true}
              style={{
                fontSize: 15,
                color: 'black',
                // width: '100%'
              }}>
              {book.descriptionBook}
            </ReadMore>
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            marginBottom: 15,
            backgroundColor: '#fff'
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              // justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: COLOURS.black,
                maxWidth: '84%',
              }}>
              Nhận xét khách hàng
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginVertical: 4,
              // alignItems: 'center',
              marginBottom: 15,
              backgroundColor:'#fff'
              // justifyContent: 'space-between',
            }}>
            {conmentCustomer!=null?
              conmentCustomer.map((item)=>(
                <View key={item.id}
                  style={{
                    flexDirection: 'column',
                    marginVertical: 4,
                    // alignItems: 'center',
                    marginBottom: 15,
                    justifyContent:'center',
                    borderBottomWidth:2,
                    borderColor:'gray'
                  }}>
                  <View
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      letterSpacing: 0.5,
                      marginVertical: 4,
                      color: COLOURS.black,
                      // maxWidth: '100%',
                      // backgroundColor:'red',
                      alignItems: 'flex-start'
                    }}
                  >
                    <Rating
                      disabled={false}
                      startingValue={Math.floor(parseInt(item.rating))}
                      // ratingCount={5}
                      imageSize={20}
                      rating={starCount}
                      selectedStar={(rating) => onStarRatingPress(rating)}
                      // showRating
                      style={{ overflow: 'hidden' }}
                    />
                  </View>
                  <Text 
                  style={{
                    fontSize: 25,
                    color: 'black',
                    width: '100%',
                    fontWeight: '600'
                  }}
                    maxFontSizeMultiplier={2}
                    allowFontScaling={false}
                    accessible={true}
                    numberOfLines={2}
                  >
                    {item.nameCus}
                  </Text>
                  <ReadMore
                   numberOfLines={2}
                    maxFontSizeMultiplier={2}
                    allowFontScaling={false}
                    accessible={true}
                    style={{
                      fontSize: 15,
                      color: 'black',
                      width: '100%',
                      marginBottom:15
                    }}>
                    {item.conten}
                  </ReadMore>

                </View>
              )):null
            }
          </View>

        </View>
      </ScrollView>

      {/* them gio hang */}
      <View
        style={{
          position: 'relative',
          bottom: 0,
          height: '7%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
          backgroundColor: '#fff',
          borderTopWidth: 1.5,
          borderColor: '#d1d1d1d1',
          paddingHorizontal: 9
        }}>
        <View
          style={{
            width: '40%',
            height: '90%',
            // backgroundColor: COLOURS.blue,
            // borderRadius: 20,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            borderWidth:1
          }}
        >
          <TouchableOpacity
          onPress={()=>pustQuantity(count)}
            style={{
              width: '30%',
              height: '100%',
              // backgroundColor: "gray",
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth:1,
            }}>
            <AntDesign
              size={20}
              name="plus"
              style={{
                fontWeight: 'bold',
                color: '#000',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '40%',
              height: '90%',
              // backgroundColor: COLOURS.blue,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                letterSpacing: 1,
                color: '#000',
                textTransform: 'uppercase',
              }}>
              {count}
            </Text>
          </View>
          <TouchableOpacity
            onPress={()=>minusQuantity(count)}
            style={{
              width: '30%',
              height: '100%',
              borderLeftWidth:1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              size={20}
              name="minus"
              style={{
                fontWeight: 'bold',
                color: '#000',
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => addToCart()}
          style={{
            width: '50%',
            height: '90%',
            backgroundColor: 'green',
            // borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: COLOURS.white,
              textTransform: 'uppercase',
            }}>
           Thêm vào giỏ
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailBook;
