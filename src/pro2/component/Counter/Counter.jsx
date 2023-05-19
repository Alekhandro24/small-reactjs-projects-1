// import { useReducer } from "react";

// function init(initialCount) {
//   return { count: initialCount };
// }

// function reducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return init(action.payload);
//     default:
//       throw new Error();
//   }
// }

// function Counter({ initialCount }) {
//   const [state, dispatch] = useReducer(reducer, 0, init);
//   return (
//     <>
//       Лічильник: {state.count}
//       <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
//         Скинути
//       </button>
//       <button onClick={() => dispatch({ type: "decrement" })}>-</button>
//       <button onClick={() => dispatch({ type: "increment" })}>+</button>
//     </>
//   );
// }
// import { useState, useEffect, useRef } from "react";

// function Counter() {
//   const [inputValue, setInputValue] = useState("");
//   const count = useRef(0);

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h1>Render Count: {count.current}</h1>
//     </>
//   );
// }
// import { useRef } from "react";

// function Counter() {
//   const inputElement = useRef();

//   const focusInput = () => {
//     inputElement.current.focus();
//   };

//   return (
//     <>
//       <input type="text" ref={inputElement} />
//       <button onClick={focusInput}>Focus Input</button>
//     </>
//   );
// }
import { useState } from "react";
import { Container } from "./Counter.styled";

function Counter({ someProp }) {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);

  const filteredPlanets = planets.filter((planet) => planet.includes(query));

  return (
    <Container>
      <div>Some prop: {someProp}</div>
      <button onClick={() => setClicks(clicks + 1)}>
        Number of clicks: {clicks}
      </button>
      <div>
        {filteredPlanets.map((planet) => (
          <div key={planet}>{planet}</div>
        ))}
      </div>
    </Container>
  );
}

export default Counter;
