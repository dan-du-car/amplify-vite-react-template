import React from "react";
import ReactDOM from "react-dom/client";
import { Authenticator, SelectField } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

Amplify.configure(outputs);


const formFields = {
  signUp: {
    username: {
      order:1
    },
    email: {
      order: 2
    },
    phone_number: {
      order: 3
    },
    password: {
      order: 4
    },
    confirm_password: {
      order: 5
    },   
  },
 }

ReactDOM.createRoot(document.getElementById("root")!).render(    
  <React.StrictMode>
    <Authenticator
      formFields={formFields}
      components={{
        SignUp: {
          FormFields() {
            return (
              <>
                <Authenticator.SignUp.FormFields />
                <SelectField
                  label="Role"
                  name="custom:role">
                  <option value="BCO">BCO</option>
                  <option value="Vessel Operator">Vessel Operator</option>
                  <option value="Transportation Operator">Transportation Operator</option>
                  <option value="Terminal Operator">Terminal Operator</option>
                </SelectField>

                <SelectField
                  label="Your Organization"
                  name='custom:organization'>
                    <option value="Leidos">Leidos</option>
                </SelectField>
              </>
            );
          },
        },
      }}
    >
      <App />
    </Authenticator>
  </React.StrictMode>
);
