import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import Car from './Car';
import { useState, useEffect, useContext, useRef, useReducer, useCallback, useMemo  } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import Layout from "./pages/Layout";
import useFetch from './useFetch';


//npx create-react-app my-react-app
//npm i -D react-router-dom@latest

//Routing
  export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  } 

//Variables
var x = 5.6;
let y = 5.6;
const z = 5.6;

//Export variables
export const name = "Jesse";
export const age = 21;

const name2 = "Johnny";
const age2 = 20;

//Mapping
const myArray = ["Alma", "Banán", "Laci"];
const myList = myArray.map((item) => <p>{item}</p>);

//Destructing
const vehicles = ['mustang', 'f-150', 'expedition'];
const movingObjects = ['mustang', 'f-150', 'expedition'];

// const car = vehicles[0];
// const truck = vehicles[1];
// const suv = vehicles[2];

const [car, truck, suv] = vehicles;
const [cars,, suvs] = movingObjects;

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red'
}

myVehicle(vehicleOne);

// function myVehicle(vehicle) {
//   const message = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.';
// }

function myVehicle({model, brand, color, type}) {
  const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
}

const vehicleTwo = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleTwo)

function myVehicle2({ model, registration: { country } }) {
  const message = 'My ' + model + ' is registered in ' + country + '.';
}


//Spread Operator
const numbers1 = [1,2,3];
const numbers2 = [4,5,6];
const allNumbers = [...numbers1, ...numbers2];
document.write(allNumbers);


const numbers = [1,2,3,4,5,6];
const [one, two, ...rest] = numbers;
document.write(one, two, rest);

const myVehicles = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicles = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicles = {...myVehicles, ...updateMyVehicles}

//Ternary operator
  // if (authenticated) {
  //     renderApp()
  // } else {
  //   renderLogin();
  // }

  // authenticated ? renderApp() : renderLogin();


//Classes
class Car2 {
  constructor (name) {
    this.brand = name;
  }

  present() {
    return "I have a " + this.brand;
  }
}

class Model extends Car2 {
  constructor (name, mod) {
    super(name);
    this.model = mod;
  }

  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

const myFirstElement = <h1>Hello React!</h1>
const myCar = new Model("Opel", "Astra");
myCar.show();

//Arrow methods
  // hello = function() {
  //   return "Hello World!";
  // }

  // hello2 = () => {
  //   return "Hello World!";
  // }

  // hello3 = () => "Hello World!";

  // hello4 = (val) => "Hello " + val;

  // hello5 = val => "Hello " + val;

//JSX
  const myelement = (
    <table>
      <tr>
        <th>Name</th>
      </tr>
      <tr>
        <td>John</td>
      </tr>
      <tr>
        <td>Elsa</td>
      </tr>
    </table>
  );
 
const myelement2 = <h1>I like JSX!</h1> 
const myelement3 = React.createElement('h1', {}, 'I do not use JSX!');
const myelement4 = <h1>React is {5 + 5} times better with JSX</h1>
const myelement5 = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);
const myelement6 = (
    <div>
      <p>I am a paragraph.</p>
      <p>I am a paragraph too.</p>
    </div>//,
    // <>
    //   <h1>I am not a paragraph.</h1>
    //   <h2>I am not a paragraph either.</h2>
    // </>
);
const myelement7 = <input type="text" />;
const myelement8 = <h1 className="myclass">Hello World</h1>;

const xx = 5;
let text = "Goodbye!";
if (xx < 10) {
  text = "Hello!";
}
const myelement9 = <h1>{text}</h1>;

const xxx = 5;
const myelement10 = <h1>{(xxx) < 10 ? "Hello" : "Goodbye"}</h1>

//Components
class Cars extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}

function Cars2() {
  return <h2>Hi, I am a Car!</h2>;
}

//Props
function Cars3(props) {
  return <h2>Hi, I am a {props.color} Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Cars3 />
    </>
  );
}

//Function jobb mint class

//Props
const vehicle = <Car brand="Opel"/>
function Cars4(props) {
  return <h2>Hi! I am an {props.brand}!</h2>
}

function Garage2() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Cars4 brand="Opel" />
    </>
  );
}

function Garage3() {
  const carName ="Opel Astra";
  return (   
    <>
      <h1>Who lives in my garage?</h1>
      <Cars4 brand={carName} />
    </>
  );
}

function Cars5(props) {
  return <h2>Hi! I am a {props.brand.name} {props.brand.model}!</h2>
}
function Garage4() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (   
    <>
      <h1>Who lives in my garage?</h1>
      <Cars5 brand={ carInfo } />
    </>
  );
}


//Events
function Football() {
  const shoot = () => {
    alert("Great Shot!");
  }

  return (
    <button onClick={shoot}>Take the shot!</button>
  );
}

function Football2() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}

function Football3() {
  const shoot = (a, b) => {
    alert(b.type);
    /*
    'b' represents the React event that triggered the function,
    in this case the 'click' event
    */
  }

  return (
    <button onClick={(event) => shoot("Goal!", event)}>Take the shot!</button>
  );
}


//Conditionals
function MissedGoal() {
  return <h1 style={{backgroundColor: "blue"}}>MISSED!</h1>
}

function MadeGoal() {
  return <h1 style={{backgroundColor: "red"}}>GOAL!</h1>
}

function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    <MadeGoal />
  } else {
    <MissedGoal />
  }
}

function Garage5(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>
          You have {cars.length} cars in your garage.
        </h2>
      }
    </>
  );
}

const cars2 = [];

function Goal2(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal/> : <MissedGoal/> }
    </>
  );
}

//Lists
function Car3(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage6() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car3 brand={car} />)}
      </ul>
    </>
  );
}

function Garage7() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car3 key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}

//Forms
function MyForm() {
  return (
    <form>
      <label>Enter your name:
        <input type="text" />
      </label>
    </form>
  )
}

function MyForm2() {
  const [name, setname] = useState("");
  return (
    <form>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
    </form>
  )
}

function MyForm3() {
  const [name, setname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
      </label>
      <input type='submit'/>
    </form>
  )
}

function MyForm4() {
  const [input, setInput] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInput(values => ({...values, [name]: value}))
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={input.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={input.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}

function MyForm5() {
  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <form>
      <textarea value={textarea} onChange={handleChange} />
    </form>
  )
}

function MyForm6() {
  const [myCar, setMyCar] = useState("Volvo");

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <form>
      <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}

//JS Styling
const Header = () => {
  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Sans-Serif"
  };
  return (
    <>
      <h1 style={myStyle}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}


//Hooks
  //useState
    function FavoriteColor() {
      const [color, setColor] = useState("red");

        return (
          <>
          <h1>My favorite color is {color}!</h1> 
          <button type="button" onClick={() => setColor("blue")} >Blue</button>
          </>
        )  
    }

    function Car4() {
      const [brand, setBrand] = useState("Ford");
      const [model, setModel] = useState("Mustang");
      const [year, setYear] = useState("1964");
      const [color, setColor] = useState("red");

      return (
        <>
          <h1>My {brand}</h1>
          <p>
            It is a {color} {model} from {year}.
          </p>
        </>
      )
    }

    function Car5() {
      const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    
      return (
        <>
          <h1 onMouseLeave={() => {setCar(previousState => {return {...previousState, brand: "Opel"}})}}>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
        </>
      )
    }

    function Car6() {
      const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
      });
    
      const updateColor = () => {
        setCar(previousState => {return {...previousState, color: "blue"}})
      }
    
      return (
        <>
          <h1>My {car.brand}</h1>
          <p>
            It is a {car.color} {car.model} from {car.year}.
          </p>
          <button
            type="button"
            onClick={updateColor}
          >Blue</button>
        </>
      )
    }
  //useEffect
    function Timer() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {setTimeout(() => {setCount((count) => count + 1);}, 1000)}, []);
      // useEffect(() => {});
      // useEffect(() => {}, []);
      // useEffect(() => {}, [prop, state]);
    
      return <h1>I've rendered {count} times!</h1>;
    }

    function Counter() {
      const [count, setCount] = useState(0);
      const [calculation, setCalculation] = useState(0);
    
      useEffect(() => {setCalculation(() => count + (count + 1))}, [count]);
    
      return (
        <>
          <p>Count: {count}</p>
          <button onClick={() => setCount((c) => c + 1)}>+</button>
          <p>Calculation: {calculation}</p>
        </>
      );
    }
    
    function Timer2() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {let timer = setTimeout(() => {setCount((count) => count + 1);}, 1000); return () => clearTimeout(timer)}, []);
    
      return <h1>I've rendered {count} times!</h1>;
    }
  //useContext
    const UserContext = createContext();

    function Component1() {
      const [user, setUser] = useState("Jesse Hall");

      return (
        <UserContext.Provider value={user}>
          <h1>{`Hello ${user}!`}</h1>
          <Component2 />
        </UserContext.Provider>
      );
    }

    function Component2() {
      return (
        <>
          <h1>Component 2</h1>
          <Component3 />
        </>
      );
    }

    function Component3() {
      return (
        <>
          <h1>Component 3</h1>
          <Component4 />
        </>
      );
    }

    function Component4() {
      return (
        <>
          <h1>Component 4</h1>
          <Component5 />
        </>
      );
    }

    function Component5() {
      const user = useContext(UserContext);

      return (
        <>
          <h1>Component 5</h1>
          <h2>{`Hello ${user} again!`}</h2>
        </>
      );
    }
  
  //useRef
    function App2() {
      const [inputValue, setInputValue] = useState("");
      const count = useRef(0);
    
      useEffect(() => {
        count.current = count.current + 1;
      });
    
      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h1>Render Count: {count.current}</h1>
        </>
      );
    }

    function App3() {
      const inputElement = useRef();
    
      const focusInput = () => {
        inputElement.current.focus();
      };
    
      return (
        <>
          <input type="text" ref={inputElement} />
          <button onClick={focusInput}>Focus Input</button>
        </>
      );
    }

    function App4() {
      const [inputValue, setInputValue] = useState("");
      const previousInputValue = useRef("");
    
      useEffect(() => {previousInputValue.current = inputValue;}, [inputValue]);
    
      return (
        <>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <h2>Current Value: {inputValue}</h2>
          <h2>Previous Value: {previousInputValue.current}</h2>
        </>
      );
    }
  
    
  //useReducer
  
    const initialTodos = [
      {
        id: 1,
        title: "Todo 1",
        complete: false,
      },
      {
        id: 2,
        title: "Todo 2",
        complete: false,
      },
    ];
    
    const reducer = (state, action) => {
      switch (action.type) {
        case "COMPLETE":
          return state.map((todo) => {
            if (todo.id === action.id) {
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;}});
        default:
          return state;
      }
    };
    
    function Todos() {
      const [todos, dispatch] = useReducer(reducer, initialTodos);
    
      const handleComplete = (todo) => {
        dispatch({ type: "COMPLETE", id: todo.id });
      };
    
      return (
        <>
          {todos.map((todo) => (
            <div key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />
                {todo.title}
              </label>
            </div>
          ))}
        </>
      );
    }
    


  
  //useCallback  
    const App5 = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
    
      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
      }, [todos]);
    
      return (
        <>
          <Todos todos={todos} addTodo={addTodo} />
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
          </div>
        </>
      );
    };
  


  
  //useMemo
    const App6 = () => {
      const [count, setCount] = useState(0);
      const [todos, setTodos] = useState([]);
      const calculation = useMemo(() => expensiveCalculation(count), [count]);

      const increment = () => {
        setCount((c) => c + 1);
      };
      const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
      };

      return (
        <div>
          <div>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
              return <p key={index}>{todo}</p>;
            })}
            <button onClick={addTodo}>Add Todo</button>
          </div>
          <hr />
          <div>
            Count: {count}
            <button onClick={increment}>+</button>
            <h2>Expensive Calculation</h2>
            {calculation}
          </div>
        </div>
      );
    };

    const expensiveCalculation = (num) => {
      console.log("Calculating...");
      for (let i = 0; i < 1000000000; i++) {
        num += 1;
      }
      return num;
  };
  

  //Custom Hooks
    const Home2 = () => {
      const [data, setData] = useState(null);
    
      useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")
          .then((res) => res.json())
          .then((data) => setData(data));
    }, []);
    
      return (
        <>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </>
      );
    };

    const Home3 = () => {
      const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    
      return (
        <>
          {data &&
            data.map((item) => {
              return <p key={item.id}>{item.title}</p>;
            })}
        </>
      );
    };
    
  
  
  


export {name2, age2};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Home3 />);  

