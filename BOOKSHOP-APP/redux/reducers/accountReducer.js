
const initialState ={
    accounts:[],
    account:{},
    isLogin:false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ACCOUNT':
            return {
                ...state,
                accounts:[...action.payload],
                isSuccess :false,
            };

        case 'GET_ACCOUNT_BY_ID':
            return {
                ...state,
                account:{...action.payload},
                isSuccess :false,
            };

        case 'LOGIN_ACCOUNT':
            state.isLogin=false
            if(action.payload.mse==true){
                const newAccount= {id: action.payload.id, type: action.payload.Type}
                console.log(newAccount)
                return {
                    ...state,
                    account:newAccount,
                    isLogin :true,
                };
            }
            return {
                ...state,
                isLogin :false,
            };
        
        case 'CREATE_NEW_ACCOUNT':
            state.isSuccess=false
            if(action.payload.mse==true){
                console.log("Đăng ký thành công")
                return {
                    ...state,
                    isSuccess: true,
                };
            }
            return {
                ...state,
                isSuccess: false,
            };
        case 'LOGIN_ACCOUNT':
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
        case 'UPDATE_ACCOUNT':
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