import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Name: " + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;
