import chrome_image from "../../assets/logo-chrome.svg";
import firefox_image from "../../assets/logo-firefox.svg";
import opera_image from "../../assets/logo-opera.svg";
import DownloadCard from "./DownloadCard";

const cards = [
  { id: 1, title: "Add to Chrome", version: "62", src: chrome_image },
  { id: 2, title: "Add to Firefox", version: "56", src: firefox_image },
  { id: 3, title: "Add to Opera", version: "46", src: opera_image },
];

const DownloadCards = () => {
  const cardList = cards.map((card) => (
    <DownloadCard
      key={card.id}
      title={card.title}
      version={card.version}
      src={card.src}
    ></DownloadCard>
  ));

  return (
    <div className="pt-md-5">
      <div className="row gap-5 justify-content-center align-content-center">
        {cardList}
      </div>
    </div>
  );
};

export default DownloadCards;
