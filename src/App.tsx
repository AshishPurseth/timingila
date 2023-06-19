import { useRef } from "react";
import "./App.css";

function App() {
  const name = useRef(null);
  const age = useRef(null);

  function onSubmit() {
    const data: object = {
      name: name.current?.value,
      age: age.current?.value,
    };
  }

  const obj1 = {
      ac:2,
      anotherObj:{
        anotherAnotherObj:{
          aa:2,
          a:5
        }
      }
  }

  const obj2 = {
      ...obj1,
      anotherObj:{
        ...obj1.anotherObj,
        anotherAnotherObj:{
          ...obj1.anotherObj.anotherAnotherObj,
          a:6
        }
      }
  }


  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                ref={name}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                name="age"
                ref={age}
                className="form-control"
              />
            </div>
            <button className="btn btn-success" onClick={onSubmit}>
              SUBMIT
            </button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
}

export default App;
