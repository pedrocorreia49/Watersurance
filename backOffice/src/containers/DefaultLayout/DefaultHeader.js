import React, { Component } from "react";
import { Link } from "react-router-dom";
import { DropdownToggle, Nav, NavItem } from "reactstrap";
import PropTypes from "prop-types";

import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler
} from "@coreui/react";
import logo from "../../assets/img/brand/logo.jpg";
import favicon from "../../assets/img/brand/favicon.png";

//eslint-disable-next-line
var bgColors = {
  Default: "#81b71a",
  Blue: "#00B1E1",
  Cyan: "#37BC9B",
  Green: "#8CC152",
  Red: "#E9573F",
  Yellow: "#F6BB42",
  White: "#ffffff"
};
const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 160, height: 50, alt: "Watersurance Logo" }}
          minimized={{
            src: favicon,
            width: 30,
            height: 30,
            alt: "Watersurance Logo"
          }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />

        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <Link to="/" className="nav-link">
              Home Page
            </Link>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <AppHeaderDropdown direction="down">
            <DropdownToggle nav>
              <Link to="/cliente">
                <img
                  src={"../../assets/img/avatars/6.jpg"}
                  className="img-avatar"
                  alt="admin@bootstrapmaster.com"
                />
              </Link>
            </DropdownToggle>
          </AppHeaderDropdown>
        </Nav>
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
