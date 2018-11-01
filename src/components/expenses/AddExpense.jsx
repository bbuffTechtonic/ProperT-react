import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function AddExpense({ isOpen, toggle }) {
  return (
    <Modal id="add-expense-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" isOpen={isOpen} toggle={toggle}>
      <div className="modal-content">
        <ModalHeader className="modal-header" id="add-expense-modal-header" toggle={toggle}>
          <h5 className="modal-title">Add Expense</h5>
          <button type="button" className="close close-modal" data-dismiss="modal" aria-label="Close">
          </button>
        </ModalHeader>
        <ModalBody>
          <form id="add-expense-form">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div id="add-expense-container">
                      <label htmlFor="add-expense-date">Date:</label>
                      <input type="text" id="add-expense-date" required />
                      <br/>
                      <label htmlFor="add-expense-description">Description:</label>
                      <input type="text" id="add-expense-description" required />
                      <br/>
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
                      <input type="text" id="add-expense-amount" required /><br/>
                      <div className="image-upload">
                        <label htmlFor="add-expense-image">Image: </label>
                        <label htmlFor="add-expense-image">
                          <input type="file" name="pic" accept="image/*" id="add-expense-image" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit" id="add-expense-save" className="btn btn-success btn-sm" onClick={toggle}>Save</Button>{' '}
            <Button type="button" className="btn btn-success btn-sm" data-dismiss="modal" onClick={toggle}>Cancel</Button>
          </form>
        </ModalBody>
      </div>
    </Modal>
  );
}

export default AddExpense;
