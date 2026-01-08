import { useState } from "react";

function ClickButton() {
  const [text, setText] = useState("Not Clicked");

  return (
    <button onClick={() => setText("Clicked!")}>
      {text}
    </button>
  );
}

export default ClickButton;
