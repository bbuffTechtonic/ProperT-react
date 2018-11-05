import React from 'react';
import PropTypes from 'prop-types';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
} from 'reactstrap';

class AccountManagement extends React.Component {
  constructor(props) {
    super(props);
    const { landlord1 } = this.props;
    this.state = {
      editFirstName: landlord1.firstname,
      editLastName: landlord1.lastName,
      editEmail: landlord1.email,
      editAvatar: landlord1.Avatar,
      editPassword: landlord1.password,
      activeTab: '1',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSaveChanges = this.handleSaveChanges.bind(this);
    this.handleChangeAvatar = this.handleChangeAvatar.bind(this);
    this.handleUpdatePassword = this.handleUpdatePassword.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleChangeAvatar(e) {
    const preview = document.querySelector('#profilePic');
    // TODO: refactor document.querySelector to use React Refs
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      preview.src = reader.result;
      this.setState({ editAvatar: preview.src });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  handleSaveChanges(e) {
    e.preventDefault();
    const {
      editFirstName, editLastName, editEmail, editAvatar,
    } = this.state;
    const { landlord1, handleAccountChanges } = this.props;
    const newLandlordObj = {
      firstname: editFirstName,
      lastName: editLastName,
      email: editEmail,
      password: landlord1.password,
      Avatar: editAvatar,
    };
    handleAccountChanges(newLandlordObj);
    alert('Your changes have been saved');
  }

  handleUpdatePassword(e) {
    e.preventDefault();
    const { editPassword } = this.state;
    const { landlord1, handleAccountChanges } = this.props;
    const newLandlordObj = {
      firstname: landlord1.firstname,
      lastName: landlord1.lastName,
      email: landlord1.email,
      password: editPassword,
      Avatar: landlord1.Avatar,
    };

    if (e.target.currentPassword.value !== landlord1.password) {
      alert('Current password is incorrect');
      return;
    }

    if (e.target.newPassword.value.length < 8) {
      alert('Your password must be at least 8 characters');
      return;
    }

    if (e.target.newPassword.value !== editPassword) {
      alert('Confirm password did not match New password');
      return;
    }

    handleAccountChanges(newLandlordObj);
    alert('Your password has been updated');
    document.querySelector('#resetPassForm').reset();
    // TODO: refactor document.querySelector to use React Refs
  }

  render() {
    const {
      activeTab, editFirstName, editLastName, editEmail, editAvatar,
    } = this.state;
    return (
      <div className="container acct-mgmt-container">
        <div className="row justify-content-center">
          <div className="mt-5 mb-5 col">
            <div className="card">
              <div className="card-body">
                <h3 className="text-center mb-3">Manage your account</h3>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={({ active: activeTab === '1' })}
                      onClick={() => { this.toggle('1'); }}
                      href="#"
                    >
                      Account Info
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={({ active: activeTab === '2' })}
                      onClick={() => { this.toggle('2'); }}
                      href="#"
                    >
                      Password
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <form className="text-left" onSubmit={this.handleSaveChanges}>
                      <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-5">
                          <div className="form group avatar mt-3">
                            <img
                              id="profilePic"
                              src={editAvatar}
                              alt="No avatar uploaded"
                              className="img-thumbnail img-fluid col-6 offset-3 col-sm-8 offset-sm-2 col-lg-8 offset-lg-2"
                            />
                            <div className="row justify-content-center">
                              <div className="col-10 col-sm-12 col-md-9 mt-2">
                                <div className="custom-file">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    id="customFile"
                                    onChange={this.handleChangeAvatar}
                                  />
                                  <label
                                    className="custom-file-label"
                                    htmlFor="customFile"
                                  >
                                    Change Avatar
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-12 col-sm-6">
                          <div className="form group first mt-3">
                            <label htmlFor="first-name">
                              First name
                            </label>
                            <div className="input-group first">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend1"
                                >
                                  <i className="far fa-user" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                name="editFirstName"
                                Value={editFirstName}
                                id="first-name"
                                onChange={this.handleInputChange}
                                aria-describedby="inputGroupPrepend1"
                                required
                              />
                            </div>
                          </div>
                          <div className="form group last">
                            <label htmlFor="last">
                              Last name
                            </label>
                            <div className="input-group last">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend2"
                                >
                                  <i className="far fa-user" />
                                </span>
                              </div>
                              <input
                                type="text"
                                className="form-control"
                                name="editLastName"
                                value={editLastName}
                                onChange={this.handleInputChange}
                                id="last-name"
                                aria-describedby="inputGroupPrepend2"
                                required
                              />
                            </div>
                          </div>
                          <div className="form group ">
                            <label htmlFor="email">
                              Email Address
                            </label>
                            <div className="input-group email">
                              <div className="input-group-prepend">
                                <span
                                  className="input-group-text"
                                  id="inputGroupPrepend3"
                                >
                                  <i className="far fa-envelope" />
                                </span>
                              </div>
                              <input
                                type="text"
                                name="editEmail"
                                value={editEmail}
                                onChange={this.handleInputChange}
                                className="form-control"
                                id="email"
                                aria-describedby="inputGroupPrepend3"
                                required
                              />
                            </div>
                          </div>
                          <button
                            className="btn btn-success float-right mt-4 btn-sm"
                            type="submit"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </form>
                  </TabPane>
                  <TabPane tabId="2">
                    <form id="resetPassForm" className="text-left" onSubmit={this.handleUpdatePassword}>
                      <div className="form group current p-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-3">
                        <label htmlFor="current">
                          Current Password
                        </label>
                        <div className="input-group old">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend4"
                            >
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            type="password"
                            name="currentPassword"
                            className="form-control"
                            id="password"
                            placeholder="Current"
                            aria-describedby="inputGroupPrepend4"
                            required
                          />
                        </div>
                      </div>
                      <div className="form group new p-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label htmlFor="new">
                          New Password
                          {' '}
                          <small>(min 8 characters)</small>
                        </label>
                        <div className="input-group new">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend5"
                            >
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            type="password"
                            name="newPassword"
                            className="form-control"
                            id="new-password"
                            placeholder="New"
                            minLength="8"
                            aria-describedby="inputGroupPrepend5"
                            required
                          />
                        </div>
                      </div>
                      <div className="form group confirm p-0 col-sm-8 offset-sm-2 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                        <label htmlFor="confirm">
                          Confirm New Password
                        </label>
                        <div className="input-group confirm">
                          <div className="input-group-prepend">
                            <span
                              className="input-group-text"
                              id="inputGroupPrepend6"
                            >
                              <i className="fas fa-key" />
                            </span>
                          </div>
                          <input
                            type="password"
                            name="editPassword"
                            className="form-control"
                            id="confirm-password"
                            placeholder="Confirm"
                            onChange={this.handleInputChange}
                            aria-describedby="inputGroupPrepend6"
                            required
                          />
                        </div>
                      </div>
                      <button
                        className="btn btn-success float-right mt-4 btn-sm"
                        type="submit"
                      >
                      Update Password
                      </button>
                    </form>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AccountManagement.propTypes = {
  landlord1: PropTypes.objectOf(PropTypes.string).isRequired,
  handleAccountChanges: PropTypes.func.isRequired,
};

export default AccountManagement;
