import { render, screen } from '@testing-library/react';
import Header from './Header';


describe('Tests for Header', () => {
    beforeEach(() => {
        render(<Header />);
    });

    test("App should render the header", () => {
        const headerText = screen.getByText('Emoji Search');
        expect(headerText).toBeInTheDocument();
    });

    test("Images should be in the document", () => {
        const imageList = screen.getAllByAltText("");
        expect(imageList.length).toEqual(2);
    });
})




