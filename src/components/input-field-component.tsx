export type InputFieldComponentProps = {
  id: string;
  labelText: string;
  type: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValidate: (value: string) => boolean;
  warningMessage: string;
};

const InputFieldComponent = (props: InputFieldComponentProps) => {
  const { id, labelText, type, value, onChange, isValidate, warningMessage } =
    props;

  return (
    <div style={{ marginBottom: 12, height: 50}}>
      <label style={{ fontSize: 12, display: "block" }} htmlFor={id}>
        {labelText}
      </label>
      <input style={{width: "80%"}} id={id} type={type} value={value} onChange={onChange} />
      {isValidate(value) ? null : (
        <p style={{ color: "red", fontSize: 8 }}>{warningMessage}</p>
      )}
    </div>
  );
};

export default InputFieldComponent;