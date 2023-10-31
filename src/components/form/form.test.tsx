import { render, screen, fireEvent } from '@testing-library/react';
import { UserForm } from './form';

describe('UserForm Component', () => {
  describe('when submitting the form with valid data', () => {
    beforeEach(() => {
      render(<UserForm></UserForm>);
    });

    test('should call handleSubmit when the submit button is clicked', () => {
      const nameInput = screen.getByLabelText('Name: ') as HTMLInputElement;
      const submitButton = screen.getByText('Enviar');
      fireEvent.change(nameInput, { target: { value: 'asdasd' } });
      fireEvent.click(submitButton);
    });
  });
});
