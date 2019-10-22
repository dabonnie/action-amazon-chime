import * as core from "@actions/core";
import * as request from "request-promise-native";

async function run() {
  try {
    const message = core.getInput("message");
    const webhookUrl = core.getInput("webhook");
    const options = {
      method: 'POST',
      uri: webhookUrl as string,
      body: {
          Content: message as string
      },
      json: true
    };
    await request.post(options);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
