import React, { useState , useEffect} from 'react';
import { View, Platform, Text, SafeAreaView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { fetchAllCategories } from '../redux/actions/categoriesAction';
const DropdownComponent = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category.listcategory);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  useEffect(() => {
    if(category.length === 0){
      dispatch(fetchAllCategories());
    }
    console.log(value);
  }, [value]);
   const [items, setItems] = useState(category);
  return (
    <SafeAreaView style={{ flex: 1,alignItems:'center',justifyContent:'center',padding:10 }}>
      <View >
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
      </View>
    </SafeAreaView>
  );
};

export default DropdownComponent;
