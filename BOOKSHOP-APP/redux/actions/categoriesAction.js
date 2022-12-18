import axios from "axios";
  

export const fetchAllCategories=()=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
       
          // const response=await fetch("");
          // const categories=await response.json();
        //   const categories=[
        //     {id:1,nameCate:"Khoa học"},
        //     {id:2,nameCate:"Văn học"},
        //     {id:3,nameCate:"Kinh tế"},
        // ]

          // const response=await fetch("http://localhost:3000/category/getAllCategories");
          // const categories=await response.json();
          
          dispatch(GetAllCategory(categories))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchSearchCategory=(key)=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch(""+key);
          const categories=await response.json();
         
          dispatch(SearchCategory(categories))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchGetCategoryByID=(id)=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("http://localhost:3000/category/"+id);
          const categories=await response.json();
         
          dispatch(SearchCategory(categories))
          
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchCreateCategories=(categories)=>{
  return (dispatch)=>{
    const newData = async () => {
      try {
        await axios.post("", categories)
        .then(categories => {
          console.log(categories.data)
            dispatch(CreatNewCategory(categories.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(CreatNewCategory(false))
      }
  };
  newData();
  }
}

export const fetchUpdateCategories=(categories)=>{
  return (dispatch)=>{
    const updateData = async () => {
      try {
        await axios.put(""+categories.id, categories)
        .then(categories => {
            dispatch(UpdateCategory(categories.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(UpdateCategory(false))
      }
  };
  updateData();
  }
}

export const fetchDeleteCategories=(id)=>{
  return (dispatch)=>{
    const deleteData = async () => {
      try {
        await axios.delete("/"+id)
        .then(categories => {
            dispatch(DeleteCategory(categories.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(DeleteCategory(false))
      }
  };
  deleteData();
  }
}

export const GetAllCategory = (categories) => {
  return {
    type: 'GET_ALL_CATEGORY',
    payload:categories
  };
};

export const SearchCategory = (categories) => {
  return {
    type: 'SEARCH_CATEGORY',
    payload:categories
  };
};

export const GetCategoryByID =(mes)=>{
  return {
    type: 'GET_CATEGORY_BY_ID',
    payload:mes
  };
}
export const CreatNewCategory = (mes) => {
    return {
      type: 'CREATE_NEW_CATEGORY',
      payload:mes
    };
};

export const UpdateCategory = (mes) => {
  return {
      type: 'UPDATE_CATEGORY',
      payload: mes,
  };
};

export const DeleteCategory = (mes) => {
  return {
      type: 'DELETE_CATEGORY',
      payload: mes,
  };
};