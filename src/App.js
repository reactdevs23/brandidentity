import MainComponent from "./components/MaiComponent/MainComponent";

import Icon1 from "./images/Icon1";
import Icon2 from "./images/Icon2";
import Icon3 from "./images/Icon3";
import Icon4 from "./images/Icon4";

function App() {
  const allData = {
    fontFamily: "'Signika', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    subHeading: "4 Tips 4",
    heading: "Brand Identity",
    data: [
      {
        icon: <Icon1 color="#8A6AD8" />,
        title: "Identify Yourself with A Face",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: <Icon2 color="#FF9772" />,
        title: "Being Authenic is important",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,

        bg: "#FF9772",
      },
      {
        icon: <Icon3 color="#8A6AD8" />,
        title: "Provide seamless service",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: <Icon4 color="#FF9772" />,
        title: "You should be different",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#FF9772",
      },
    ],
  };
  return (
    <div
      style={{
        "--primaryColor": allData.primaryColor,
        "--secondaryColor": allData.secondaryColor,
        fontFamily: allData.fontFamily,
      }}
    >
      <MainComponent {...allData} />
    </div>
  );
}

export default App;
