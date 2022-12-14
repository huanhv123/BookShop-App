const initialState ={
    bills:[
        {
            id:1,
            nameCus:"Phạm Thị Hoa",
            total:190000,
            address:"Hà Nội",
            status:"Đã thanh toán",
        },
        {
            id:2,
            nameCus:"Nguyễn Thắng Toàn",
            total:190000,
            address:"Hà Nội - Đống Đa",
            status:"Đã thanh toán",
        },
        {
            id:3,
            nameCus:"Nguyễn Văn Thành",
            total:190000,
            address:"Hồ Chí Minh" ,  
            status:"Chưa thanh toán",
        },
    ],
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_BILL':
            return {
                ...state,
                bills:[...action.payload],
                isSuccess :false,
            };
        case 'GET_BILL':
                return {
                    ...state,
                    bills:[...action.payload],
                    isSuccess :false,
                };
        case 'SEARCH_BILL':
            return {
                ...state,
                bills:[...action.payload],
                isSuccess :false,
            };
        case 'CREATE_NEW_BILL':
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
        case 'UPDATE_BILL':
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
        case 'DELETE_BILL':
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