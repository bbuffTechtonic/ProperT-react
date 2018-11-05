import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';

function AddProperty({ modal, toggle, onSubmit }) {
    return (
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Add Property</ModalHeader>
        <ModalBody>
        <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form id="add-new-property" onSubmit={onSubmit}>
                    <div className="form row">
                      <div className="form-group col-md-9">
                        <label htmlFor="address-1">Address 1</label>
                        <input type="text" name="address-1" className="form-control" id="address-1" placeholder="12 Main St." />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="address-2">Address 2</label>
                        <input type="text" name="address-2" className="form-control" id="address-2" placeholder="2A" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" className="form-control" id="city" placeholder="Kalamazoo" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="state">State</label>
                        <select id="state" name="state" className="form-control">
                          <option value="Select State"></option>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District Of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </select>
                      </div>
                      <div className="form-group col-md-2">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" name="zip" className="form-control" id="zip" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-12">
                          <label htmlFor="propertyImage">Upload Image</label>
                          <input type="file" name="propertyImage" className="form-control-file" id="propertyImage" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="tenant-name">Tenant Name</label>
                        <input type="text" name="tenant-name" className="form-control" id="tenant-name" placeholder="John Doe" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="tenant-email">Tenant Email</label>
                        <input type="email" name="tenant-email" className="form-control" id="tenant-email" placeholder="jdoe@email.com" />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="rental-amount">Monthly Rent ($)</label>
                        <input type="text" name="rental-amount" className="form-control" id="rental-amount" placeholder="1,350.00" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-3">
                        <label htmlFor="lease-start">Lease Start:</label>
                        <input type="text" name="lease-start" className="form-control" id="lease-start" placeholder="6/1/2018" />
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="lease-end">Lease End:</label>
                        <input type="text" name="lease-end" className="form-control" id="lease-end" placeholder="5/31/2019" />
                      </div>
                    </div>
                    <input type="submit" onClick={toggle} data-dismiss="modal" value="Submit" className="btn btn-success btn-sm" />
                    <Button type="button" className="btn btn-success btn-sm" data-dismiss="modal" onClick={toggle}>Cancel</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </ModalBody>
      </Modal>
    );
}
export default AddProperty;
