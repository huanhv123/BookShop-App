// import axios from "axios";
  
// export const fetchAllReviews=()=>{
//   return (dispatch)=>{
//     const getData = async () => {
//       try {
       
//           const response=await fetch("");
//           const reviews=await response.json();
//           // console.log(books)
//           dispatch(GetAllReview(reviews))
//       } catch (err) {
//           console.error(err);
//       }
//   };
//   getData();
//   }
// }

// export const fetchSearchReviews=(key)=>{
//   return (dispatch)=>{
//     const getData = async () => {
//       try {
//           const response=await fetch(""+key);
//           const reviews=await response.json();
//           // console.log(books)
//           dispatch(SearchReview(reviews))
//       } catch (err) {
//           console.error(err);
//       }
//   };
//   getData();
//   }
// }

// export const fetchCreateReviews=(reviews)=>{
//   return (dispatch)=>{
//     const newData = async () => {
//       try {
//         await axios.post("", reviews)
//         .then(reviews => {
//           console.log(reviews.data)
//             dispatch(CreatNewReview(reviews.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(CreatNewReview(false))
//       }
//   };
//   newData();
//   }
// }

// export const fetchUpdateReviews=(reviews)=>{
//   return (dispatch)=>{
//     const updateData = async () => {
//       try {
//         await axios.put(""+reviews.id, reviews)
//         .then(reviews => {
//             dispatch(UpdateReview(reviews.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(UpdateReview(false))
//       }
//   };
//   updateData();
//   }
// }

// export const fetchDeleteReviews=(id)=>{
//   return (dispatch)=>{
//     const deleteData = async () => {
//       try {
//         await axios.delete(""+id)
//         .then(reviews => {
//             dispatch(DeleteReview(reviews.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(DeleteReview(false))
//       }
//   };
//   deleteData();
//   }
// }

// export const GetAllReview = (reviews) => {
//   return {
//     type: 'GET_REVIEW',
//     payload:reviews
//   };
// };

// export const SearchReview = (reviews) => {
//   return {
//     type: 'SEARCH_REVIEW',
//     payload:reviews
//   };
// };

// export const CreatNewReview = (mes) => {
//     return {
//       type: 'CREATE_NEW_REVIEW',
//       payload:mes
//     };
// };

// export const UpdateReview = (mes) => {
//   return {
//       type: 'UPDATE_REVIEW',
//       payload: mes,
//   };
// };

// export const DeleteReview = (mes) => {
//   return {
//       type: 'DELETE_REVIEW',
//       payload: mes,
//   };
// };