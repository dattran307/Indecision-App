// babel src/app.js --out-file=public/scripts/app.js --presets=env,react

console.log("App.js is running");

// if statements
// ternary operators
// logical and operator

const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer",
  options: [],
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

// JSX - JavaScript XML

// const user = {
//   name: "Robert",
//   age: 32,
//   location: "Germany",
// };

// const getLocation = (location) => {
//   if (location) {
//     return <p> Location: {location}</p>;
//   }
// };

// const template2 = (
//   <div>
//     <h1>{user.name ? user.name : "Anonymous"}</h1>
//     {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

const onRemoveAll = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById("app");

//const numbers = [65, 101, 1000];

const render = () => {
  const template = (
    <div>
      <h1>{app.title} </h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No option"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>

      <button onClick={onRemoveAll}>Remove All</button>
      {
        //       numbers.map((number) => {
        //     return <p key={number}>Number: {number}</p>;
        //   })
      }

      <ol>
        {app.options.map((option) => {
          return <li key={option}> {option}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

render();
