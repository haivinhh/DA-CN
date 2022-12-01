import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import http from "../HttpCommon/http";
import { Link } from "react-router-dom";
import cart from "../img/cart.png";


class Home extends Component {
  constructor(props) {
    super(props);
    // const { data } = props;
    this.state = {
      count: 0,
      cases: [],
    };
    this.loadData = this.loadData.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  loadData() {//hàm load tất cả dữ liệu từ data
    // post put delete
    http.get(`/product.php`).then((response) => {
      console.log(response);
      this.setState({ cases: response.data });
    });
  }

  componentDidMount() {
    document.title = "MCase";
    this.loadData();
  }

  render() {
    const listCase = this.state.cases.slice(8, 16).map((value) => (
      <>
        <Col sm={3}>
          {" "}
          <Card style={{ width: "15rem", marginTop: "50px" }}>
            <Link
              className="text-white"
              to={"/detail/" + value.id}
              state={{ from: "occupation" }}
            >
              <Card.Img
                variant="top"
                style={{ borderRadius: "10% 10% 46% 0% / 0% 0% 30% 10% " }}
                src={value.image}
              />
            </Link>
            <Card.Body>
              <Link
                className="text-black"
                style={{ textDecoration: "none" }}
                to={"/detail/" + value.id}
              >
                <Card.Title>{value.name}</Card.Title>
              </Link>
              <Card.Text style={{color:"red"}} >{value.price}đ</Card.Text>

              <Link className="text-white" to={"/detail/" + value.id}>
                <Button
                  variant="light"
                  style={{ boxShadow: "5px 5px #C0C0C0" }}
                >
                  <img src={cart} width="20px" alt="" />
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </>
    ));

    return (
      <>
        <Header />
        
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner1.png"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="banner2.png"
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
        <div style={{ margin: "70px" }}></div>
        <Container>
          <Row>
            <p style={{ fontSize: "3rem" }}>
              <b>
                SẢN PHẨM NỔI BẬT
              </b>
            </p>
          </Row>
          <Row style={{marginLeft:"50px"}}>{listCase}</Row>
        </Container>

        <div style={{ margin: "150px" }}></div>
        
        <Footer />
      </>
    );
  }
}
export default Home;
