export default function getData(prompt) {
  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify(prompt),
  })
    .then((res) => res.json())
    .then((data) => console.log(data.choices[0].text));
}
