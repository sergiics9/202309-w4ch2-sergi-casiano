import './form.scss';
import { SyntheticEvent, useState } from 'react';
import { UserData } from '../../model/userdata';

export function UserForm() {
  const initialState: UserData = {
    name: '',
    lastname: '',
    birthdate: '',
    gender: null,
    email: '',
    newsletter: false,
  };

  const [userState, setUserState] = useState(initialState);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    console.log(userState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setUserState({ ...userState, [name]: value });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <fieldset>
        <legend>User data</legend>
        <div className="form-control">
          <label htmlFor="user-name">Name: </label>
          <input
            type="text"
            name="name"
            id="user-name"
            onChange={handleChange}
            placeholder=" Insert your name"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="user-surname">Last Name: </label>
          <input
            type="text"
            name="lastname"
            id="user-surname"
            onChange={handleChange}
            placeholder=" Insert your last name"
            required
          />
        </div>
      </fieldset>
      <div className="form-control">
        <label htmlFor="comments">Birthdate </label>
        <input
          type="date"
          name="birthdate"
          id="comments"
          onChange={handleChange}
        ></input>
      </div>
      <div className="form-control">
        <fieldset onChange={handleChange}>
          <legend>Select your gender</legend>
          <label>
            <input type="radio" name="gender" value="M" required />
            Male
          </label>
          <input type="radio" name="gender" id="turn-2" value="F" />
          <label htmlFor="turn-2">Female</label>
          <input type="radio" name="gender" id="turn-3" value="O" />
          <label htmlFor="turn-3">Other</label>
          <input type="radio" name="gender" id="turn-4" value="P" />
          <label htmlFor="turn-4">Prefer not to mention</label>
        </fieldset>
      </div>

      <div className="form-control">
        <label htmlFor="email">Email </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-control">
        <input
          type="checkbox"
          name="newsletter"
          id="newsletter"
          onChange={handleChange}
          required
        />
        <label htmlFor="newsletter">
          Would you like to recive our newsletter?
        </label>
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
}
