import React from 'react';

function TableNav({ selectExpense }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body" id="exp-nav-card">
          <nav className="nav flex-column nav-pills" id="v-pills-tab">
            <a onClick={selectExpense} className="nav-link active bg-success" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">All</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-mileage" role="tab" aria-controls="v-pills-mileage" aria-selected="false">Mileage</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-mortgage" role="tab" aria-controls="v-pills-mortgage" aria-selected="false">Mortgage</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-maintenance" role="tab" aria-controls="v-pills-maintenance" aria-selected="false">Maintenance</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-supplies/goods" role="tab" aria-controls="v-pills-supplies/goods" aria-selected="false">Supplies/Goods</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-misc" role="tab" aria-controls="v-pills-misc" aria-selected="false">Misc</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-rent" role="tab" aria-controls="v-pills-rent" aria-selected="false">Rent</a>
            <a onClick={selectExpense} className="nav-link text-success" data-toggle="pill" href="#v-pills-hoa" role="tab" aria-controls="v-pills-rent" aria-selected="false">HOA</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TableNav;
