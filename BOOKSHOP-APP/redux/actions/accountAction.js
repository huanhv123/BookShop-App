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

export const fetchLoginAccount = (account) => {
  return (dispatch) => {
    const getData = async () => {
      try {
        await axios.post("http://"+ip+":3000/account/login", account)
        .then(account => {
          console.log(account.data)
            dispatch(LoginAccount(account.data))
        });
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
        await axios.post("http://"+ip+":3000/account/createAccount", account)
        .then(account => {
          // console.log(account.data)
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

export const LogOut = () => {
  console.log("addd")
  return {
    type: 'LOG_OUT',
    payload:""
  };
};

export const LoginAccount = (account) => {
  return {
    type: 'LOGIN_ACCOUNT',
    payload:account
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

