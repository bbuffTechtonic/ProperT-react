import React from 'react';
import 'reactstrap';

function AddExpense() {
  return (
    <div className="modal fade" id="add-expense-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header" id="add-expense-modal-header">
            <h5 className="modal-title">Add Expense</h5>
            <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">x</span>
            </button>
          </div>
          <form id="add-expense-form">
            <div className="modal-body container-fluid">
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <div id="add-expense-container">
                        <label htmlFor="add-expense-date">Date:</label>
                        <input type="text" id="add-expense-date" required/><br/>
                        <label htmlFor="add-expense-description">Description:</label>
                        <input type="text" id="add-expense-description" required/><br/>
                        <label htmlFor="add-expense-category">Category:</label>
                        <select className="custom-select col-5" id="add-expense-category-select" required>
                          <option value="mileage">Mileage</option>
                          <option value="mortgage">Mortgage</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="suppliesGoods">Supplies/Goods</option>
                          <option value="misc">Misc</option>
                        </select>
                        <br/>
                        <label htmlFor="add-expense-amount">Amount:</label>
                        <input type="text" id="add-expense-amount" required/><br/>
                        <div className="image-upload">
                          <label htmlFor="add-expense-image">Image: &nbsp&nbsp&nbsp</label>
                          <label htmlFor="add-expense-image">
                              <i className="far fa-images"></i>
                          </label>
                          <input type="file" name="pic" accept="image/*" id="add-expense-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" id="add-expense-save" className="btn btn-success btn-sm">Save</button>
          </form>
          <div className="modal-footer">
            <button type="button" className="btn btn-success btn-sm" data-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddExpense;
