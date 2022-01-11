import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//reducer
const initialState = {
  QRData: [],
};

export const qrReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_QRDATA":
      return {
        ...state,
        QRData: [...state.QRData, action.payload],
      };

    default:
      return state;
  }
};

//store
export const store = createStore(qrReducer, applyMiddleware(thunk));
