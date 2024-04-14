import { Name } from "./Person.types";

type PersonListProps = {
  name: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.name.map((data, index) => {
        return (
          <h2 key={index}>
            {data.first} {data.second}
          </h2>
        );
      })}
    </div>
  );
};

export default PersonList;
