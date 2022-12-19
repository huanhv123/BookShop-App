import axios from "axios";
import {ip} from '../../views/Main'
export const fetchAllAccounts=()=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("");
          const accounts=await response.json();
          
          dispatch(GetAccount(accounts))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchCreateAccounts=(account)=>{
  return (dispatch)=>{
    const newData = async () => {
      try {
        await axios.post("", account)
        .then(account => {
          console.log(account.data)
            dispatch(CreatNewAccount(account.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(CreatNewAccount(false))
      }
  };
  newData();
  }
}

export const fetchUpdateAccounts=(account)=>{
  return (dispatch)=>{
    const updateData = async () => {
      try {
        await axios.put(""+account.id, account)
        .then(account => {
            dispatch(UpdateAccount(account.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(UpdateAccount(false))
      }
  };
  updateData();
  }
}



export const GetAccount = (accounts) => {
  return {
    type: 'GET_ACCOUNT',
    payload:accounts
  };
};



export const CreatNewAccount = (mes) => {
    return {
      type: 'CREATE_NEW_ACCOUNT',
      payload:mes
    };
};

export const UpdateAccount = (mes) => {
  return {
      type: 'UPDATE_ACCOUNT',
      payload: mes,
  };
};

