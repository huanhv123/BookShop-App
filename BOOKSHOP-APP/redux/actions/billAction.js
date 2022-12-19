import axios from "axios";
import {ip} from '../../views/Main'
export const fetchAllBills=()=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("http://"+ip+":3000/bill/getAllBills");
          const bills=await response.json();
          // console.log(books)
          dispatch(GetAllBill(bills))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchSearchBill=(key)=>{
  console.log(key)
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("http://"+ip+":3000/bill/search"+key);
          const bills=await response.json();
          // console.log(books)
          dispatch(SearchBill(bills))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchCreateBills=(bill)=>{
  return (dispatch)=>{
    const newData = async () => {
      try {
        await axios.post("http://"+ip+":3000/bill/CreateBill", bill)
        .then(bill => {
          console.log(bill.data)
            // dispatch(CreatNewBill(bill.mse))
        });
      } catch (err) {
          console.error(err);
          dispatch(CreatNewBill(false))
      }
  };
  newData();
  }
}

export const fetchUpdateBills=(bill)=>{
  return (dispatch)=>{
    const updateData = async () => {
      try {
        await axios.put(""+bill.id, bill)
        .then(bill => {
            dispatch(UpdateBook(bill.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(UpdateBill(false))
      }
  };
  updateData();
  }
}

export const GetAllBill = (bills) => {
  return {
    type: 'GET_ALL_BILL',
    payload:bills
  };
};
export const GetBill = (bills) => {
    return {
      type: 'GET_BILL',
      payload:bills
    };
  };

export const SearchBill = (bills) => {
  return {
    type: 'SEARCH_BILL',
    payload:bills
  };
};

export const CreatNewBill = (mes) => {
    return {
      type: 'CREATE_NEW_BILL',
      payload:mes
    };
};

export const UpdateBill = (mes) => {
  return {
      type: 'UPDATE_BILL',
      payload: mes,
  };
};
