import React from 'react';

function TableNav() {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body" id="exp-nav-card">
          <nav className="nav flex-column nav-pills" id="v-pills-tab">
            <a className="nav-link active bg-success" id="v-pills-all-tab" data-toggle="pill" href="#v-pills-all" role="tab" aria-controls="v-pills-all" aria-selected="true">All</a>
            <a className="nav-link text-success" id="v-pills-mileage-tab" data-toggle="pill" href="#v-pills-mileage" role="tab" aria-controls="v-pills-mileage" aria-selected="false">Mileage</a>
            <a className="nav-link text-success" id="v-pills-mortgage-tab" data-toggle="pill" href="#v-pills-mortgage" role="tab" aria-controls="v-pills-mortgage" aria-selected="false">Mortgage</a>
            <a className="nav-link text-success" id="v-pills-maintenance-tab" data-toggle="pill" href="#v-pills-maintenance" role="tab" aria-controls="v-pills-maintenance" aria-selected="false">Maintenance</a>
            <a className="nav-link text-success" id="v-pills-supplies/goods-tab" data-toggle="pill" href="#v-pills-supplies/goods" role="tab" aria-controls="v-pills-supplies/goods" aria-selected="false">Supplies/Goods</a>
            <a className="nav-link text-success" id="v-pills-misc-tab" data-toggle="pill" href="#v-pills-misc" role="tab" aria-controls="v-pills-misc" aria-selected="false">Misc</a>
            <a className="nav-link text-success" id="v-pills-rent-tab" data-toggle="pill" href="#v-pills-rent" role="tab" aria-controls="v-pills-rent" aria-selected="false">Rent</a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TableNav;