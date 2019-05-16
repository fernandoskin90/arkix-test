import React from 'react';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @actions
import { filterBy } from '../../redux/actions';

import './styles.scss';

const Appbar = ({ filterBy, filters: { age, name, salary } }) => {
  const handleTextfield = state => event => {
    const newFilterInfo = {
      name: state,
      value: event.target.value
    };

    filterBy(newFilterInfo);
  };

  return (
    <div className="custom-header">
      <div className="custom-header__title">Arkix Test</div>
      <div className="custom-header__filters">
        <div className="custom-header__name">
          <TextField
            className="textfield textfield-name"
            id="name"
            label="Name"
            onChange={handleTextfield('name')}
            value={name}
          />
        </div>
        <div className="custom-header__salary">
          <TextField
            className="textfield textfield-salary"
            id="salary"
            label="Salary"
            onChange={handleTextfield('salary')}
            value={salary}
          />
        </div>
        <div className="custom-header__age">
          <TextField
            className="textfield textfield-age"
            id="age"
            label="Age"
            onChange={handleTextfield('age')}
            value={age}
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = filters => ({
  filters
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      filterBy
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Appbar);
