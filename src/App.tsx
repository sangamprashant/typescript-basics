import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import { Text } from "./components/Polymorphic/Text";
import DomeRef from "./components/Ref/DomeRef";
import MutableRef from "./components/Ref/MutableRef";
import Counter from "./components/State/Counter";
import LoggedIn from "./components/State/LoggedIn";
import User from "./components/State/User";
import Status from "./components/Status";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import { CounterClass } from "./components/class/CounterClass";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import UserWithContext from "./components/context/UserWithContext";
import GenericsList from "./components/generics/genericsList";
import CustomButton from "./components/html/CustomButton";
import CustomComponent from "./components/html/CustomComponent";
import CustomInput from "./components/html/CustomInputs";
import RandomNumber from "./components/restriction/RandomNumber";
import Toast from "./components/tamplateLiteralsAndExclude/Toast";

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
        <Container styles={{ border: "1px solid red", padding: "1rem" }} />
        <hr />
        <LoggedIn />
        <User />
        <Counter />
        <hr />
        <h1>Context Provider</h1>
        <i> with no future values</i>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
        <i>with future values</i>
        <UserContextProvider>
          <UserWithContext />
        </UserContextProvider>
        <hr />
        <h1>Ref </h1>
        <i>dom ref</i>
        <DomeRef />
        <i>mutable ref</i>
        <MutableRef />
        <hr />
        <h1>Class based Components</h1>
        <CounterClass message="the count is:" />
        <hr />
        <h1>Passing a component as a props</h1>
        <i>if loggedin</i>
        <Private isLoggedIn={true} component={Profile} />
        <i>if not logged in</i>
        <Private isLoggedIn={false} component={Profile} />
        <hr />
        <h1>Generics in Typescript</h1>
        <GenericsList
          items={["Prashant", "sangam", "srivastav"]}
          onClick={(item) => console.log(item)}
        />
        <GenericsList items={[1, 2, 3]} onClick={(item) => console.log(item)} />
        <hr />
        <h1>Rstriction of the props</h1>
        <i>only one type can be send </i>
        <RandomNumber value={1} isPositive />
        <RandomNumber value={-23} isNegative />
        <RandomNumber value={0} isZero />
        <hr />
        <h1>tamplate Literals And Exclude</h1>
        {/* excluded */}
        {/* <Toast position='center-center ' /> */}
        <Toast position="right-top" />
        <Toast position="center" />
        <hr />
        <h1>Wrapping html elements</h1>
        <CustomButton varient="primary">Primary Button</CustomButton>
        <CustomButton varient="success">Success Button</CustomButton>
        <CustomInput type="date" />
        <CustomInput type="range" />
        <hr />
        <h1>Extracting a Components Prop Types</h1>
        {/* in component the Greet props is been extracted */}
        <CustomComponent name="Prashant Srivastav" isLoggedIn={true} />
        <hr />
        <h1>Polymorphic Components</h1>
        <Text size="lg" as="h1">
          Heading
        </Text>
        <Text size="md" as="p">
          Paragraph
        </Text>
        <Text size="sm" color="secondary" as="label" htmlFor="someId">
          Label
        </Text>
      </header>
    </div>
  );
}

export default App;
