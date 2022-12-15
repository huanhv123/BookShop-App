import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView
} from 'react-native';
import { COLOURS, Items } from '../data/Database';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import ReadMore from '@fawazahmed/react-native-read-more'
import { Rating, AirbnbRating } from 'react-native-ratings';
// {navigation, route}
const DetailBook = ({navigation, route}) => {
  const {productID} = route.params;
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
  // var x = parseInt(product.productPrice);
  // var x = 18900;
  // x = x.toLocaleString('vi-VN');
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height / 2;

  useEffect(() => {
    getDataFromDB();
  }, []);

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == 1) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  const addToCart = async id => {
    // let itemArray = await AsyncStorage.getItem('cartItems');
    // itemArray = JSON.parse(itemArray);
    // if (itemArray) {
    //   let array = itemArray;
    //   array.push(id);
    //   try {
    //     await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    //     ToastAndroid.show(
    //       'Item Added Successfully to cart',
    //       ToastAndroid.SHORT,
    //     );
    //     navigation.navigate("Home");
    //   } catch (error) {
    //     return error;
    //   }
    // } else {
    //   let array = [];
    //   array.push(id);
    //   try {
    //     await AsyncStorage.setItem('cartItems', JSON.stringify(array));
    //     ToastAndroid.show(
    //       'Item Added Successfully to cart',
    //       ToastAndroid.SHORT,
    //     );
    //     navigation.goBack();
    //   } catch (error) {
    //     return error;
    //   }
    // }
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
              source={require("../assets/image-book/ban-ve-van-minh.jpg")}
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
                parseInt(product.productPrice).toLocaleString('vi-VN')
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
                (parseInt(product.productPrice) + 5000).toLocaleString('vi-VN')
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

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'column',
              marginVertical: 4,
              alignItems: 'center',
              borderWidth: 2,
              marginBottom: 14
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
                  Mã hàng:
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
                  8154156515461
                </Text>
              </View>
            </View>
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
              Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình và cho con theo học tại học viện danh giá nhất Ostania hòng tiếp cận yếu nhân cầm đầu phe chủ chiến của đất nước này: Desmon Donavan! Và thật tình cờ, đứa trẻ mà Twilight nhận làm "con" ở cô nhi viện, Anya, lại có khả năng đọc suy nghĩ của người khác. Chưa kể "người vợ" anh buộc phải chọn lựa trong lúc vội vàng, Yor, lại là một… sát thủ...!!
              Ba người với lí do riêng để che giấu thân phận đã cùng chung sống với nhau dưới một mái nhà. Từ đây câu chuyện siêu hấp dẫn và hài hước về gia đình điệp viên chính thức mở ra...!!
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
          onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
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
