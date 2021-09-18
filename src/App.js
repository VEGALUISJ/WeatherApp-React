import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";

const App = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  return (
    <Fragment>
      <Header title={"Weather App on React"} />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form select={search} setSelect={setSearch} />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
