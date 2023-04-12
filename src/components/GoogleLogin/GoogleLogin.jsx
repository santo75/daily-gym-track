import { GoogleLogin, GoogleLogout } from "react-google-login";
import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";

function SignInWithGoogle() {
  const clientId =
    "643298898979-vrjv1k9rthlkldemohvo73jhlv6fs099.apps.googleusercontent.com";
  useEffect(() => {
    gapi.load(
      "client:auth2",
      () => {
        gapi.auth2.init({ clientId: clientId });
      },
      []
    );
  });

  const [profile, setProfile] = useState("");
  const [token, setToken] = useState("");

  const handleLoginSuccess = (response) => {
    // Handle successful login
    const { name, email, imgUrl } = response.profileObj;
    setProfile({ name, email, imgUrl });
    const token = gapi.auth.getToken().access_token;
    setToken(token);
    localStorage.setItem("token", token);
  };

  const handleLoginFailure = (error) => {
    // Handle login failure
    console.log(error);
  };

  const handdleLogout = () => {
    setToken("");
    localStorage.setItem("token", "");
  };

  return (
    <>
      {token ? (
        <GoogleLogout
          clientId={clientId}
          buttonText="Logout"
          onLogoutSuccess={handdleLogout}
        />
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in"
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </>
  );
}

export default SignInWithGoogle;
