import { PersonProps } from "./Person.types";

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.second}
    </div>
  );
}

export default Person;
