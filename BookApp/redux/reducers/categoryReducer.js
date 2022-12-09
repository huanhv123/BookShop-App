const initialState ={
    categories:[
        {id:1,nameCate:"Khoa học"},
        {id:2,nameCate:"Văn học"},
        {id:3,nameCate:"Kinh tế"},
    ],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_CATEGORY':
            return {
                ...state,
                categories: [...action.payload],
                isSuccess: false,
            };
        case 'SEARCH_CATEGORY':
            return {
                ...state,
                categories: [...action.payload],
                isSuccess: false,
            };
        case 'CREATE_NEW_CATEGORY':
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
        case 'UPDATE_CATEGORY':
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
        case 'DELETE_CATEGORY':
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