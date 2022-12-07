
const initialState ={
    address:[],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ADDRESS':
            return {
                ...state,
                address:[...action.payload],
                isSuccess :false,
            };
        
        case 'CREATE_NEW_ADDRESS':
            state.isSuccess=false
            if(action.payload.mse==true){
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess :true,
                };
            }
            return {
                ...state,
                isSuccess :false,
            };
        case 'UPDATE_ADDRESS':
            state.isSuccess=false
            if(action.payload.mse==true){
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess :true,
                };
            }
            return {
                ...state,
                isSuccess :false,
            };
        case 'DELETE_ADDRESS':
            state.isSuccess=false
            if(action.payload.mse==true){
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess :true,
                };
            }
            return {
                ...state,
                isSuccess :false,
            };
        default:
            return state;
    }
};