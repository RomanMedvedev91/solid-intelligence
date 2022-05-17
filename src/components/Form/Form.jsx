import { useEffect, useState } from 'react';
import './Form.css';
import Button from '../Button/Button';
import Responses from '../Response/Response';
import SelectAplication from '../SelectApplication/SelectAplication';
import Trash from '../../assets/Trash.svg';

import getData from '../../utilities/requestController';

const data = {
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
  const [currentApplication, setCurrentApplication] = useState('');

  async function postRequest() {
    if (currentPrompt === '') {
      setError('Prompt cannot be blank');
      return;
    }

    setError('');
    data.prompt = currentApplication + currentPrompt;
    console.log(data.prompt);
    console.log('2d', data.prompt);
    const res = await getData(data);
    setPropmts([currentPrompt, ...prompts]);
    setResponse([res, ...responses]);
    // empty textarea
    setCurentPropmt('');
  }

  // save to local storage
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

  const handleChangeApplication = (e) => {
    console.log(e.target.value);
    setCurrentApplication(e.target.value);
    setCurentPropmt(e.target.value);
  };

  return (
    <>
      <section className="section-form">
        <form className="form-container" autoComplete="off" onSubmit={(e) => e.preventDefault()}>
          <label>
            <SelectAplication
              currentApplication={currentApplication}
              onChange={handleChangeApplication}
            />
          </label>
          <label>
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
      </section>
      <section className="section-responses">
        <Responses
          responses={responses}
          prompts={prompts}
          setNewPrompts={setPropmts}
          setNewResponses={setResponse}
        />
        {responses.length >= 2 && (
          <button
            className="clearAll"
            onSubmit={(event) => event.preventDefault()}
            onClick={() => clearLocalStorage()}>
            clear all <img src={Trash} />
          </button>
        )}
      </section>
    </>
  );
};

export default Form;
