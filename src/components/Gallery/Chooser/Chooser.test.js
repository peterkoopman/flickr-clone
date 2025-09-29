import { getOptions } from "./Chooser";
import React from "react";

const photosetMock = jest.fn(() => {
  return {
    id: "72177720309296283",
    title: {
      _content: "2024 Photos",
    },
  };
});

test("getOptions returns a component", () => {
  expect(getOptions(photosetMock)).toBeInstanceOf(React.FC);
});
