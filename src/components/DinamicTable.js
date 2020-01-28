import React from 'react';
import {Table, Input, Button, Icon } from 'antd'; 
import Highlighter from 'react-highlight-words';
import Project from '../services/Projects';
 
class DinamicTable extends React.Component{
    state={
        arrProyectos:[],
        searchText: '',
        searchedColumn: '',
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Button
              type="primary"
              onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              icon="search"
              size="small"
              style={{ width: 90, marginRight: 8 }}
            >
              Search
            </Button>
            <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
          </div>
        ),
        filterIcon: filtered => (
          <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
          record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    

    async componentDidMount() {
        this.setState({arrProyectos: await Project.getProjects()})
    }

    render(){
        const columns = [
            {
              title: 'Project',
              dataIndex: 'project',
              sorter: (a, b) => a.project- b.project,
              sortDirections: ['descend'],
              
            },
            {
              title: 'Description',
              dataIndex: 'description',
              key: 'description',
                ...this.getColumnSearchProps('description'),
            },
            {
              title: 'Start date',
              dataIndex: 'start date',
             
            },
            {
                title: 'Category',
                dataIndex: 'category',
                defaultSortOrder: 'descend',
                sorter: (a, b) => a.category.length  - b.category.length ,
                
               
            },
            {
                title: 'Responsible',
                dataIndex: 'responsible',
                sorter: (a, b) => a.responsible.length - b.responsible.length,
                sortDirections: ['descend'],
               
            },
            {
                title: 'Savings amount',
                dataIndex: 'savings amount',
               
            },
            {
                title: 'Currency',
                dataIndex: 'currency',
                sorter: (a, b) => a.currency.length- b.currency.length,
                sortDirections: ['descend'],
               
            },
            {
                title: 'Complexity',
                dataIndex: 'complexity',
                sorter: (a, b) => a.complexity.length- b.complexity.length,
                sortDirections: ['descend'],
            },
          ];
          
        
        return(
             
            <Table columns={columns} dataSource={this.state.arrProyectos} onChange={onChange} />
        );

    }
}

function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export default DinamicTable;