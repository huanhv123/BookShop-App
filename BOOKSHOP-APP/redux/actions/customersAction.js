import axios from "axios";
import {ip} from '../../views/Main'
export const fetchCustomers=()=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("");
          const customers=await response.json();
        
          dispatch(GetCustomer(customers))
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}

export const fetchGetCustomerById=(id)=>{
  return (dispatch)=>{
    const getData = async () => {
      try {
          const response=await fetch("http://"+ip+":3000/customer/getCustomer/"+id);
          const customer=await response.json();
          // console.log(customer)
          // console.log(customer)
          // console.log(id)
          dispatch(GetCustomerById(customer))
          // console.log('esfaf')
      } catch (err) {
          console.error(err);
      }
  };
  getData();
  }
}


export const fetchCreateCustomers=(customers)=>{
  return (dispatch)=>{
    const newData = async () => {
      try {
        await axios.post("", customers)
        .then(customers => {
          console.log(customers.data)
            dispatch(CreatNewCustomer(customers.data))
        });
      } catch (err) {
          console.error(err);
          dispatch(CreatNewCustomer(false))
      }
  };
  newData();
  }
}

export const fetchUpdateCustomers=(customer)=>{
  return (dispatch)=>{
    const updateData = async () => {
      try {
        await axios.put("http://"+ip+":3000/customer/"+customer.id, customer)
        .then(customers => {
            // dispatch(UpdateCustomer(customers.data))
            console.log(customers.data)
        });
      } catch (err) {
          console.error(err);
          dispatch(UpdateCustomer(false))
      }
  };
  updateData();
  }
}




export const GetCustomer = (customers) => {
    return {
      type: 'GET_ALL_CUSTOMER',
      payload:customers
    };
  };
  
export const GetCustomerById = (customers) => {
    return {
      type: 'GET_CUSTOMER_BY_ID',
      payload:customers
    };
};
  
  export const CreatNewCustomer = (mes) => {
      return {
        type: 'CREATE_NEW_CUSTOMER',
        payload:mes
      };
  };
  
  export const UpdateCustomer = (mes) => {
    return {
        type: 'UPDATE_CUSTOMER',
        payload: mes,
    };
  };
  
 