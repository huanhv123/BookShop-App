import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateBook } from '../../../redux/actions/bookAction';
import * as ImagePicker from 'expo-image-picker';
import { firebase } from '../../../config/firebase';
import { fetchAllCategories, fetchGetCategoryByID } from "../../../redux/actions/categoriesAction";
import { getStorage, uploadString, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { fetchAllBooks, fetchUpdateBooks } from "../../../redux/actions/bookAction";
import { async } from '@firebase/util';
import DropDownPicker from 'react-native-dropdown-picker';
const EditBook = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { book } = route.params;
  const [id, setId] = useState(book.id)
  const [nameBook, setNameBook] = useState(book.nameBook)
  const [author, setAuthor] = useState(book.author)
  const [price, setPrice] = useState((book.oldPrice + ""))
  const [descriptionBook, setDescriptionBook] = useState(book.descriptionBook)
  const [photoBook, setPhotoBook] = useState(book.photoBook)
  const [idCate, setIdCate] = useState(book.idCate)
  const categories = useSelector((state) => state.category.listcategory);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(idCate);

  useEffect(() => {
    if (categories.length == 0) {
    dispatch(fetchAllCategories());
    }
    console.log(value)
  }, [value]);


  const handleEditBook = () => {
    let newBook = {
      id: id,
      nameBook: nameBook,
      author: author,
      idCate: idCate,
      newPrice: parseInt(price),
      quantityRemaining: 25,
      releaseDate: "2021-09-01",
      view: 2333,
      oldPrice: parseInt(price),
      descriptionBook: descriptionBook,
      photoBook: photoBook,
    }
    // console.log(newBook)
    dispatch(fetchUpdateBooks(newBook));
    // dispatch(fetchAllBooks());
  }
  const handleCancel = () => {
    navigation.goBack()
  }

  const [selectedImage, setSelectedImage] = useState({ localUri: photoBook });
  const openImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ base64: true })
    if (result.canceled)
      return;
    // console.log(result)
    let uri = result.assets[0].uri;
    setSelectedImage({ localUri: result.assets[0].uri })
    if (Platform.OS === 'web') {
      let base64code = result.assets[0].base64;
      //upload 
      await uploadBase64(base64code)
    } else {
      let uri = result.assets[0].uri;
      const blobfile = await convertURI2BlobFile(uri)
      // console.log(blobfile)
      await uploadfile(blobfile);
    }
  }
  const convertURI2BlobFile = async (uri) => {
    const result = await new Promise((resolve, reject) => {
      let xmlRequest = new XMLHttpRequest();
      xmlRequest.onload = function () {
        resolve(xmlRequest.response);

      }
      xmlRequest.onerror = function () {
        console.log("error here")
      }

      xmlRequest.responseType = "blob";
      xmlRequest.open("GET", uri, true);
      xmlRequest.send(null)
    })
    return result;
  }

  const uploadfile = async (blobfile) => {
    let imgname = 'img-android-' + new Date().getTime();
    let storage = getStorage();
    let storageRef = ref(storage, `images/${imgname}.jpg`);
    let metadata = {
      contentType: 'image/jpeg'
    }
    const uploadTask = uploadBytesResumable(storageRef, blobfile, metadata)
    uploadTask.on('state_changed',
      (snapshot) => { },
      (error) => { },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('downloadURL', downloadURL)
          setPhotoBook(downloadURL)
        }
        )
      }
    )
  }
  const uploadBase64 = async (base64code) => {
    let imgname = 'im-web-' + new Date().getTime();
    //step 2
    let storage = getStorage();
    let storageRef = ref(storage, `images/${imgname}.jpg`);
    let metadata = {
      contentType: 'image/jpeg'
    }
    uploadString(storageRef, base64code, 'base64', metadata)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log('downloadURL', downloadURL)
          setPhotoBook(downloadURL)
        }
        )
      }
      )
  }
  return (
    <View style={styles.CRUDContainer}>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Name" style={styles.inputText}
            onChangeText={(nameBook) => setNameBook(nameBook)} value={nameBook} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Author" style={styles.inputText}
            onChangeText={(author) => setAuthor(author)} value={author}
          />
        </View>

        <View style={{ ...styles.inputContainer, marginBottom: 10, zIndex: 1 }} >
          <DropDownPicker
            style={styles.inputText}
            open={open}
            value={idCate}
            items={categories}
            setValue={setIdCate}
            setOpen={setOpen}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput placeholder="Description" style={styles.inputText}
            onChangeText={(descriptionBook) => setDescriptionBook(descriptionBook)}
            value={descriptionBook}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Price" style={styles.inputText}
            onChangeText={(price) => setPrice(price)}
            value={price}
          />
        </View>
        <View style={{
          ...styles.inputContainer, justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={{ uri: selectedImage.localUri }}
            style={styles.img} />
          <TouchableOpacity style={styles.btn} onPress={openImage}>
            <Text style={styles.btnTextx}>Chosse Image</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => handleEditBook()}>
            <Text style={styles.btnText}>Submit </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnCancel} onPress={() => handleCancel()}>
            <Text style={styles.btnText}>Cancel </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default EditBook

const styles = StyleSheet.create({
  CRUDContainer: {
    // backgroundColor: 'red',
    flex: 1,
  },
  formContainer: {
    //padding:20,
    //backgroundColor: 'black'
    width: "100%",
    alignItems: "center",
  },

  inputContainer: {
    width: "70%",

  },
  inputText: {
    height: 40,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#d81b60",
    paddingVertical: 5,
    marginBottom: 10,
  },
  btnSubmit: {
    backgroundColor: "green",
    width: "50%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45 / 2,
  },
  btnText: {
    color: "#FFF",
  },
  btnCancel: {
    marginLeft: 10,
    backgroundColor: "#d81b60",
    width: "45%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 45 / 2,
  },
  btnText: {
    color: "#FFF",
    fontSize: 20,
  },

  btnContainer: {
    marginTop: 20,
    // marginRight:60,
    width: "70%",
    flexDirection: 'row',
    //backgroundColor: 'red',
    //justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
  },
  img: {
    borderColor: "#000",
    borderWidth: 2.5,
    width: 150,
    height: 200,
    margin: 10,
  },
  btn: {
    width: '60%',
    height: 35,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30 / 2,
  },
  btnTextx: {
    color: "#fff",
    fontSize: 20,
  },
})