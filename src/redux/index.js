import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//actions
export const storeNewQrData = ({ stringDecoded }) => {
  return (dispatch) => {
    dispatch({ type: "SAVE_QRDATA", payload: stringDecoded });
  };
};

//reducers
const initialState = {
  QRData: [],
};

const qrReducer = (state = initialState, action) => {
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
