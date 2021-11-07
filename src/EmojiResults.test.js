import React from "react";
import ReactDOM from "react-dom";
import EmojiResults from './EmojiResults';

test("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<EmojiResults />, div);
});
