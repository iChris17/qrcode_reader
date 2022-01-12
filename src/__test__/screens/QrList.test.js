import React from "react";
import { shallow } from "enzyme";
import ProviderMock from "../__mocks__/ProviderMock";
import QrList from "../../screens/QrList";

describe("<QRList />", () => {
  test("QRList component rendering ", () => {
    const qrlist = shallow(
      <ProviderMock>
        <QrList />
      </ProviderMock>
    );
    expect(qrlist.length).toEqual(1);
  });
});
