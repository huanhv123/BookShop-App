// import axios from "axios";
  
// export const fetchAllAddresss=()=>{
//   return (dispatch)=>{
//     const getData = async () => {
//       try {

//           const response=await fetch("");
//           const address=await response.json();
         
//           dispatch(GetAddress(address))
//       } catch (err) {
//           console.error(err);
//       }
//   };
//   getData();
//   }
// }



// export const fetchCreateAddress=(address)=>{
//   return (dispatch)=>{
//     const newData = async () => {
//       try {
//         await axios.post("", address)
//         .then(address => {
//           console.log(address.data)
//             dispatch(CreatNewAddress(address.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(CreatNewAddress(false))
//       }
//   };
//   newData();
//   }
// }

// export const fetchUpdateAddress=(address)=>{
//   return (dispatch)=>{
//     const updateData = async () => {
//       try {
//         await axios.put(""+address.id, address)
//         .then(address => {
//             dispatch(UpdateAddress(address.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(UpdateAddress(false))
//       }
//   };
//   updateData();
//   }
// }

// export const fetchDeleteAddress=(id)=>{
//   return (dispatch)=>{
//     const deleteData = async () => {
//       try {
//         await axios.delete(""+id)
//         .then(address => {
//             dispatch(DeleteAddress(address.data))
//         });
//       } catch (err) {
//           console.error(err);
//           dispatch(DeleteAddress(false))
//       }
//   };
//   deleteData();
//   }
// }

// export const GetAddress= (address) => {
//   return {
//     type: 'GET_ADDRESS',
//     payload:address
//   };
// };



// export const CreatNewAddress = (mes) => {
//     return {
//       type: 'CREATE_NEW_ADDRESS',
//       payload:mes
//     };
// };

// export const UpdateAddress = (mes) => {
//   return {
//     type: 'UPDATE_ADDRESS',
//       payload: mes,
//   };
// };

// export const DeleteAddress = (mes) => {
//   return {
//       type: 'DELETE_ADDRESS',
//       payload: mes,
//   };
// };