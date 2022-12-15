
const initialState ={
    customers:[],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CUSTOMER':
            return {
                ...state,
                customers: [...action.payload],
                isSuccess: false,
            };
        case 'CREATE_NEW_CUSTOMER':
            state.isSuccess = false
            if (action.payload.mse == true) {
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess: true,
                };
            }
            return {
                ...state,
                isSuccess: false,
            };
        case 'UPDATE_CUSTOMER':
            state.isSuccess = false
            if (action.payload.mse == true) {
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess: true,
                };
            }
            return {
                ...state,
                isSuccess: false,
            };

            state.isSuccess = false
            if (action.payload.mse == true) {
                // console.log("sdsdf")
                return {
                    ...state,
                    isSuccess: true,
                };
            }
            return {
                ...state,
                isSuccess: false,
            };
        default:
            return state;
    }
};