import { useState } from 'react';
import './Form.css';
import Button from '../Button/Button';
import Responses from '../Response/Response';

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
  const [error, setError] = useState('');
  const [responses, setResponse] = useState([]);
  const [prompts, setPropmts] = useState([]);
  const [currentPrompt, setCurentPropmt] = useState('');

  async function postRequest() {
    if (currentPrompt === '') {
      setError('Prompt cannot be blank');
      return;
    }

    setError('');
    data.prompt = currentPrompt;
    // console.log(data.prompt);
    const res = await getData(data);
    setPropmts([currentPrompt, ...prompts]);
    setResponse([res, ...responses]);

    console.log('responseS', responses);
    console.log('promptS', prompts);

    // empty textarea
    setCurentPropmt('');
  }

  return (
    <main>
      <form autoComplete="off" onSubmit={(e) => e.preventDefault()}>
        <label>
          Text area:
          <textarea
            placeholder="Enter your request"
            value={currentPrompt}
            onChange={(e) => {
              setCurentPropmt(e.target.value);
            }}
          />
        </label>
      </form>
      {error ? <div>{error}</div> : ''}
      <Button onSubmit={(event) => event.preventDefault()} onClick={postRequest} />
      <Responses responses={responses} prompts={prompts} />
    </main>
  );
};

export default Form;
