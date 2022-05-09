import React from "react";
import "./Form.css";
import Button from "../Button/Button";

const Form = () => {
  return (
    <main>
      <form autoComplete='off' onSubmit={(e) => e.preventDefault()}>
        <label>
          Text area:
          <textarea />
        </label>
      </form>

      <Button onSubmit={(event) => event.preventDefault()} />
    </main>
  );
};

export default Form;
