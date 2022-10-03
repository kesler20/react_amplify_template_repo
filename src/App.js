import { React, useEffect } from "react";
import { Amplify, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";
import awsExports from "./aws-exports";

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "eu-west-2",
    aws_pubsub_endpoint:
      "wss://a1rq52k3rsx0d7-ats.iot.eu-west-2.amazonaws.com/mqtt",
  })
);

useEffect(() => {
  PubSub.subscribe("myTopic").subscribe({
    next: (data) => console.log("Message received", data),
    error: (error) => console.error(error),
    complete: () => console.log("Done"),
  });
});

Amplify.configure(awsExports);
const App = () => {
  return <div className="App">hello world</div>;
};

export default App;
