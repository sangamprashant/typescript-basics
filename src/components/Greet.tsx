type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

function Greet(props: GreetProps) {
  const {messageCount = 0 } = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `welcome ${props.name}! you have ${messageCount} new messages`
          : `Welcome to dashboard`}
      </h2>
    </div>
  );
}

export default Greet;
