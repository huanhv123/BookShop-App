const initialState ={
    reviews:[],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_REVIEW':
            return {
                ...state,
                reviews:[...action.payload],
                isSuccess :false,
            };
        case 'SEARCH_REVIEW':
            return {
                ...state,
                reviews:[...action.payload],
                isSuccess :false,
            };
        case 'CREATE_NEW_REVIEW':
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
        case 'UPDATE_REVIEW':
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
        case 'DELETE_REVIEW':
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