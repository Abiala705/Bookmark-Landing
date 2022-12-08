import classes from "./Hero.module.css";
import logo from "../assets/illustration-hero.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section className={`pt-5 ` + classes["bg-image"]}>
      <div className="row ">
        <div className={classes.hero + ` col-12 col-md-6 order-md-1`}>
          <img src={logo} className="img-fluid" />
        </div>
        <div className="px-2 text-center text-md-start col-12 col-md-6 order-md-0">
          <h1 className="pt-md-5 px-md-5">A Simple Bookmark Manager</h1>
          <p className="pt-md-3 px-md-5">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="text-center row justify-content-around px-4">
            <Button className={classes.chrome + ` col-5`}>
              Get it on Chrome
            </Button>
            <Button className={classes.firefox + ` col-5`}>
              Get it on Firefox
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
