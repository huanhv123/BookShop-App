// const initialState ={
//     carts:[],
// };
// export default (state = initialState, action) => {
//     switch (action.type) {
//         case 'CREATE_NEW_CART':
//             state.isSuccess = false
//             if (action.payload.mse == true) {
//                 // console.log("sdsdf")
//                 return {
//                     ...state,
//                     isSuccess: true,
//                 };
//             }
//             return {
//                 ...state,
//                 isSuccess: false,
//             };

//         case 'DELETE_CART':
//             state.isSuccess = false
//             if (action.payload.mse == true) {
//                 // console.log("sdsdf")
//                 return {
//                     ...state,
//                     isSuccess: true,
//                 };
//             }
//             return {
//                 ...state,
//                 isSuccess: false,
//             };
//         default:
//             return state;
//     }
// };