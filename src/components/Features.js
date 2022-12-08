import BsTabs from "./BsTabs.js";

const Features = () => {
  return (
    <section id="features" className="pt-5 text-center ">
      <div className="pt-5 text-center padding--center">
        <h2>Features</h2>
        <p className="px-md-5 ">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div>
        <BsTabs />
      </div>
    </section>
  );
};

export default Features;
