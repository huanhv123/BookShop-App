// import axios from "axios";
//   var ip="192.168.1.105"
// export const fetchAllBooks=()=>{
//   return (dispatch)=>{
//     const getData = async () => {
//       try {
//         // console.log("dsdsf")
//         // await axios.get("http://localhost:3000/book/getAllBooks")
//         // .then(book => {
//         //   console.log(book.data)
//         //     // dispatch(GetAllBook(book.data))
//         // });
//           const response=await fetch("http://"+ip+":3000/book/getAllBooks");
//           const books=await response.json();
//           // console.log(books)
//           dispatch(GetAllBook(books))
//       } catch (err) {
//           console.error(err);
//       }
//   };
//   getData();
//   }
// }

// export const fetchSearchBook=(key)=>{
//   return (dispatch)=>{
//     const getData = async () => {
//       try {
//           const response=await fetch("http://"+ip+":3000/book/"+key);
//           const books=await response.json();
//           // console.log(books)
//           dispatch(SearchBook(books))
//       } catch (err) {
//           console.error(err);
//       }
//   };
//   getData();
//   }
// }

// export const fetchCreateBooks=(book)=>{
//   return (dispatch)=>{
//     const newData = async () => {
//       try {
//         await axios.post("http://"+ip+":3000/book/createBook", book)
//         .then(book => {
//           console.log(book.data)
//             dispatch(CreatNewBook(book.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(CreatNewBook(false))
//       }
//   };
//   newData();
//   }
// }

// export const fetchUpdateBooks=(book)=>{
//   return (dispatch)=>{
//     const updateData = async () => {
//       try {
//         await axios.put("http://"+ip+":3000/book/"+book.id, book)
//         .then(book => {
//             dispatch(UpdateBook(book.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(UpdateBook(false))
//       }
//   };
//   updateData();
//   }
// }

// export const fetchDeleteBooks=(id)=>{
//   return (dispatch)=>{
//     const deleteData = async () => {
//       try {
//         await axios.delete("http://"+ip+":3000/book/"+id)
//         .then(book => {
//             dispatch(DeleteBook(book.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(DeleteBook(false))
//       }
//   };
//   deleteData();
//   }
// }

// export const GetAllBook = (books) => {
//   return {
//     type: 'GET_ALL_BOOK',
//     payload:books
//   };
// };

// export const SearchBook = (books) => {
//   return {
//     type: 'SEARCH_BOOK',
//     payload:books
//   };
// };

// export const CreatNewBook = (mes) => {
//     return {
//       type: 'CREATE_NEW_BOOK',
//       payload:mes
//     };
// };

// export const UpdateBook = (mes) => {
//   return {
//       type: 'UPDATE_BOOK',
//       payload: mes,
//   };
// };

// export const DeleteBook = (mes) => {
//   return {
//       type: 'DELETE_BOOK',
//       payload: mes,
//   };
// };