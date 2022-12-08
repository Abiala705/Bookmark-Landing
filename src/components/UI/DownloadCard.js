import { Button } from "react-bootstrap";
import "./DownloadCard.css";

const DownloadCard = (props) => {
  return (
    <div className="card col-12 col-md-4 px-2 py-4 text-center">
      <div>
        <img src={props.src} className="w-50 py-4" />
      </div>

      <h3>{props.title}</h3>
      <p className="pb-4">Minimum version {props.version}</p>
      <div>
        <Button className="button w-80">Add & Install Extension</Button>
      </div>
    </div>
  );
};

export default DownloadCard;
