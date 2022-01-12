import { actions } from "../../redux/index";

const QRDataMock = "www.example.com";

describe("Actions", () => {
  test("saveQrData Action", () => {
    const payload = QRDataMock;
    const expected = {
      type: "SAVE_QRDATA",
      payload,
    };
    expect(actions.saveQrData(payload)).toEqual(expected);
  });
});
