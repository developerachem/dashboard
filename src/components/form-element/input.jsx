/* eslint-disable react/prop-types */

function Input({ label }) {
  return (
    <label className="mb-5 block">
      <p className="mb-2 ms-1">{label}</p>
      <input
        type="text"
        className="input border rounded-md w-full"
        placeholder={"type" + label}
      />
    </label>
  );
}

export default Input;
