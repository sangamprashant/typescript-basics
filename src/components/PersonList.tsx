type PersonListProps = {
  name: {
    first: string;
    second: string;
  }[];
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
