import React from 'react';
import {
  Card, CardBody, Col, Collapse, Row,
} from 'reactstrap';
import '../styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landlords: [{
        firstName: 'Patrick', lastName: 'Smith', email: 'patrick@yoohoo.com', password: 'password',
      }],
      loginEmail: '',
      loginPassword: '',
      landingCard: [true, false, false],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleLandingCard = this.toggleLandingCard.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleLogin(e) {
    e.preventDefault();
    for (let i = 0; i < this.state.landlords.length; i++) {
      if (this.state.landlords[i].email === this.state.loginEmail
      && this.state.landlords[i].password === this.state.loginPassword) {
        alert('Success! Now figure out how to update the state of your app to show me logged in ya jerk!!! ');
        return;
      }
    }

    alert('Email or Password do not match');
  }

  toggleLandingCard(card) {
    const prevState = this.state.landingCard;
    const state = prevState.map((x, index) => (card === index ? !x : false));

    this.setState({
      landingCard: state,
    });
  }

  render() {
    return (
      <Row className="mt-5 justify-content-center">
        <Col sm="10" md="8" lg="6" xl="6">
          <div id="landingCard">
            <Collapse isOpen={this.state.landingCard[0]} data-parent="#landingCard" id="loginCard" aria-labelledby="loginCard">
              <Card>
                <CardBody>
                  <h1 className="text-center">ProperT</h1>
                  <div className="google-login">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-2"
                    >
                      <i className="fab fa-google" />
                      {' '}
                      Sign in with Google
                    </button>
                    <div className="row">
                      <div className="col">
                        <hr />
                      </div>
                      <div className="col-3">
                        <p className="text-center">or</p>
                      </div>
                      <div className="col">
                        <hr />
                      </div>
                    </div>
                  </div>
                  <form id="signinForm" onSubmit={this.handleLogin}>
                    <div className="form-group email">
                      <div className="input-group email">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependEmail"
                          >
                            <i className="far fa-envelope" />
                          </span>
                        </div>
                        <input
                          name="loginEmail"
                          type="email"
                          className="form-control"
                          id="signInEmail"
                          aria-describedby="signInEmail"
                          placeholder="Email"
                          required
                          value={this.state.loginEmail}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group password">
                      <div className="input-group password">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependPassword"
                          >
                            <i className="fas fa-lock" />
                          </span>
                        </div>
                        <input
                          name="loginPassword"
                          type="password"
                          className="form-control"
                          id="signInPassword"
                          aria-describedby="signInPassword"
                          placeholder="Password"
                          required
                          value={this.state.loginPassword}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="forgot pb-1 text-right">
                      <button
                        type="button"
                        className="link-button"
                        onClick={() => this.toggleLandingCard(2)}
                        aria-expanded={this.state.landingCard[2]}
                      >
                        <small>Forgot Password?</small>
                      </button>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                    >
                        Sign in
                    </button>
                    <div className="new user text-center">
                      <hr />
                      <p>
                          New User?
                        {' '}
                        <button
                          type="button"
                          className="link-button"
                          onClick={() => this.toggleLandingCard(1)}
                          aria-expanded={this.state.landingCard[1]}
                        >
                            Sign Up
                        </button>
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={this.state.landingCard[1]} data-parent="#landingCard" id="signUpCard">
              <Card>
                <CardBody>
                  <h1 className="text-center">ProperT</h1>
                  <div className="google-login">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-2"
                    >
                      <i className="fab fa-google" />
                      {' '}
                      Sign up with Google
                    </button>
                    <div className="row">
                      <div className="col">
                        <hr />
                      </div>
                      <div className="col-3">
                        <p className="text-center">or</p>
                      </div>
                      <div className="col">
                        <hr />
                      </div>
                    </div>
                  </div>
                  <form id="signupForm">
                    <div className="form-group first-name">
                      <div className="input-group last">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependFirstName"
                          >
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <input
                          type="text"
                          name="signUpFirstName"
                          className="form-control"
                          id="signUpFirstName"
                          aria-describedby="firstName"
                          placeholder="First"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group last-name">
                      <div className="input-group last">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependLastName"
                          >
                            <i className="far fa-user" />
                          </span>
                        </div>
                        <input
                          type="text"
                          name="signUpLastName"
                          className="form-control"
                          id="signUpLastName"
                          placeholder="Last"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group email">
                      <div className="input-group email">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependUpEmail"
                          >
                            <i className="far fa-envelope" />
                          </span>
                        </div>
                        <input
                          type="email"
                          name="signUpEmail"
                          className="form-control"
                          id="signUpEmail"
                          aria-describedby="signUpEmail"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="form-group password">
                      <div className="input-group password">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrependUpPassword"
                          >
                            <i className="fas fa-lock" />
                          </span>
                        </div>
                        <input
                          type="password"
                          name="signUpPassword"
                          className="form-control"
                          id="signUpPassword"
                          placeholder="Create Password"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-block"
                    >
                    Sign Up
                    </button>
                    <div className="new user text-center">
                      <hr />
                      <p>
                        Already have an account?
                        {' '}
                        <button
                          type="button"
                          className="link-button"
                          onClick={() => this.toggleLandingCard(0)}
                          aria-expanded={this.state.landingCard[1]}
                        >
                          Sign In
                        </button>
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={this.state.landingCard[2]} data-parent="#landingCard" id="forgotPassCard">
              <Card>
                <CardBody className="pb-2">
                  <h6 className="reset-instructions">
                    Enter your email address and we will send you a link to reset your password
                  </h6>
                  <form id="forgotPassForm">
                    <div className="form group email">
                      <div className="input-group email">
                        <div className="input-group-prepend">
                          <span
                            className="input-group-text"
                            id="inputGroupPrepend2"
                          >
                            <i className="far fa-envelope" />
                          </span>
                        </div>
                        <input
                          type="email"
                          className="form-control"
                          id="forgotPassEmail"
                          placeholder="Email"
                          aria-describedby="inputGroupPrepend2"
                          required
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-success btn-block mt-3"
                    >
                    Send Email
                    </button>
                    <div className="new user text-center">
                      <hr className="mb-1" />
                      <small>
                        <button
                          type="button"
                          className="link-button"
                          onClick={() => this.toggleLandingCard(0)}
                          aria-expanded={this.state.landingCard[1]}
                        >
                          Return to Sign In
                        </button>
                      </small>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
      </Row>
    );
  }
}

export default Login;
