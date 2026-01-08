function UserCard({ name, age, location }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "200px" }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
