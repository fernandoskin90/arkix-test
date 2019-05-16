import React, { Component, useState, useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import FolderList from './List';

import './styles.scss';

// const [employees, setEmployees] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState(false);

// useEffect(() => {
//   fetch('http://dummy.restapiexample.com/api/v1/employees')
//     .then(res => res.json())
//     .then(res => {
//       setEmployees(res);
//       setLoading(false);
//       // this.setState({
//       //   employees: res,
//       //   loading: false
//       // });
//     })
//     .catch(
//       () => {
//         setError(true);
//         setLoading(false);
//       }
//       // this.setState({
//       //   error: true,
//       //   loading: false
//       // })
//     );
// }, []);

class Table extends Component {
  state = {
    employees: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(res => res.json())
      .then(res => {
        this.setState({
          employees: res,
          loading: false
        });
      })
      .catch(() =>
        this.setState({
          error: true,
          loading: false
        })
      );
  }

  filterEmployees = () => {
    const { filters } = this.props;
    if (!filters.age && !filters.name && !filters.salary)
      return this.state.employees;
    const transformedProps = {
      age: 'employee_age',
      name: 'employee_name',
      salary: 'employee_salary'
    };

    const activeFilters = {};

    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        activeFilters[key] = value;
      }
    });
    return this.state.employees.filter(employee => {
      let showEmployee = true;
      Object.keys(activeFilters).forEach(key => {
        showEmployee =
          showEmployee &&
          employee[transformedProps[key]] === activeFilters[key];
      });
      return showEmployee;
    });
  };

  render() {
    const { loading, error } = this.state;

    if (loading) {
      return <CircularProgress className="app__loader" />;
    }

    return (
      <div className="exployees">
        {!loading && !error && <FolderList items={this.filterEmployees()} />}
      </div>
    );
  }
}

const mapStateToProps = filters => ({
  filters
});

export default connect(mapStateToProps)(Table);
