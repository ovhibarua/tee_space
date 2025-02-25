function Input(pass) {
  const { inputType, inputName, placeHolder } = pass;
  return (
    <input
      placeholder={placeHolder}
      className="py-2.5 px-5"
      type={inputType}
      name={inputName}
      id=""
    />
  );
}

export default Input;
