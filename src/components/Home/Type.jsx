import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "A Data Scientist",
              "A Machine Learning Specialist",
              "A Credit risk Analyst",
              "A Sofware Developer",
              "A Kenyan"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type