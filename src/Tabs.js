import React from "react";
import { Tab, Tabs, H3, Classes, InputGroup, Card, Button } from "@blueprintjs/core";
import Example from "./Example";

const APanel = () => {
  return (
    <Card>
      <H3>Example panel: Angular</H3>
      <p className={Classes.RUNNING_TEXT}>
        Some people use Angular as the V in MVC. 
      </p>
    </Card>
  )
}

const EPanel = () => {
  return (
    <Card>
      <H3>Example panel: Ember</H3>
      <p className={Classes.RUNNING_TEXT}>
        Some people use Ember as the V in MVC.
      </p>
    </Card>
  )
}

const RPanel = () => {
  return (
    <Card>
      <H3>Example panel: React</H3>
      <p className={Classes.RUNNING_TEXT}>
        Lots of people use React as the V in MVC. Since React makes no assumptions about the rest of your technology
        stack, it's easy to try it out on a small feature in an existing project.
      </p>
      <Button className="button" intent="success" icon="thumbs-up" text="OK"/>
    </Card>
  )
}

export default function ExTabs() {
  return (
    <Example header="Tabs Example">
      <Tabs id="TabsExample" defaultSelectedTabId="rx" >
        <Tab id="ng" title="Angular" panel={<APanel/>} />
        <Tab id="mb" title="Ember" panel={<EPanel/>} />
        <Tab id="rx" title="React" panel={<RPanel/>} />
        <Tabs.Expander />
        <InputGroup type="text" placeholder="Search..." />
      </Tabs>
    </Example>
  )
}