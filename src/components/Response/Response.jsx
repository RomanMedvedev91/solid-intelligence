const Responses = (props) => {
  const { responses, prompts } = props;
  const renderResponses = (prompts, responses) => {
    return prompts.map((prompt, indx) => {
      return (
        <div key={prompt}>
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
