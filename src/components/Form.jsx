import React, { useState } from "react";
import Error from "./Error";

const Form = ({ search, setSearch, setConsult }) => {
  const [error, setError] = useState(false);

  //destructuring data
  const { city, country } = search;

  //retriving data from user selection
  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  //On Submit data
  const handleSubmit = (e) => {
    e.preventDefault();

    //validating form is not empty
    if (city.trim() === "" || country.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    //Sending to consult validated state
    setConsult(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="You must fill all fields." /> : null}

      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">City: </label>
      </div>

      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Select a Country --</option>
          <option value="US">United States</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">Spain</option>
          <option value="PE">Peru</option>
        </select>
        <label htmlFor="country">Country: </label>

        <div className="input-field col s12">
          <input
            type="submit"
            value="Search Weather"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
