import React from "react";
import { render } from "react-dom";
import { makeData, Logo, Tips } from "./Utils";
import { Label, List } from 'semantic-ui-react'

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
          columns={[
            {
         Header: 'Name',
      columns: [
        {
          Header: 'Req Code',
          accessor: 'firstName',
          width: 120
        }, 
      
        {
          Header: 'Exam Code',
          accessor: 'firstName',
          width: 120
        },
        {
          Header: 'Reg. Req. No.',
          accessor: 'reg_req_number',
          width: 85
        },
        {
          Header: 'Name',
          accessor: 'name',
          width: 85
        },
        {
          Header: 'Description',
          accessor: 'description',
          width: 85
        },
        {
          Header: 'Status',
          accessor: 'status',
          width: 85
        },
        {
          Header: 'AERRT Flag',
          accessor: 'aerrt_flag',
          width: 85
        },
        {
          Header: 'Due Date',
          accessor: 'due_date',
          width: 120
        },
        {
          Header: 'Due Date',
          accessor: 'due_date',
          width: 120
        },
        {
          Header: 'Stakeholders',
          accessor: 'status',
          width: 20,
          Cell: row => (
            <div>
              <List>
                <List.Item>jolchu,ragudipati,</List.Item>
                <List.Item>chchau,seafreeman,</List.Item>
                <List.Item>dwager,viesposito</List.Item>
              </List>
            </div>
          )
        }
        
      ]
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
