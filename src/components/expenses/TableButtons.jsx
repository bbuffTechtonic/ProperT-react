import React from 'react';
import 'reactstrap';

function TableButtons() {
  return (
    <div className="row" id="search-delete-add-row">
      <div className="col-md-3 offset-md-3 col-4">
        <input type="text" name="search" id="search-input" placeholder="Search" className="col"/>
      </div>
      <div className="col-md-3 col" />
      <div className="col-md-3 col-6">
        <button className="btn btn-danger float-right btn-sm mr-2 mb-1" id="delete-expenses" type="button">Delete</button>
        <button className="btn btn-success float-right btn-sm mr-2 mb-1" id="add-expense-button" data-toggle="modal" data-target="#add-expense-modal" type="button">Add</button>
      </div>
    </div>
  );
}

export default TableButtons;
