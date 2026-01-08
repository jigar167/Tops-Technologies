import Hello from "./tasks/Hello";
import JSXExample from "./tasks/JSXExample";
import Greeting from "./tasks/Greeting";
import WelcomeMessage from "./tasks/WelcomeMessage";
import UserCard from "./tasks/UserCard";
import Counter from "./tasks/Counter";
import ClickButton from "./tasks/ClickButton";
import VotingEligibility from "./tasks/VotingEligibility";
import FruitList from "./tasks/FruitList";
import UserForm from "./tasks/UserForm";


function App() {
  return (
    <div style={{ padding: "20px" }}>

      {/* 1. Hello React */}
      {/* <Hello /> */}

      {/* 2. JSX Example */}
      {/* <JSXExample /> */}

      {/* 3. Props Example */}
      {/* <Greeting name="Jigar" /> */}

      4. Class Component
      <WelcomeMessage />

      {/* 5. User Card */}
      {/* <UserCard name="Jigar" age={22} location="India" /> */}

      {/* 6. Counter */}
      {/* <Counter /> */}

      {/* 7. Click Button */}
      {/* <ClickButton /> */}

      {/* 8. Conditional Rendering */}
      {/* <VotingEligibility age={20} /> */}

      {/* 9. List Rendering */}
      {/* <FruitList /> */}
      

      {/* 10. Form */}
      {/* <UserForm /> */}

    </div>
  );
}

export default App;
