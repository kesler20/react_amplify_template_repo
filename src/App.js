import { Amplify, Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { useEffect } from "react";
import RESTfulApiInterface from "./apis/RESTapi";

Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  const getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user", user);
    const token = user.signInUserSession.idToken.jwtToken;
    console.log("token", token);

    const requestInfo = { headers: { Authorization: token } };

    const api = new RESTfulApiInterface();
    api.updateEndpoint("/items");
    api.updateExtraParams(requestInfo);
    const response = await api
      .getResource("")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getUserData();
  });
  return (
    <>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
};

export default withAuthenticator(App);
