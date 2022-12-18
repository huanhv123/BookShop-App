const initialState = {
    books: [
        {
            "id": "KgU3amaqKAfnIXNSZ5Lp",
            "price": 190000,
            "nameBook": "Làm Bạn Với Bầu Trời(Bìa Cứng)",
            "category": "Tiểu thuyết",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2FLamBanVoiBauTroi.jpg?alt=media&token=44dec27d-e84a-4a3a-8f9c-9191172f1975",
            "author": "Nguyễn Nhật Ánh",
            "descriptionBook":"Một câu chuyện giản dị, chứa đầy bất ngờ cho tới trang cuối cùng. Và đẹp lộng lẫy, vì lòng vị tha và tình yêu thương, khiến mắt rưng rưng vì một nỗi mừng vui hân hoan. Cuốn sách như một đốm lửa thắp lên lòng khát khao sống tốt trên đời.",
            
        },
        {
            "id": "YEu6vuffiCFNZUJOtJcu",
            "nameBook": "Xã Hội Việt Nam",
            "price": 900000,
            "author": "Lương Đức Thiệp",
            "category": "Văn học",
            "descriptionBook":"- Tại sao người ta lại định dạng quốc gia Việt Nam bằng một cái tên lai ghép giữa Ấn và Hoa – INDOCHINOISE? Văn hóa Việt Nam đã vay mượn gì Trung Hoa, và định hình văn hóa cho dân tộc như thế nào? Người Việt đã tạo nên một xã hội riêng, một lối sinh hoạt thế nào mà trải qua bao thế kỷ dân tộc Việt Nam không bị tan chìm và đồng hóa trong khối Hán tộc?",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fxa-hoi-viet-nam.jpg?alt=media&token=f75b87ea-836a-4359-a897-040c78d2caca"
        },
        
        {
            "id": "u3aBKDpKY3w5HURpltbP",
            "nameBook": "Spy X Family",
            "author": "Tatsuya Endo",
            "category": "Manga",
            "descriptionBook":"Nhằm ngăn chặn âm mưu gây chiến, giữ vững nền hòa bình Đông - Tây, điệp viên hàng đầu của Westalis, Twilight phải xây dựng một gia đình",
            "photoBook": "https://firebasestorage.googleapis.com/v0/b/bookshop-7d314.appspot.com/o/images%2Fspy-x-family-tap-1.jpg?alt=media&token=09f42923-4e71-4864-a292-66426df3b2f7",
            "price": 59000
        }
    ],
    isSuccess:false,
    booksHome:[]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ALL_BOOK':
            return {
                ...state,
                books:[...action.payload],
                isSuccess :false,
            };
        case 'GET_BOOK_HOME':
            return {
                ...state,
                booksHome:[...action.payload],
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