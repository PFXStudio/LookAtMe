/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";
import { useReducer } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Switch from "@mui/material/Switch";
import Grid from "@mui/material/Grid";
import MuiLink from "@mui/material/Link";

// @mui icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React example components
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import SimpleFooter from "examples/Footers/SimpleFooter";

// Material Kit 2 React page layout routes
import routes from "routes";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import Timer from "commons/timer";
import { useCaseLogin } from "usecases/useCaseLogin";

const EventType = {
  loggedOut: 'loggedOut',
  loggedIn: 'loggedIn',
  rememberMe: 'rememberMe',
  loading: 'loading',
  idle: 'idle',
  error: 'error',
  email: 'email',
  password: 'password',
};

const reducer = (prevState, eventType) => {
  console.log(prevState);
  console.log(eventType);
  switch (eventType.type) {
    case EventType.loggedIn:
      return {
        ...prevState,
        loggedIn: true,
      };

    case EventType.loggedOut:
      return {
        ...prevState,
        loggedIn: false,
        email: '',
        password: '',
      };
    case EventType.rememberMe:
      return {
        ...prevState,
        rememberMe: eventType.payload
      };

    case EventType.loading:
      return {
        ...prevState,
        isLoading: true,
      };

    case EventType.idle:
      return {
        ...prevState,
        isLoading: false,
      };
    case EventType.error:
      return {
        ...prevState,
        error: 'error',
      };
    case EventType.email:
      return {
        ...prevState,
        email: eventType.payload,
      };
    case EventType.password:
      return {
        ...prevState,
        password: eventType.payload,
      };
  }
};

const initialState = {
  email: '',
  password: '',
  loggedIn: false,
  rememberMe: false,
  isLoading: false,
  error: ''
};

function SignInBasic() {
  const [state, dispatcher] = useReducer(reducer, initialState);

  const emailHandler = e => {
    dispatcher({ type: EventType.email, payload: e.target.value });
  };

  const passwordHandler = e => {
    dispatcher({ type: EventType.password, payload: e.target.value });
  };

  const rememberMeHandler = async e => {
    try {
      console.log(state.rememberMe)
      dispatcher({ type: EventType.rememberMe, payload: !state.rememberMe });
    } catch {
      dispatcher({ type: EventType.error });
      alert('🚨 error rememberMe');
    }
  };

  const signInHandler = async e => {
    e.preventDefault();
    try {
      dispatcher({ type: EventType.loading });
      await useCaseLogin({ email: state.email, password: state.password });
      dispatcher({ type: EventType.idle });
      dispatcher({ type: EventType.loggedIn });
    } catch {
      dispatcher({ type: EventType.error });
      alert('🚨 Incorrect email or password');
    }
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox
        position="absolute"
        top={0}
        left={0}
        zIndex={1}
        width="100%"
        minHeight="100vh"
        sx={{
          backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <MKBox px={1} width="100%" height="100vh" mx="auto" position="relative" zIndex={2}>
        <Grid container spacing={1} justifyContent="center" alignItems="center" height="100%">
          <Grid item xs={11} sm={9} md={5} lg={4} xl={3}>
            <Card>
              <MKBox
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                mx={2}
                mt={-3}
                p={2}
                mb={1}
                textAlign="center"
              >
                <MKTypography variant="h4" fontWeight="medium" color="white" mt={1}>
                  Sign in
                </MKTypography>
                {/* <Grid container spacing={3} justifyContent="center" sx={{ mt: 1, mb: 2 }}>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <FacebookIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GitHubIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                  <Grid item xs={2}>
                    <MKTypography component={MuiLink} href="#" variant="body1" color="white">
                      <GoogleIcon color="inherit" />
                    </MKTypography>
                  </Grid>
                </Grid> */}
              </MKBox>
              <MKBox pt={4} pb={3} px={3}>
                <MKBox component="form" role="form">
                  <MKBox mb={2}>
                    <MKInput type="email" label="Email" fullWidth onChange={emailHandler} value={state.email} />
                  </MKBox>
                  <MKBox mb={2}>
                    <MKInput type="password" label="Password" fullWidth onChange={passwordHandler} value={state.password} />
                  </MKBox>
                  <MKBox display="flex" alignItems="center" ml={-1}>
                    <Switch checked={state.rememberMe} onChange={rememberMeHandler} />
                    <MKTypography
                      variant="button"
                      fontWeight="regular"
                      color="text"
                      onClick={rememberMeHandler}
                      sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                    >
                      &nbsp;&nbsp;Remember me
                    </MKTypography>
                  </MKBox>
                  <MKBox mt={4} mb={1}>
                    <MKButton variant="gradient" color="info" fullWidth onClick={signInHandler}>
                      sign in
                    </MKButton>
                  </MKBox>
                  <MKBox mt={3} mb={1} textAlign="center">
                    <MKTypography variant="button" color="text">
                      Don&apos;t have an account?{" "}
                      <MKTypography
                        component={Link}
                        to="/authentication/sign-up/cover"
                        variant="button"
                        color="info"
                        fontWeight="medium"
                        textGradient
                      >
                        Sign up
                      </MKTypography>
                    </MKTypography>
                  </MKBox>
                </MKBox>
              </MKBox>
            </Card>
          </Grid>
        </Grid>
      </MKBox>

      <MKBox width="100%" position="absolute" zIndex={2} bottom="1.625rem">
        <SimpleFooter light />
      </MKBox>
    </>
  );
}

export default SignInBasic;
