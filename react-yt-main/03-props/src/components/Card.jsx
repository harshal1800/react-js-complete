// import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.img} alt="" />
            <h1>{props.user},{props.age}</h1>
            <h3>{props.role}</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View Profile</button>
        </div>
    )
}

export default Card














// ### What are Props in React?

// **Props** (short for **Properties**) are used to **pass data from a parent component to a child component**.

// Think of props as function parameters.

// ### Example

// #### Child Component

// ```jsx
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// ```

// #### Parent Component

// ```jsx
// function App() {
//   return (
//     <div>
//       <Welcome name="Harshal" />
//       <Welcome name="Rahul" />
//     </div>
//   );
// }
// ```

// ### Output

// ```html
// Hello, Harshal
// Hello, Rahul
// ```

// The parent component passes data using:

// ```jsx
// name="Harshal"
// ```

// and the child receives it through:

// ```jsx
// props.name
// ```

// ---

// ### Destructuring Props (Common Practice)

// Instead of:

// ```jsx
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
// ```

// Use:

// ```jsx
// function Welcome({ name }) {
//   return <h1>Hello, {name}</h1>;
// }
// ```

// This is cleaner and widely used in React projects.

// ---

// ### Passing Multiple Props

// ```jsx
// function Employee({ name, role }) {
//   return (
//     <div>
//       <h2>{name}</h2>
//       <p>{role}</p>
//     </div>
//   );
// }
// ```

// ```jsx
// <Employee
//   name="Harshal"
//   role=".NET Developer"
// />
// ```

// ---

// ### Props are Read-Only

// ❌ Don't do this:

// ```jsx
// props.name = "John";
// ```

// React props cannot be modified by the child component.

// A child can **read** props, but only the parent should change the data.

// ---

// ### Real Project Example

// ```jsx
// <ProductCard
//   productName="Laptop"
//   price={50000}
//   stock={10}
// />
// ```

// Inside the component:

// ```jsx
// function ProductCard({ productName, price, stock }) {
//   return (
//     <div>
//       <h3>{productName}</h3>
//       <p>₹{price}</p>
//       <p>Stock: {stock}</p>
//     </div>
//   );
// }
// ```

// ---

// ### Interview Answer

// > Props (Properties) are used to pass data from a parent component to a child component in React. They are read-only and help make components reusable and dynamic. A component receives props as an object and uses them to display or process data.

// ### Flow to Remember

// ```text
// Parent Component
//        │
//        ▼
//       Props
//        │
//        ▼
// Child Component
// ```

// The next React topic after Props is **State**, which is one of the most important concepts in React.

