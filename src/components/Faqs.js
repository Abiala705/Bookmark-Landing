import Accordions from "./UI/Accordions";
import { Button } from "react-bootstrap";

const Faqs = () => {
  return (
    <div className="row justify-content-center align-content-center pt-5">
      <div className="pt-4 text-center padding--center">
        <h3 className="py-1 pb-md-4">Frequently Asked Questions</h3>
        <p className="padding--center">
          Here are some of our FAQs. If you have any other questions you’d like
          answered please feel free to email us.
        </p>
      </div>
      <Accordions />
      <div className="text-center pb-5">
        <Button>More Info</Button>
      </div>
    </div>
  );
};

export default Faqs;
