import { H3, Card } from "@blueprintjs/core";

export default function Example(props) {
  return (
    <Card className="card">
      <H3>{props.header}</H3>
      {props.children}
    </Card>
  );
};

