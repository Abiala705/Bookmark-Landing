import { Container, Tabs, Row, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import bookmark_1 from "../assets/illustration-features-tab-1.svg";
import bookmark_2 from "../assets/illustration-features-tab-2.svg";
import bookmark_3 from "../assets/illustration-features-tab-3.svg";
import { Button } from "react-bootstrap";
import "./BsTabs.css";

const BsTabs = () => {
  return (
    <Container className="py-4 row justify-content-center align-content-center ps-5">
      <Row className="row text-center">
        <Tabs
          justify-variant="pills"
          defaultActiveKey="tab-1"
          className="mb-1 p-0 row justify-content-center col-12"
        >
          <Tab eventKey="tab-1" title="Simple Bookmarking">
            <div className="row text-center justify-content-center">
              <div className="py-5 col-12 col-md-5">
                <img src={bookmark_1} className="img-fluid" />
              </div>
              <div className="py-2 text-center text-md-start col-12 col-md-5 ms-md-5">
                <h3 className="pt-md-5 pb-md-5">Bookmark in one click</h3>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <Button className="d-none d-md-block mt-md-5">More Info</Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="tab-2" title="Speedy Searching" className="">
            <div className="row text-center justify-content-center">
              <div className="py-5 col-12 col-md-5">
                <img src={bookmark_2} className="img-fluid" />
              </div>
              <div className="py-2 text-center text-md-start col-12 col-md-5 ms-md-5">
                <h3 className="pt-md-5 pb-md-5">Intelligent search</h3>
                <p>
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <Button className="d-none d-md-block mt-md-5">More Info</Button>
              </div>
            </div>
          </Tab>
          <Tab eventKey="tab-3" title="Easy Sharing" className="">
            <div className="row text-center justify-content-center align-content-center">
              <div className="py-5 col-12 col-md-5">
                <img src={bookmark_3} className="img-fluid" />
              </div>
              <div className="py-2 text-center text-md-start col-12 col-md-5 ms-md-5">
                <h3 className="pt-md-5 pb-md-5">Share your bookmarks</h3>
                <p>
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <Button className="d-none d-md-block mt-md-5">More Info</Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default BsTabs;
