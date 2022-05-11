import React, { useEffect, useState } from "react";
import "./Form.css";
import Button from "../Button/Button";

import getData from "../../utilities/requestController";

const data = {
  // prompt: "Write a poem about a dog wearing skis",
  prompt: "",
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

const Form = () => {
  const [propmt, setPropmt] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    data.prompt = propmt;
    const responsez = getData(data);
    console.log(responsez);
  }, []);

  function postRequest() {
    if (propmt === "") {
      setError("Prompt cannot be blank");
      return;
    }

    setError("");
    // setResponse(getData(data));
  }

  return (
    <main>
      <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
        <label>
          Text area:
          <textarea
            placeholder='Enter your request'
            onChange={(e) => {
              setPropmt(e.target.value);
            }}
          />
        </label>
      </form>

      <Button
        onSubmit={(event) => event.preventDefault()}
        onClick={postRequest}
      />
      <div>{response}</div>
    </main>
  );
};

export default Form;
