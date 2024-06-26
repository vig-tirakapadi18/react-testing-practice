interface GreetingProps {
  name?: string;
}

const Greeting = (props: GreetingProps) => {
  return <div>Hello {props.name}!</div>;
};

export default Greeting;
