// import { useState } from 'react';
import React from 'react';
import './App.css';
import fav from "./logo.svg";
function App() {
  // const [date, setDate] = useState();
  // function test() {
  //   setDate(new Date().toLocaleTimeString());
  // }
  // setInterval(test, 1000)

  //*--------------------------------

  // const students = [
  //   { name: "Ivan", surname: "Pupkin", phone: "0987777777" },
  //   { name: "Ivan2", surname: "Pupkin2", phone: "0987777777" },
  //   { name: "Ivan3", surname: "Pupkin3", phone: "0987777777" },
  //   { name: "Ivan4", surname: "Pupkin4", phone: "0987777777" },
  //   { name: "Ivan5", surname: "Pupkin5", phone: "0987777777" },
  //   { name: "Ivan6", surname: "Pupkin6", phone: "0987777777" }
  // ]

  //*--------------------------------

  // let x = 0;

  //*--------------------------------

  // const h1 = <h1>hello</h1>;

  //*--------------------------------

  // const string = "Hello";
  // const string2 = "<h2>Hello</h2>";

  //*--------------------------------
  // const element = React.createElement("h1",
  //   {
  //     "id": 123,
  //     "style": {
  //       color: "blue",
  //       fontStyle: "italic"
  //     }
  //   },
  //   "some text");

  //*--------------------------------
  // const p = React.createElement("p", {}, "some p text");
  // const block = React.createElement("div", {}, p);
  //*--------------------------------

  // Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису
  //   JSX.Повторити дану сторінку, використовуючи метод createElement.
  const h2 = React.createElement("h2", {}, "React Icon");
  const p = React.createElement("p", {}, "Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису JSX", React.createElement("br", {}), "Повторити дану сторінку, використовуючи метод createElement.");
  const img = React.createElement("img", {
    "alt": "react icon",
    "src": fav
  });
  const hw = React.createElement("div", {
    "style": {
      background: "#c8ffb0ff",
    }
  },
    [h2, p, img]
  );
  return (
    <div>
      <div>
        {/*------------------------------------------------*/}

        {/* <button onClick={test}>click</button>
      {date} */}

        {/*------------------------------------------------*/}

        {/* <ul>
        {students.map((element, index) => <li key={index}>{element.name} {element.surname} {element.phone}</li>)}
      </ul> */}

        {/*------------------------------------------------*/}

        {/* {x === 0 && <h2>hello</h2>} */}

        {/*------------------------------------------------*/}

        {/* {h1} */}

        {/*------------------------------------------------*/}

        {/* <form>
        <label htmlFor="name"></label>
        <input id='name'></input>
      </form> */}

        {/*------------------------------------------------*/}

        {/* <ul>
        <li>{string}</li>
        <li dangerouslySetInnerHTML={{ __html: string2 }}></li>
      </ul> */}

        {/*------------------------------------------------*/}

        {/* {element} */}
        {/* {block} */}
        {/* {p} */}

        {/* HW */}
      </div>
      <div>
        <h2>React Icon</h2>
        <p>   Розробити сторінку з заголовком, параграфом тексту та зображенням за допомогою синтаксису
          JSX. <br />Повторити дану сторінку, використовуючи метод createElement. </p>
        <img src={fav} alt="react icon2" />
      </div>
      {hw}
    </div >
  );
}

export default App;
