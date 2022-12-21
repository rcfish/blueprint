import React from "react";
import { Button, FormGroup, InputGroup } from "@blueprintjs/core";
import Example from "./Example";

export default function Core() {
  return (
    <Example header="Core Example">
      <Button className="button" intent="none" icon="small-cross" text="Cancel" />
      <Button className="button" intent="primary" icon="floppy-disk" text="Save" />
      <br/>
      <br/>
      <FormGroup
        helperText="Helper text with details..."
        inline={true}
        intent={"primary"}
        label="Some required input"
        labelFor="text-input"
        labelInfo="*"
      >
        <InputGroup id="text-input" placeholder="Placeholder text" intent={"primary"} />
      </FormGroup>
      <FormGroup
        helperText="Required field..."
        inline={true}
        intent={"danger"}
        label="Some error input"
        labelFor="text-input"
      >
        <InputGroup id="text-input" value="I am an error" intent={"danger"} />
      </FormGroup>
    </Example>
  )
}
