import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Error from "./components/Error";

const App = () => {
  const [search, setSearch] = useState({
    city: "",
    country: "",
  });

  const [consult, setConsult] = useState(false);
  const [result, setresult] = useState({});
  const [error, setError] = useState(false);

  //destructuring search object
  const { city, country } = search;

  useEffect(() => {
    const consultApi = async () => {
      if (consult) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=96efd8b2e4918988106101595296575e`;
        const resp = await fetch(url);
        const res = await resp.json();

        setresult(res);
        setConsult(false);
        //if the code result in error
        if (res.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };
    consultApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consult]);

  let component;
  if (error) {
    component = <Error message="City not Found" />;
  } else {
    component = <Weather result={result} />;
  }

  return (
    <Fragment>
      <Header title={"Weather App on React"} />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
                result={result}
              />
            </div>
            <div className="col m6 s12">{component}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
