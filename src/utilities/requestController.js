export default async function getData(prompt) {
  try {
    const response = await fetch(
      "https://api.openai.com/v1/engines/text-curie-001/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
        },
        body: JSON.stringify(prompt),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(data.choices[0].text);
        return data.choices[0].text;
      });
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
