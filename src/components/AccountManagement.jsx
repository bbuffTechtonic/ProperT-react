import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink,
} from 'reactstrap';

class AccountManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    const { activeTab } = this.state;
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
                    <form className="text-left">
                      <div className="row justify-content-center">
                        <div className="col-12 col-sm-6 col-lg-5">
                          <div className="form group avatar mt-3">
                            <img
                              id="profilePic"
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
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
                                name="first-name"
                                id="first-name"
                                placeholder="First"
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
                                name="last-name"
                                id="last-name"
                                placeholder="Last"
                                aria-describedby="inputGroupPrepend2"
                                required
                              />
                            </div>
                          </div>
                          <div className="form group email">
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
                                name="email"
                                className="form-control"
                                id="email"
                                placeholder="Email"
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
                    <form className="text-left">
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
                            name="password"
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
                            name="new-password"
                            className="form-control"
                            id="new-password"
                            placeholder="New"
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
                            name="confirm-password"
                            className="form-control"
                            id="confirm-password"
                            placeholder="Confirm"
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

export default AccountManagement;
