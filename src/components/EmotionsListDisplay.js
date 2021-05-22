import React, { useState } from "react";
import EmotionCard from "./EmotionCard";
import { makeStyles } from "@material-ui/core/styles";

const EmotionListDisplay = () => {
  const classes = useAppStyles();
  const [currentEmotionActive, setCurrentEmotionActive] = useState("surprise");
  const [level2Active, setLevel2Active] = useState(false);
  //simple emotions
  const emotionList = [
    "surprise",
    "bad",
    "afraid",
    "angry",
    "disgust",
    "sad",
    "happy",
  ];

  const level2Words = {
    surprise: ["shock", "confusion", "amazement", "excitement"],
    happy: [
      "playful",
      "content",
      "curiosity",
      "proud",
      "acceptance",
      "powerful",
      "care",
      "trust",
      "hope",
    ],
    sad: ["lonely", "vulnerable", "Despiar", "guilty", "depression", "hurt"],
    disgust: ["disapproval", "disdain", "sick", "repulsion"],
    angry: [
      "mistrust",
      "shame",
      "jealous",
      "mad",
      "irritation",
      "frustration",
      "distant",
      "critical",
    ],
    bad: ["bordedom", "busy", "stress", "tired"],
    afraid: ["scared", "anxious", "insecure", "weak", "shaky", "nervous"],
  };

  //colors for all emotions (would be in database)
  const emotionListColor = {
    surprise: "#FE886A",
    bad: "#A3DEE8",
    afraid: "#6ACBDE",
    angry: "#EEAFC5",
    disgust: "#F2E9D3",
    sad: "#DA8EC0",
    happy: "#F7CCD1",
  };

  const updateDisplay = (word) => {
    setCurrentEmotionActive(word);
    setLevel2Active(true);
  };

  //conditionally rendering next level of words, depending on what user clicked on
  return (
    <>
      <div className={classes.cards}>
        {!level2Active
          ? emotionList.map((emotion, delay) => {
              return (
                <EmotionCard
                  key={delay}
                  emotionClicked={updateDisplay}
                  delay={delay}
                  emotionWord={emotion}
                  color={emotionListColor[emotion]}
                />
              );
            })
          : level2Words[currentEmotionActive].map((emotion, delay) => {
              return (
                <EmotionCard
                  key={delay}
                  emotionClicked={() => console.log("nothing")}
                  delay={delay}
                  emotionWord={emotion}
                  color={"#FE886A"}
                />
              );
            })}
        <button onClick={() => setLevel2Active(false)}>Go back</button>
      </div>
    </>
  );
};

const useAppStyles = makeStyles({
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    fontFamily: "Open Sans",
  },
});

export default EmotionListDisplay;
