import "./Sidebar.css";
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
          <h1>Aplic Aut +</h1>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__categ">
          <i className="fa fa-bank"></i>
          <a>Relacionamento com o Banco</a>
        </div>
        <div className="sidebar__categ">
          <i className="fa fa-user"></i>
          <a>Características do Cliente</a>
        </div>
        <div className="sidebar__categ">
          <i className="fa fa-search"></i>
          <a>Relacionamento com a Concorrência</a>
        </div>
        <div className="sidebar__categ">
          <i className="fa fa-money"></i>
          <a>Comportamento no Produto</a>
        </div>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
      </div>
    </div>
  );
};

export default Sidebar;