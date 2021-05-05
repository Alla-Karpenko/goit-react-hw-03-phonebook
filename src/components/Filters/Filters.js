import React from "react";
import PropTypes from "prop-types";
import './Filters.scss';

const Filter = ({ filter, changeFilter }) => {
  return (
    <>
        <h3> Find contacts by me </h3>
      <input className="Input-Filter"
        type="text"
        name=''
        value={filter}
        onChange={(e) => changeFilter(e.target.value)}
      />
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;