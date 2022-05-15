import { useEffect, useState } from 'react';
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
  const [responses, setResponse] = useState(JSON.parse(localStorage.getItem('responses')) || []);
  const [prompts, setPropmts] = useState(JSON.parse(localStorage.getItem('prompts')) || []);
  const [currentPrompt, setCurentPropmt] = useState('');

  async function postRequest() {
    if (currentPrompt === '') {
      setError('Prompt cannot be blank');
      return;
    }

    setError('');
    data.prompt = currentPrompt;
    const res = await getData(data);
    setPropmts([currentPrompt, ...prompts]);
    setResponse([res, ...responses]);
    // empty textarea
    setCurentPropmt('');
  }

  useEffect(() => {
    localStorage.setItem('prompts', JSON.stringify(prompts));
  }, [prompts]);
  useEffect(() => {
    localStorage.setItem('responses', JSON.stringify(responses));
  }, [responses]);

  const clearLocalStorage = () => {
    localStorage.clear();
    setPropmts([]);
    setResponse([]);
  };

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
      {/* {(!prompts && !responses) ? } */}
      <Responses responses={responses} prompts={prompts} />
      <button onSubmit={(event) => event.preventDefault()} onClick={() => clearLocalStorage()}>
        Clear
      </button>
    </main>
  );
};

export default Form;
