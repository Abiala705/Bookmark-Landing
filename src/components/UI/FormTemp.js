import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormTemp = () => {
  return (
    <Form className="row justify-content-center pt-md-3">
      <Form.Group
        className="mb-3 padding--center col-md-3"
        controlId="formBasicEmail"
      >
        <Form.Control type="email" placeholder="Enter your email address" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <div className="col-md-3">
        <Button variant="primary" type="submit" className="contact">
          Contact Us
        </Button>
      </div>
    </Form>
  );
};

export default FormTemp;
