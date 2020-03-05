import * as React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';

const DropDown = (props: { modules: string[] }) => {
  const aaa = (modules: string[]) => {
    const modulesArr: any[] = [];
    modules.forEach((mod, key) => {
      modulesArr.push(<DropdownItem key={key}>{mod}</DropdownItem>);
    });
    return modulesArr;
  }
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>Modules</DropdownToggle>
      <DropdownMenu right>
        {aaa(props.modules)}
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

type Props = {
  openModal: () => void,
  modules: string[]
}
const Example = (props: Props) => {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <Nav className="mr-auto" navbar>
          <NavItem><Button color="primary" onClick={props.openModal}>Open</Button></NavItem>
          <NavItem><Button color="primary" onClick={props.openModal}>Open</Button></NavItem>
          <NavItem><Button color="primary" onClick={props.openModal}>Open</Button></NavItem>
          <NavItem><Button color="primary" onClick={props.openModal}>Open</Button></NavItem>
          {props.modules.length > 0 ? <DropDown modules={props.modules} /> : <React.Fragment />}
        </Nav>
        <NavbarText title="Created by Tomas Kacalek">Logger v0.0.1</NavbarText>
      </Navbar>
    </div>
  );
}

export default Example;