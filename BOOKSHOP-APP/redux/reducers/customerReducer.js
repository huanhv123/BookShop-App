
const initialState ={
    customers:[],
    customer: {},
    isCustomer:false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_CUSTOMER':
            return {
                ...state,
                customers: [...action.payload],
                isSuccess: false,
            };
        case 'GET_CUSTOMER_BY_ID':
            // console.log(action.payload)
            return {
                ...state,
                customer: action.payload,
                isCustomer: true,
                
            };
        case 'Delete_Acount':
                // console.log(action.payload)
                return {
                    ...state,
                    customer: {},
                    isCustomer: false,
                    
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