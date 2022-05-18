export default async function getData(prompt) {
  try {
    const response = await fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // eslint-disable-next-line no-undef
        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`
      },
      body: JSON.stringify(prompt)
    })
      .then((res) => res.json())
      .then((data) => {
        return data.choices[0].text;
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
