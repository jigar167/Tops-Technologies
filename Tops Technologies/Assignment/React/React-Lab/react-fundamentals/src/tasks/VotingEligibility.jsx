function VotingEligibility({ age }) {
  return (
    <h2>
      {age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"}
    </h2>
  );
}

export default VotingEligibility;
