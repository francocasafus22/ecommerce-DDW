function FormInput({
  icon,
  labelText,
  inputType,
  placeholder,
  value,
  onChangeFn,
  isRequired = true,
}) {
  return (
    <div className="flex flex-col text-gray-300 items-start mx-auto w-full">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <label className="">{labelText}</label>
      </div>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChangeFn}
        required={isRequired}
        className="w-full px-4 py-2 bg-gray-700 rounded-md"
      />
    </div>
  );
}

export default FormInput;
