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
import _ from 'lodash';
import matchSorter from 'match-sorter';

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
          columns={
            [
              {
                Header: 'Req Code',
                accessor: 'req_code',
                maxWidth: 80
              },

              {
                Header: 'Exam Code',
                accessor: 'exam_code',
                maxWidth: 90,
                filterAll: true,
                filterMethod: (filter, rows, column) => {
                   return matchSorter(rows, filter.value, 
                   {
                     keys: [
                       {
                         key: filter.id,
                         threshold: matchSorter.rankings.EQUAL,
                         minRanking: matchSorter.rankings.EQUAL,
                         maxRanking: matchSorter.rankings.EQUAL,
                       }
                     ]
                   }
                   );

                },
                filterable: true
              },
              {
                Header: 'Reg. Req. No.',
                accessor: 'reg_req_number'
              },
              {
                Header: 'Name',
                accessor: 'name',
                filterMethod: (filter, row) => {
                  //return row[filter.id].startsWith(filter.value);
                  return _.includes(row[filter.id].toUpperCase(), filter.value.toUpperCase() );
                  //return row[filter.id].toUpperCase() === filter.value.toUpperCase();
                
                },
                filterable: true
              },
              {
                Header: 'Description',
                accessor: 'description'
              },
              {
                Header: 'Status',
                accessor: 'status'
              },
              {
                Header: 'AERRT Flag',
                accessor: 'aerrt_flag',
                maxWidth: 85
              },
              {
                Header: 'Due Date',
                accessor: 'due_date',
                maxWidth: 120
              },
              {
                Header: 'Stakeholders',
                accessor: 'status',
                Cell: row => (
                  <div>
                    <List>
                      <List.Item>gixer,monster,</List.Item>
                      <List.Item>multistrada,1200gs,</List.Item>
                      <List.Item>brutale,bonnie</List.Item>
                  </List>
                  </div>
                )
              }

            ]
          }
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
