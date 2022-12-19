import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  Dimensions,
  Animated,
  SectionList
} from 'react-native';
import { COLOURS, Items } from '../data/Database';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fetchBookHome } from '../redux/actions/bookAction';
import { useSelector, useDispatch } from "react-redux";
const Home = ({ navigation }) => {

  // const books = [
  //   {
  //     "id": "KgU3amaqKAfnIXNSZ5Lp",
  //     "price": 190000,
  //     "nameBook": "Làm Bạn Với sdvdsfsd ",
  //     "category": "Tiểu thuyết",
  //     "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2FLamBanVoiBauTroi.jpg?alt=media&token=44dec27d-e84a-4a3a-8f9c-9191172f1975",
  //     "author": "Nguyễn Nhật Ánh",
  //     "descriptionBook": "Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Và đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời.",

  //   },
  //   {
  //     "id": "YEu6vuffiCFNZUJOtJcu",
  //     "nameBook": "Xã Hội Việt Nam",
  //     "price": 900000,
  //     "author": "Lương Đức Thiệp",
  //     "category": "Văn học",
  //     "descriptionBook": "- Tại sao người ta lại định dạng quốc gia Việt Nam bằng một cái tên lai ghép giữa Ấn và Hoa – INDOCHINOISE? Văn hóa Việt Nam đã vay mượn gì Trung Hoa, và định hình văn hóa cho dân tộc như thế nào? Người Việt đã tạo nên một xã hội riêng, một lối sinh hoạt thế nào mà trải qua bao thế kỷ dân tộc Việt Nam không bị tan chìm và đồng hóa trong khối Hán tộc?",
  //     "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fxa-hoi-viet-nam.jpg?alt=media&token=f75b87ea-836a-4359-a897-040c78d2caca"
  //   },
  //   {
  //     "id": "u3aBKDpKY3w5HURpltbP",
  //     "nameBook": "Spy X Family",
  //     "author": "Tatsuya Endo",
  //     "category": "Manga",
  //     "descriptionBook": "Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình",
  //     "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=09f42923-4e71-4864-a292-66426df3b2f7",
  //     "price": 59000
  //   }
  // ]
  // const SECTIONS = [
  //   {
  //     id:1,
  //     title: 'Mua nhiều nhất',
  //     data: books
  //   },
  //   {
  //     id:2,
  //     title: 'Hot',
  //     data: books
  //   },
  //   {
  //     id:3,
  //     title: 'Truyện tranh',
  //     data: books
  //   },
  // ];
  // const [accessory, setAccessory] = useState([]);
  const dispatch = useDispatch();
  const SECTIONS=useSelector((state) => state.book.booksHome)
  const width = Dimensions.get('window').width / 2.3;
  useEffect(() => {
    if(SECTIONS.length==0){
      dispatch(fetchBookHome())
    }
  }, []);

  const ProductCard = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('DetailBook', {
          book: {
            "id": item.id,
            "descriptionBook": item.descriptionBook,
            "releaseDate":item.releaseDate,
            "photoBook": item.photoBook,
            "oldPrice": item.oldPrice,
            "nameBook": item.nameBook,
            "newPrice": item.newPrice,
            "view": item.view,
            "quantityRemaining": item.quantityRemaining,
            "author": item.author
          }
        })}
        style={{
          width: width,
          marginRight: 16,
          backgroundColor: '#E5E5E5',
          borderColor: '#000',
          borderWidth: 1.5,
          borderRadius: 10
        }}>
        <View
          style={{
            width: '100%',
            height: 170,
            borderRadius: 10,
            backgroundColor: '#fff',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          <Image
            // source={data.productImage}
            source={{
              uri: item.photoBook,
            }}
            resizeMode='contain'
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          maxFontSizeMultiplier={2}
          allowFontScaling={false}
          accessible={true}
          numberOfLines={2}
          style={{
            width: '100%',
            fontSize: 15,
            color: COLOURS.black,
            fontWeight: '700',
            marginBottom: 2,
            paddingHorizontal: 10
          }}>
          {item.nameBook}
        </Text>
        <Text
          style={{
            fontSize: 17,
            color: 'red',
            fontWeight: '600',
            marginBottom: 2,
            paddingHorizontal: 10
          }}>
          {item.newPrice}&#8363;</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        // backgroundColor: COLOURS.white,
        backgroundColor: '#E5E5E5'
      }}>
      <StatusBar
        backgroundColor='#000'
        barStyle="dark-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{ width: "100%" }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
            backgroundColor: '#fff',
            marginBottom: 20
          }}>
          <TouchableOpacity
            onPress={() =>navigation.navigate("Profile")}
          >
            <MaterialCommunityIcons
              name="account"
              style={{
                fontSize: 24,
                color: "#000",
                padding: 10,
                borderRadius: 10,
                backgroundColor: '#dddddd',
              }}
            />
          </TouchableOpacity>

          <View style={{
            width: '70%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // padding: 1,
            backgroundColor: "#fff",
            marginHorizontal: 10,
            elevation: 1,
            borderRadius: 10,
            borderWidth: 1.5,
            borderColor: '#000',
            overflow: 'hidden',
          }}>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder='Tìm kiếm'
              placeholderTextColor='grey'
              showSoftInputOnFocus={true}
              style={{
                flex: 1,
                fontWeight: '700',
                backgroundColor: '#fff',
                paddingLeft: 10,
                borderRightWidth: 1,
                overflow:'hidden'
              }}
            />
            <TouchableOpacity
              onPress={() => { }}
              style={{
                width: "14%",
                backgroundColor: "#dddddd",
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Ionicons name="search" size={30} />
            </TouchableOpacity>

          </View>

          <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          >
            <MaterialCommunityIcons
              name="cart"
              style={{
                fontSize: 24,
                color: '#000',
                padding: 10,
                borderRadius: 10,
                borderWidth: 1,
                borderColor:"#777777",
              }}
            />
          </TouchableOpacity>
        </View>
        {/* <View
          style={{
            padding: 16,
            backgroundColor: '#fff',
            marginBottom: 20
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor:'red',
              marginBottom: 17,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 20,
                  color: COLOURS.black,
                  fontWeight: '700',
                  letterSpacing: 1,
                }}>
                Accessories
              </Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 15,
                  color: COLOURS.blue,
                  fontWeight: '700',
                }}>
                Xem Thêm
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              // flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            <FlatList
              horizontal
              data={accessory}
              renderItem={({ item }) => { return <ProductCard data={item} key={item.id} /> }}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View> */}
        <View
          style={{
            // padding: 16,
            backgroundColor: '#E5E5E5',
            marginBottom: 20
          }}>
          
            {SECTIONS!=null?
              SECTIONS.map((section)=>(
              <View key={section.id}
                style={{
                  padding: 16,
                  backgroundColor: '#fff',
                  marginBottom: 20
                }}>
                <View 
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // backgroundColor:'red',
                    marginBottom: 17,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: COLOURS.black,
                        fontWeight: '700',
                        letterSpacing: 1,
                      }}>
                      {section.title}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: COLOURS.blue,
                        fontWeight: '700',
                      }}>
                      Xem Thêm
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                    <FlatList
                    horizontal={true}
                    data={section.data}
                    renderItem={({ item }) => { return <ProductCard item={item} key={item.id}/> }}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
              </View>
              )):null
          }
          {/* <ScrollView
        // nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{
            // padding: 16,
            backgroundColor: '#fff',
            // marginBottom: 20,
            // width: "100%"
          }}
      >
            <SectionList
            contentContainerStyle={{ paddingVertical: 0, backgroundColor: '#E5E5E5' }}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={({ section }) => (
              <View
                style={{
                  padding: 16,
                  backgroundColor: '#fff',
                  marginBottom: 20
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // backgroundColor:'red',
                    marginBottom: 17,
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: COLOURS.black,
                        fontWeight: '700',
                        letterSpacing: 1,
                      }}>
                      {section.title}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        color: COLOURS.blue,
                        fontWeight: '700',
                      }}>
                      Xem Thêm
                    </Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    // flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}>
                  {section != null ? (
                    <FlatList
                    nestedScrollEnabled 
                    horizontal={true}
                    data={section.data}
                    renderItem={({ item }) => { return <ProductCard item={item} key={item.id}/> }}
                    showsHorizontalScrollIndicator={false}
                  />
               ) : null} 

                </View>
              </View>
            )}
            renderItem={({ item, section }) => {
              if (section) {
                return null;
              }
              return <ProductCard data={item} key={item.id} />;
            }}
          />
      </ScrollView> */}

        </View>
        <View
          style={{
            // marginBottom: 15,
            padding: 16,
            backgroundColor: '#fff'
          }}>
          <Text
            style={{
              fontSize: 26,
              color: COLOURS.black,
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
              textAlign: 'center'
            }}>
            BookShop
          </Text>
          <Text
            style={{
              fontSize: 11.5,
              color: COLOURS.black,
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 18,
              textAlign: 'center'
            }}>
            Địa chỉ: Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội{'\n'}
            Tổng đài hỗ trợ: 1907373 - Email: support@.vn{'\n'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
