import MainComponent from "./components/MaiComponent/MainComponent";
import { icon1, icon2, icon3, icon4 } from "./images";

function App() {
  const allData = {
    fontFamily: "'Signika', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    subHeadng: "4 Tips 4",
    headign: "Brand Identity",
    data: [
      {
        icon: icon1,
        title: "Identify Yourself with A Face",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: icon2,
        title: "Being Authenic is important",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,

        bg: "#FF9772",
      },
      {
        icon: icon3,
        title: "Provide seamless service",
        info: `There are many companies in today's market that have "maskots" who act as icons for there overall brand image`,
        bg: "#8A6AD8",
      },
      {
        icon: icon4,
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
