import React, { Component } from 'react';

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
      .catch(error =>
        this.setState({
          error: true,
          loading: false
        })
      );
  }
  render() {
    const { employees, loading, error } = this.state;
    return (
      <div>
        {loading && <div>Loading...</div>}
        {!loading &&
          !error &&
          employees.map(
            ({ id, employee_name, employee_salary, employee_age }) => (
              <React.Fragment key={id}>
                <label>Employee Namee: </label>
                <span>{employee_name}</span>
                <br />
                <br />
                <label htmlFor="">Employee Age: </label>
                <span>{employee_age}</span>
                <br />
                <br />
                <label htmlFor="">Employee Salray:</label>
                <span>{employee_salary}</span>
              </React.Fragment>
            )
          )}
      </div>
    );
  }
}

export default Table;
