//eslint-disable-next-line
import React, { Component } from "react";
import faker from "faker";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
//eslint-disable-next-line
import filterFactory, { selectFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import Popup from "reactjs-popup";

const { SearchBar } = Search;

const selectOptions = {
  0: "Ativo",
  1: "Inativo"
};

faker.locale = "pt_BR";

var user = [
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 1
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 0
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 1
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 0
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 1
  },
  {
    name: faker.name.findName(),
    email: faker.internet.email(),
    nif: faker.random.number(),
    isActive: 0
  }
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

const columns = [
  {
    dataField: "id",
    text: "ID Cliente",
    sort: true,
    hidden: true
  },
  {
    dataField: "name",
    text: "Nome",
    sort: true,
    headerAlign: "center"
  },
  {
    dataField: "email",
    text: "Email",
    sort: true,
    headerAlign: "center"
  },
  {
    dataField: "nif",
    text: "NIF",
    sort: true,
    headerAlign: "center"
  },
  {
    dataField: "isActive",
    text: "Estado",
    headerStyle: { width: 150 },
    headerAlign: "center",
    formatter: cell => selectOptions[cell],
    filter: selectFilter({
      options: selectOptions,
      defaultValue: 0
    })
  },
  {
    dataField: "actions",
    isDummyField: true,
    text: "Ações",
    formatter: (cellContent, row) => {
      return (
        <h5>
          <Popup
            trigger={open => (
              <button className="button">
                <i className="icon-info" />
              </button>
            )}
            position="left bottom"
            closeOnDocumentClick
          />
          <span />
          <Popup
            trigger={open => (
              <button className="button">
                <i className="icon-pencil" />
              </button>
            )}
            position="right center"
            closeOnDocumentClick
          />
          <span />
          <Popup
            trigger={open => (
              <button className="button">
                <i className="icon-trash" />
              </button>
            )}
            position="right center"
            closeOnDocumentClick
          />
        </h5>
      );
    }
  }

  /*,
  {
    dataField: "lastLogin",
    text: "Ultimo Login",
    sort: true,
    headerAlign: "center"
  }*/
];

export default () => (
  <ToolkitProvider keyField="id" data={user} columns={columns} search>
    {props => (
      <div>
        <SearchBar
          {...props.searchProps}
          className="custome-search-field"
          style={{
            color: "black"
          }}
          delay={800}
          placeholder="Pesquisar"
        />
        <BootstrapTable
          keyField="id"
          {...props.baseProps}
          columns={columns}
          pagination={paginationFactory()}
          striped
          data={user}
          condensed
          editable
          bordered={false}
          defaultSorted={defaultSorted}
          filter={filterFactory()}
        />
      </div>
    )}
  </ToolkitProvider>
);