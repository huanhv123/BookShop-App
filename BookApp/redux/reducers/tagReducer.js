// import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
    tags: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "C#" },
    ],
    currentTag: {},
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE_TAG':
            let newtag = { id: action.payload.tagId, name: action.payload.tagName }
            // AsyncStorage.setItem('cartItems', JSON.stringify([...state.tags, newtag]));
            return {
                ...state,
                tags: [...state.tags, newtag],
                currentTag: [...state.tags, newtag]
            };
        case 'UPDATE_TAG':
            state.tags.some(tag => {
                if (tag.id === action.payload.tagId) {
                    tag.name = action.payload.tagName
                }
            }
            )
            // AsyncStorage.setItem('cartItems', JSON.stringify([...state.tags]));
            return {
                ...state,
                tags: [...state.tags],
                currentTag: [...state.tags]
            };
        case 'DELETE_TAG':
            let newTag = state.tags.filter(x => x.id != action.payload.tagId)
            // AsyncStorage.setItem('cartItems', JSON.stringify(newTag));
            return {
                ...state,
                tags: newTag,
                currentTag: newTag
            };
        default:
            // AsyncStorage.setItem('cartItems', JSON.stringify(state.tags));
            return state;
    }
};