import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, Col, Collapse, Row,
} from 'reactstrap';
import '../styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginEmail: '',
      loginPassword: '',
      newLandlord: {},
      signUpFirst: '',
      signUpLast: '',
      signUpEmail: '',
      signUpPassword: '',
      landingCard: [true, false, false],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.toggleLandingCard = this.toggleLandingCard.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  // handleLogin(e) {
  //   e.preventDefault();
  //   const { landlords, loginEmail, loginPassword } = this.state;
  //   for (let i = 0; i < landlords.length; i += 1) {
  //     if (landlords[i].email === loginEmail
  //     && landlords[i].password === loginPassword) {
  //       const { handleSuccessfulLogin } = this.props;
  //       handleSuccessfulLogin();
  //       return;
  //     }
  //   }
  //
  //   alert('Email or Password do not match');
  // }

  handleLogin(e) {
    e.preventDefault();
    const { loginEmail, loginPassword } = this.state;
    const { landlord1 } = this.props;
    if (landlord1.email === loginEmail && landlord1.password === loginPassword) {
      const { handleSuccessfulLogin } = this.props;
      handleSuccessfulLogin();
      return;
    }

    alert('Email or Password do not match');
  }

  handleSignUp(e) {
    e.preventDefault();
    const {
      signUpFirst, signUpLast, signUpEmail, signUpPassword,
    } = this.state;
    const signUpLandlord = {
      firstName: signUpFirst, lastName: signUpLast, email: signUpEmail, password: signUpPassword,
    };
    const { landlord1, handleSuccessfulLogin } = this.props;
    if (signUpEmail === landlord1.email) {
      alert('Email has already been registered');
      return;
    }

    this.setState({
      newLandlord: signUpLandlord,
    });
    const message = `New account has been created with the following informtion
    First Name: ${signUpFirst}
    Last Name: ${signUpLast}
    Email: ${signUpEmail}
    Password: ${signUpPassword}`;
    alert(message);
    handleSuccessfulLogin();
  }

  toggleLandingCard(card) {
    const { landingCard } = this.state;
    const prevState = landingCard;
    const state = prevState.map((x, index) => (card === index ? !x : false));

    this.setState({
      landingCard: state,
    });
  }

  render() {
    const { landingCard, loginEmail, loginPassword } = this.state;
    return (
      <Row className="mt-5 justify-content-center">
        <Col sm="10" md="8" lg="6" xl="6">
          <div id="landingCard">
            <Collapse isOpen={landingCard[0]} data-parent="#landingCard" id="loginCard" aria-labelledby="loginCard">
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
                          value={loginEmail}
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
                          value={loginPassword}
                          onChange={this.handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="forgot pb-1 text-right">
                      <button
                        type="button"
                        className="link-button"
                        onClick={() => this.toggleLandingCard(2)}
                        aria-expanded={landingCard[2]}
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
                          aria-expanded={landingCard[1]}
                        >
                            Sign Up
                        </button>
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={landingCard[1]} data-parent="#landingCard" id="signUpCard">
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
                  <form id="signupForm" onSubmit={this.handleSignUp}>
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
                          name="signUpFirst"
                          className="form-control"
                          id="signUpFirstName"
                          onChange={this.handleInputChange}
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
                          name="signUpLast"
                          className="form-control"
                          id="signUpLastName"
                          onChange={this.handleInputChange}
                          aria-describedby="lastName"
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
                          aria-describedby="signUpPassword"
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
                          aria-expanded={landingCard[1]}
                        >
                          Sign In
                        </button>
                      </p>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </Collapse>
            <Collapse isOpen={landingCard[2]} data-parent="#landingCard" id="forgotPassCard">
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
                          aria-expanded={landingCard[1]}
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

Login.propTypes = {
  landlord1: PropTypes.objectOf(PropTypes.string).isRequired,
  handleSuccessfulLogin: PropTypes.func.isRequired,
};

export default Login;
