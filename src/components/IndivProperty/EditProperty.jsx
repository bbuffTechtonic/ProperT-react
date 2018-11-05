import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import '../../styles/EditProperty.css';

function EditProperty({ isOpen, toggle, rental, handlePropertyUpdate }) {

  const editAddress = rental.address;
  const editTenant = rental.tenantInfo;

  return (
    <Modal id="edit-property-modal" isOpen={isOpen} toggle={toggle} size="lg">
      <ModalHeader toggle={toggle} id="edit-prop-modal-header">Edit Your Property</ModalHeader>
      <ModalBody>
        <div className="modal-body container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <form id="edit-prop-form" onSubmit={handlePropertyUpdate}>
                    <div className="form row">
                      <div className="form-group col-md-9">
                        <label htmlFor="address-1">Address 1</label>
                        <input type="text" name="address-1" className="form-control" id="edit-prop-address-street" defaultValue={editAddress.address1} readOnly/>
                      </div>
                      <div className="form-group col-md-3">
                        <label htmlFor="address-2">Address 2</label>
                        <input type="text" name="address-2" className="form-control" id="edit-prop-address-street2" defaultValue={editAddress.address2} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" className="form-control" id="edit-prop-address-city" defaultValue={editAddress.city} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="state">State</label>
                        <select id="edit-prop-address-state" name="state" className="form-control" defaultValue={editAddress.state}>
                          <option value="Select a State" />
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
                        <input type="text" name="zip" className="form-control" id="edit-prop-address-zip" defaultValue={editAddress.zip} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="tenant-first-name">Tenant First Name</label>
                        <input type="text" name="tenant-first-name" className="form-control" id="edit-tenant-first-name" defaultValue={editTenant.firstName} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="tenant-last-name">Tenant Last Name</label>
                        <input type="text" name="tenant-last-name" className="form-control" id="edit-tenant-last-name" defaultValue={editTenant.lastName} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="tenant-email">Tenant Email</label>
                        <input type="email" name="tenant-email" className="form-control" id="edit-tenant-email" defaultValue={editTenant.email} />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-4">
                        <label htmlFor="lease-start">Lease Start Date:</label>
                        <input type="text" name="lease-start" className="form-control" id="edit-lease-start" defaultValue={editTenant.leaseStart} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="lease-end">Lease End Date:</label>
                        <input type="text" name="lease-end" className="form-control" id="edit-lease-end" defaultValue={editTenant.leaseEnd} />
                      </div>
                      <div className="form-group col-md-4">
                        <label htmlFor="rental-amount">Monthly Rental Amount ($)</label>
                        <input type="text" name="rental-amount" className="form-control" id="edit-rental-amount" defaultValue={editTenant.monthlyRent} />
                      </div>
                    </div>
                    <Button onClick={toggle} className="btn btn-success btn-sm" id="submit-edit-property" type="submit">Save Changes</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button onClick={toggle} type="button" className="btn btn-success btn-sm" data-dismiss="modal">Cancel</Button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default EditProperty;
