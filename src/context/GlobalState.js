import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  address: null,
  connect: false,
  connectBank: false,
  user: "",
  web3: null,
  refresh: false,
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const updateWeb3 = (_web3) => {
    dispatch({ type: "UPDATE_WEB3", payload: _web3 });
  };

  const updateConnect = (_connect) => {
    dispatch({ type: "UPDATE_CONNECT", payload: _connect });
  };

  const updateConnectBank = (_connectBank) => {
    dispatch({ type: "UPDATE_CONNECT_BANK", payload: _connectBank });
  };

  const updateUser = (_user) => {
    dispatch({ type: "UPDATE_USER", payload: _user})
  }
  
  const updateAddress = (_address) => {
    dispatch({ type: "UPDATE_ADDRESS", payload: _address });
  };

  const updateRefresh = (_refresh) => {
    dispatch({ type: "UPDATE_REFRESH", refresh: _refresh})
  }


  return (
    <GlobalContext.Provider
      value={{
        address: state.address,
        connect: state.connect,
        connectBank: state.connectBank,
        web3: state.web3,
        user: state.user,
        refresh: state.refresh,
        updateWeb3,
        updateConnect,
        updateUser,
        updateConnectBank,
        updateAddress,
        updateRefresh,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};