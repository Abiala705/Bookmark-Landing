import FormTemp from "./UI/FormTemp";
import "./FormSection.css";

const FormSection = () => {
  return (
    <section className="form-section px-5 text-center py-5 padding--center">
      <p className="padding--center">35,000+ already joined</p>
      <h2 className="padding--center">Stay up-to-date with what we’re doing</h2>
      <div>
        <FormTemp />
      </div>
    </section>
  );
};

export default FormSection;
