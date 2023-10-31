import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Given Footer component', () => {
  describe('When we instantiate', () => {
    render(<Header></Header>);

    test('It should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
