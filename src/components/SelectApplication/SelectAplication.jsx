import './SelectAplication.css';

const options = [
  {
    label: 'Select your application',
    value: '',
    disabled: true
  },
  {
    label: 'Text to command',
    value: 'Convert this text to a programmatic command:\n\n'
  },
  {
    label: 'Grammatical Standard English',
    value: 'Correct this to standard English:\n\n'
  },
  {
    label: 'English to other languages',
    value: 'Translate this into 1. French, 2. China and 3. Spain:\n\n'
  },
  {
    label: 'Analogy maker',
    value: 'Create an analogy for this phrase:\n\n'
  }
];

const SelectAplication = (props) => {
  const { currentApplication, onChange } = props;
  return (
    <div className="select-container">
      <select value={currentApplication} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectAplication;
