import { React, useEffect } from "react";
import { Amplify, PubSub } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "eu-west-2",
    aws_pubsub_endpoint:
      "wss://a1rq52k3rsx0d7-ats.iot.eu-west-2.amazonaws.com/mqtt",
  })
);

const App = () => {
  useEffect(() => {
    PubSub.subscribe("myTopic").subscribe({
      next: (data) => console.log("Message received", data),
      error: (error) => console.error(error),
      complete: () => console.log("Done"),
    });
    return () => {
      PubSub.unsubscribe();
    };
  });

  return <div className="App">hello world</div>;
};

export default App;
