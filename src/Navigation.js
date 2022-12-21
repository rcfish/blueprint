import { Navbar, NavbarGroup, NavbarHeading, NavbarDivider, Classes, Button, Alignment } from '@blueprintjs/core';

function Navigation() {
  return (
  <Navbar>
    <NavbarGroup align={Alignment.LEFT}>
      <NavbarHeading>Ira</NavbarHeading>
      <NavbarDivider />
      <Button className="bp4-minimal" icon="home" text="Home" />
      <Button className="bp4-minimal" icon="document" text="Treaties" />
      
      <Button className="bp4-minimal" icon="application" text="Cessions" />
      <Button className="bp4-minimal" icon="virus" text="Claims" />
      <Button className="bp4-minimal" icon="bank-account" text="ARAP" />
      <Button className="bp4-minimal" icon="upload" text="EDT" />
      <Button className="bp4-minimal" icon="dashboard" text="Dashboard" />
      <Button className="bp4-minimal" icon="join-table" text="Tablesets" />
    </NavbarGroup>
    <NavbarGroup align={Alignment.RIGHT}>
      <Button className="bp4-minimal" icon="user" text="" />
      <Button className="bp4-minimal" icon="notifications" text="" />
      <Button className="bp4-minimal" icon="cog" text="" />
    </NavbarGroup>
  </Navbar>
  );
}

export default Navigation;
