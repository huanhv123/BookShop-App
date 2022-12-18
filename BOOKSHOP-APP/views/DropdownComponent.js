import React, { useState, useEffect } from 'react';
import { View, Platform, Text, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { useSelector, useDispatch } from "react-redux";
import { fetchAllCategories } from "../redux/actions/categoriesAction";
const DropdownComponent = () => {
  const dispatch = useDispatch();
  const listcat = useSelector((state) => state.category.listcat);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {
    // console.log(listcat)
    if (listcat.length == 0) {
      console.log("sadfas")
      // dispatch(fetchAllCategories())
    }
    console.log(value)
  }, [value]);
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
      {/* <View >
        <DropDownPicker
        ArrowDownIconComponent={() => {
          return (
            <FontAwesomeIcon
              size={18}
              color={'red'}
              style={{ paddingHorizontal: 5 }}
              name="chevron-down"
            />
          );
        }}
        ArrowUpIconComponent={() => {
          return (
            <FontAwesomeIcon
              size={18}
              color={'red'}
              style={{ paddingHorizontal: 5 }}
              name="chevron-up"
            />
          );
        }}
        open={open}
        value={value}
        items={category}
        setValue={setValue}
        setOpen={setOpen}
      /> 
      </View> */}
    </SafeAreaView>
  );
};

export default DropdownComponent;
