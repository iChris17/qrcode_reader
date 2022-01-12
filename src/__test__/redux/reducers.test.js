import { qrReducer } from "../../redux/index";
import { describe, test, expect } from "@jest/globals";

const QRDataMock = "www.example.com";

describe("Reducers", () => {
  test("Return Initial State", () => {
    expect(qrReducer({}, "")).toEqual({});
  });
  test("SAVE_QRDATA", () => {
    const initialState = {
      QRData: [],
    };
    const payload = QRDataMock;
    const action = {
      type: "SAVE_QRDATA",
      payload,
    };
    const expected = {
      QRData: [QRDataMock],
    };
    expect(qrReducer(initialState, action)).toEqual(expected);
  });
});
