import axios from "axios";
  


export const fetchCreateCarts=(cart)=>{
  return (dispatch)=>{
    const newData = async () => {
      try {
        await axios.post("", cart)
        .then(cart => {
          console.log(cart.data)
            dispatch(CreatNewBook(cart.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(CreatNewBook(false))
      }
  };
  newData();
  }
}



export const fetchDeleteCarts=(id)=>{
  return (dispatch)=>{
    const deleteData = async () => {
      try {
        await axios.delete(""+id)
        .then(cart => {
            dispatch(DeleteCart(cart.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(DeleteCart(false))
      }
  };
  deleteData();
  }
}




export const CreatNewCart = (mes) => {
    return {
      type: 'CREATE_NEW_CART',
      payload:mes
    };
};



export const DeleteCart = (mes) => {
  return {
      type: 'DELETE_CART',
      payload: mes,
  };
};