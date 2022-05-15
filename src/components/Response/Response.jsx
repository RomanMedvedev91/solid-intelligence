const Responses = (props) => {
  const { responses, prompts, setNewPrompts, setNewResponses } = props;

  const renderResponses = (prompts, responses) => {
    const clearCurentPrompt = (currentPromptIndex) => {
      const prompts = JSON.parse(localStorage.getItem('prompts'));
      const responses = JSON.parse(localStorage.getItem('responses'));
      prompts.splice(currentPromptIndex, 1);
      responses.splice(currentPromptIndex, 1);
      console.log('Updated prompts', prompts);
      console.log('Updated responses', responses);
      localStorage.setItem('prompts', JSON.stringify(prompts));
      localStorage.setItem('responses', JSON.stringify(responses));
      setNewPrompts(prompts);
      setNewResponses(responses);
    };

    return prompts.map((prompt, indx) => {
      return (
        <div key={prompt}>
          <button
            onSubmit={(event) => event.preventDefault()}
            onClick={() => clearCurentPrompt(indx)}>
            X
          </button>
          <div>PROMPT: {prompt}</div>
          <div>RESPONSE: {responses[indx]}</div>
          <br />
        </div>
      );
    });
  };
  return <div>{renderResponses(prompts, responses)}</div>;
};

export default Responses;
