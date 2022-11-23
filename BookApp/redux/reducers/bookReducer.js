const initialState = {
    books: [
        {
            "id": "KgU3amaqKAfnIXNSZ5Lp",
            "price": 190000,
            "nameBook": "Làm Bạn Với Bầu Trời(Bìa Cứng)",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2FLamBanVoiBauTroi.jpg?alt=media&token=44dec27d-e84a-4a3a-8f9c-9191172f1975",
            "author": "Nguyễn Nhật Ánh"
        },
        {
            "id": "YEu6vuffiCFNZUJOtJcu",
            "nameBook": "Xã Hội Việt Nam",
            "price": 900000,
            "author": "Lương Đức Thiệp",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fxa-hoi-viet-nam.jpg?alt=media&token=f75b87ea-836a-4359-a897-040c78d2caca"
        },
        {
            "id": "ZNqVK1WjQYvp9zfLq8xo",
            "nameBook": "Xa hhhh"
        },
        {
            "id": "u3aBKDpKY3w5HURpltbP",
            "nameBook": "Spy X Family",
            "author": "Tatsuya Endo",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=09f42923-4e71-4864-a292-66426df3b2f7",
            "price": 59000
        }
    ],
    isSuccess:false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_BOOK':
            return {
                ...state,
                books:[...action.payload],
                isSuccess :false,
            };
        case 'SEARCH_BOOK':
            return {
                ...state,
                books:[...action.payload],
                isSuccess :false,
            };
        case 'CREATE_NEW_BOOK':
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
        case 'UPDATE_BOOK':
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
        case 'DELETE_BOOK':
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