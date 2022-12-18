import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
    return (
        <View >
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: '#8200d6' }}>
                <ImageBackground
                    source={require('../../assets/images/background.png')}
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../../assets/images/facebook.png')}
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        John Doe
                    </Text>
                    {/* <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'Roboto-Regular',
                                marginRight: 5,
                            }}>
                            280 Coins
                        </Text>
                        <FontAwesome5 name="coins" size={14} color="#fff" />
                    </View> */}
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
                <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15, marginLeft:17 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Ionicons name="exit-outline" size={30} />
                        <Text
                            style={{
                                fontSize: 20,
                                fontFamily: 'Times-New-Roman',
                                marginLeft: 5,
                            }}>
                            Sign Out
                        </Text>
                    </View>
                </TouchableOpacity>
            
        </View>
    );
};

export default CustomDrawer;