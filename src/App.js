import { useState } from "react";
import MainComponent from "./components/MaiComponent/MainComponent";

import Icon1 from "./images/Icon1";
import Icon2 from "./images/Icon2";
import Icon3 from "./images/Icon3";
import Icon4 from "./images/Icon4";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Signika', sans-serif",
    bgColor: "#fff",
    textColor: "#000",
    numbersColor: "#000",

    subHeading: "4 Tips 4",
    heading: "Brand Identity",
    data: [
      {
        icon: <Icon1 color="#8A6AD8" />,
        title: "Identify Yourself with A Face",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        lineBg: "#8A6AD8",
        shadowColor: "rgba(0, 0, 0, 0.15)",
      },
      {
        icon: <Icon2 color="#FF9772" />,
        title: "Being Authenic is important",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,

        lineBg: "#FF9772",
        shadowColor: "rgba(0, 0, 0, 0.15)",
      },
      {
        icon: <Icon3 color="#8A6AD8" />,
        title: "Provide seamless service",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        lineBg: "#8A6AD8",
        shadowColor: "rgba(0, 0, 0, 0.15)",
      },
      {
        icon: <Icon4 color="#FF9772" />,
        title: "You should be different",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        lineBg: "#FF9772",
        shadowColor: "rgba(0, 0, 0, 0.15)",
      },
    ],
  });
  return (
    <div
      style={{
        "--bgColor": allData.bgColor,
        "--textColor": allData.textColor,
        "--numbersColor": allData.numbersColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
