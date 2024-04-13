import "./App.css";
import Button from "./components/Button";
// import { Sample } from "./components";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personDetails = {
    first: "Prashant",
    second: "Srivastav",
  };

  const nameList = [
    { first: "Prashant", second: "Srivastav" },
    { first: "Prashant", second: "Srivastav" },
    { first: "Prashant", second: "Srivastav" },
  ];

  return (
    <div className="">
      <header>
        <Greet name="Prashant Srivastav" messageCount={20} isLoggedIn={true} />
        <Greet name="Prashant Srivastav" isLoggedIn={true} />
        <Person name={personDetails} />
        <PersonList name={nameList} />
        <Status status="loading" />
        <Status status="success" />
        <Status status="error" />
        <Heading>Children Props type</Heading>
        <Oscar>
          <Heading>Oscar goes to Prashant Srivastav</Heading>
        </Oscar>
        <Button
          handleClick={(event, id) => {
            console.log("Mouse is Clicked", event, id);
          }}
        />
        <Input value="" handleChange={(event) => console.log(event)} />
      </header>
    </div>
  );
}

export default App;
