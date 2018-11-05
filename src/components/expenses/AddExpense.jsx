import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../../styles/AddExpense.css';

function AddExpense({ isOpen, toggle, rental, handleAddExpense }) {
  return (
    <Modal id="add-expense-modal" isOpen={isOpen} toggle={toggle}>
      <ModalHeader className="modal-header" id="add-expense-modal-header" toggle={toggle}>
        Add Expense
      </ModalHeader>
      <ModalBody>
        <div className="modal-body container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form id="add-expense-form" onSubmit={handleAddExpense}>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="add-expense-date">Date: </label>
                        <input type="date" id="add-expense-date" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="add-expense-description">Description: </label>
                        <input type="text" id="add-expense-description" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="add-expense-category">Category: </label>
                        <select className="custom-select col-5" id="add-expense-category-select" required>
                          <option value="mileage">Mileage</option>
                          <option value="mortgage">Mortgage</option>
                          <option value="maintenance">Maintenance</option>
                          <option value="suppliesGoods">Supplies/Goods</option>
                          <option value="hoa">HOA Fees</option>
                          <option value="rent">Rent Payment Received</option>
                          <option value="misc">Misc</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                        <label htmlFor="add-expense-amount">Amount: </label>
                        <input type="number" id="add-expense-amount" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12 image-upload">
                        <label htmlFor="add-expense-image">Image: </label>
                        <input type="file" name="pic" accept="image/*" id="add-expense-image" />
                      </div>
                    </div>
                    <Button onClick={toggle} className="btn btn-success btn-sm" id="add-expense-save" type="submit">Save</Button>
                    <Button onClick={toggle} type="button" className="btn btn-success btn-sm" data-dismiss="modal">Cancel</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default AddExpense;
