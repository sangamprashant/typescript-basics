type PersonProps = {
  name: {
    first: string;
    second: string;
  };
};

function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first} {props.name.second}
    </div>
  );
}

export default Person;
