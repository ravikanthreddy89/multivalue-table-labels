import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import { Label, Container } from 'semantic-ui-react'

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import '../node_modules/semantic-ui-css/components/icon.min.css';
import '../node_modules/semantic-ui-css/components/button.min.css';
import '../node_modules/semantic-ui-css/components/divider.min.css';
import '../node_modules/semantic-ui-css/components/label.min.css';
import '../node_modules/semantic-ui-css/components/menu.min.css';
import '../node_modules/semantic-ui-css/components/dropdown.css';
import '../node_modules/semantic-ui-css/components/popup.min.css';
import '../node_modules/semantic-ui-css/components/segment.min.css';
import '../node_modules/semantic-ui-css/components/transition.min.css';
import '../node_modules/semantic-ui-css/components/flag.min.css';
import '../node_modules/semantic-ui-css/components/loader.min.css';
import '../node_modules/semantic-ui-css/components/breadcrumb.min.css';
import '../node_modules/semantic-ui-css/components/image.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData()
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[{
      Header: 'Name',
      columns: [{
        Header: 'First Name',
        accessor: 'firstName'
      }, {
        Header: 'Last Name',
        id: 'lastName',
        accessor: d => d.lastName
      }]
    }, {
      Header: 'Info',
      columns: [{
        Header: 'Profile Progress',
        accessor: 'progress',
        Cell: row => (
          <Container text>
          <div>
            <Label as='a' image>
              Joe
            </Label>
            <Label as='a' image>
              Elliot
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
            <Label as='a' image>
              Stevie
            </Label>
          </div>
          </Container>
        )
      }, {
        Header: 'Status',
        accessor: 'status',
        Cell: row => (
          <span>
            <span style={{
              color: row.value === 'relationship' ? '#ff2e00'
                : row.value === 'complicated' ? '#ffbf00'
                : '#57d500',
              transition: 'all .3s ease'
            }}>
              &#x25cf;
            </span> {
              row.value === 'relationship' ? 'In a relationship'
              : row.value === 'complicated' ? `It's complicated`
              : 'Single'
            }
          </span>
        )
      }]
    }]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        <br />
        <Tips />
        <Logo />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
