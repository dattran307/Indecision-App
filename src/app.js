import React from "react";
import ReactDOM from "react-dom";

import IndecisionApp from "./components/IndecisionApp";
import "../node_modules/normalize.css/normalize.css";
import "./styles/styles.scss";

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));

//import "./utils";
//import subtract, { square, add } from "./utils";

// console.log("app.js is running");
// console.log(square(4));
// console.log(add(135, 100));
// console.log(subtract(100, 25));

// import isSenior, { isAdult, canDrink } from "./person";

// console.log(isAdult(21));
// console.log(canDrink(20));
// console.log(isSenior(64));

// install -> import -> use

// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

// yarn run build-babel
// yarn run serve

//stateless functional component

// IndecisionApp.defaultProps = {
//   options: [],
// };

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

// class Action extends React.Component {
//   // handlePick() {
//   //   alert("HandlePick");
//   // }
//   render() {
//     return (
//       <div>
//         <button
//           onClick={this.props.handlePick}
//           disabled={!this.props.hasOptions}
//         >
//           What should I do?
//         </button>
//       </div>
//     );
//   }
// }

// class Options extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   // }
//   // handleRemoveAll() {
//   //   alert("Remove");
//   // }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>

//         {this.props.options.map((option) => {
//           return (
//             <Option key={option} optionText={option}>
//               {option}
//             </Option>
//           );
//         })}
//       </div>
//     );
//   }
// }

// class Option extends React.Component {
//   render() {
//     return <div> Option: {this.props.optionText}</div>;
//   }
// }

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name} </p>
//       <p>Age: </p>
//     </div>
//   );
// };
