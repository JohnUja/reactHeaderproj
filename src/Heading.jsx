import React from "react";

export default function Heading() {
  const date = new Date(2023, 1, 1, 13);
  const timeOfDay = date.getHours();

  const customStyle = {
    color: ""
  };

  let greetingText = () => {
    if (timeOfDay < 12) {
      customStyle.color = "red";
      return "Good morning";
    } else if (timeOfDay < 18) {
      customStyle.color = "orange";
      return "Good Afternoon";
    } else {
      customStyle.color = "yellow";
      return "Good Night";
    }
  };

  return (
    <h1 className="heading" style={customStyle}>
      {greetingText()}
    </h1>
  );
}
