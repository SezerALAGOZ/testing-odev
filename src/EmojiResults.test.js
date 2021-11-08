import React from "react";
import EmojiResults from './EmojiResults';
import {render, screen} from '@testing-library/react';

describe('Tests for Emoji Results', () => {
  
  let div;

  beforeEach(() => {
    div = document.createElement("div");
    div.setAttribute('data-testid', 'test-div-for-emoji-results');
  });

  test("Renders without crashing", () => {
    render(<EmojiResults />, div);
  });

  test("Number loaded emojis should be equal to 20", () => {
    render(<EmojiResults />, div);
    const emojiListElement = screen.getByTestId('test-div-for-emoji-results');
    const nodeNumber = emojiListElement.childNodes.length;
    expect(nodeNumber).toEqual(20); 
  });

});




