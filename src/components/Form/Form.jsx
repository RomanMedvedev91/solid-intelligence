import React, { useEffect, useState } from 'react';
import './Form.css';
import Button from '../Button/Button';
import Response from '../Response/Response';

import getData from '../../utilities/requestController';

const data = {
  // prompt: "Write a poem about a dog wearing skis",
  prompt: '',
  temperature: 0.5,
  max_tokens: 64,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0
};

const Form = () => {
  // const [response, setResponse] = useState([]);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [prompt, setPropmt] = useState('');

  async function postRequest() {
    if (propmt === '') {
      setError('Prompt cannot be blank');
      return;
    }

    setError('');
    data.prompt = prompt;
    console.log(data.prompt);
    // setResponse([await getData(data), ...response]);
    const res = await getData(data);
    setResponse(res);
    console.log('response=>', res);
    setPropmt('');
  }

  // const renderReqests = (requests) =>
  //   requests.map((request) => <div>{request}</div>);

  return (
    <main>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label>
          Text area:
          <textarea
            placeholder="Enter your request"
            value={prompt}
            onChange={(e) => {
              setPropmt(e.target.value);
            }}
          />
        </label>
      </form>

      <Button onSubmit={(event) => event.preventDefault()} onClick={postRequest} />
      <div>prompt: {prompt}</div>
      <div> {response}</div>
      <Response response={response} />
    </main>
  );
};

export default Form;
