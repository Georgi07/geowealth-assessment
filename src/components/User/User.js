import "./User.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postsActions";
import { Button, Form, Collapse, Accordion, Card } from "react-bootstrap";
import Loader from "react-loader-spinner";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function User({ user }) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    streetAddress: user.address.street,
    cityAddress: user.address.city,
    phone: user.phone,
    website: user.website,
  });
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };
  const getUsersPost = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(user.id));
  };
  return (
    <div className="User">
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <FontAwesomeIcon
                icon={faUser}
                style={{ fontSize: "22px", marginRight: "5px" }}
              />
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Street Address:</Form.Label>
                  <Form.Control
                    type="text"
                    name="streetAddress"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>City Address:</Form.Label>
                  <Form.Control
                    type="text"
                    name="cityAddress"
                    value={formData.cityAddress}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Website:</Form.Label>
                  <Form.Control
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Button className="btn btn-primary mr-2" variant="primary" type="submit" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button
                  className="btn btn-primary mr-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  onClick={getUsersPost}
                >
                  Get users posts
                </Button>
                {posts.loading ? (
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={50}
                    width={50}
                    style={{ margin: "0 auto" }}
                  />
                ) : ("")}
                {posts.posts.id === user.id ? (
                  <>
                    <Button
                      onClick={() => setOpen(!open)}
                      aria-controls="example-collapse-text"
                      aria-expanded={open}
                    >
                      Posts
                    </Button>
                    <Collapse in={open}>
                      <div id="example-collapse-text">
                        <h6>{posts.posts.title}</h6>
                        <p>{posts.posts.body}</p>
                      </div>
                    </Collapse>
                  </>
                ) : null}
              </Form>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}
export default User;
