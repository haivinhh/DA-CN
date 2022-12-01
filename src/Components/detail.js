import React, { Component } from "react";
import Header from "../Common/Header";
import Footer from "../Common/Footer";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import {Link } from "react-router-dom";
import http from "../HttpCommon/http";
import cart from "../img/cart.png";
import { ListGroupItem } from "react-bootstrap";



class DetailProduct extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {//dùng để lưu một biến khi thay đổi sẽ được load lại
      case: {},
      caseId: window.location.href.split("/")[4],
      count: 1,
      // maxProdPage: 10,
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.tanglen = this.tanglen.bind(this);
    this.giam = this.giam.bind(this);
    this.changeCount = this.changeCount.bind(this);
    this.alertCart = this.alertCart.bind(this);
  }

  
 
  componentDidMount() {//dùng để load dữ liệu 1 lần trong đời của component
    window.scrollTo(0, 0);
    console.log(window.location.href.split("/")[4]);
    let productId = window.location.href.split("/")[4];

    http
      .get("/product.php?action=findOne&productId=" + productId)
      .then((response) => {
        console.log(response.data);
        this.setState({ case: response.data[0] });
      });
  }
  
  alertCart(message) {//dùng để hiện thông báo
    alert(message);
  }
  tanglen() {//hàm tang so luong san pham
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  }
  giam() {
    if (this.state.count > 1) {//ham giam so luong san pham
      this.setState({ count: this.state.count - 1 });
    }
  }
  changeCount(e) {// dổi số lượng trong textbox
    console.log(e.target.value);
    const c = parseInt(e.target.value);
    if (c > 0) {
      this.setState({ count: c });
    }
  }

  render() {
    const { content, id, image, name, price} = this.state.case;

    return (
      <>
        <Header />
        <Container
          style={{
            marginTop: "200px",
            marginBottom: "100px",
            borderRadius: "25px",
            border: "2px solid #cccccc",
            padding: "20px",
            boxShadow: "5px 10px #888888",
          }}
        >
          
          <h1 style={{marginLeft:"250px"}}>CHI TIẾT SẢN PHẨM</h1>
          <Row>
            <Col md={3}>
              <Card.Img
                style={{ borderRadius: "10% 10% 10% 10% / 11% 10% 10% 10% " , marginLeft:"50px"}}
                variant="top"
                src={image}
              />
            </Col>
            <Col md={9} style={{ width: "50rem", margin: "50px" }}>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{content}</Card.Text>
              <ListGroup variant="flush">
                <Card.Text>
                  <b style={{color:"red"}}>{price}đ</b>{" "}
                </Card.Text>
                <Row
                  xs="auto"
                  style={{
                    marginLeft: "300px",
                    width: "50%",
                    borderRadius: "0px",
                  }}
                >
                  <Row>
                    <InputGroup className="mb-3">
                      <Col md={3} style={{ marginLeft: "10px" }}>
                        <Button
                          onClick={this.giam}
                          variant="outline-dark"
                          style={{ width: "37px" }}
                        >
                          -
                        </Button>
                      </Col>
                      <Col md={3}>
                        <Form.Control
                          style={{
                            width: "45px",
                            textAlign: "center",
                            marginLeft: "3px",
                          }}
                          value={this.state.count}
                          aria-describedby="basic-addon1"
                          onChange={this.changeCount}
                        />
                      </Col>
                      <Col md={3} style={{ marginLeft: "13px" }}>
                        <Button onClick={this.tanglen} variant="outline-dark">
                          +
                        </Button>
                      </Col>
                    </InputGroup>
                  </Row>
                </Row>
                <ListGroupItem>
                  <Col md="auto" style={{ marginRight: "10px" }}>
                    <Button
                      variant="light"
                      
                      style={{ boxShadow: "5px 5px #C0C0C0" }}
                    >
                      <Link className="text-white" >
                        <img src={cart} width="40px" />
                      </Link>
                    </Button>{" "}
                    <Button  variant="light" style={{marginLeft:"10px",boxShadow: "5px 5px #C0C0C0", height:"51px"}}>
                          <b>Thêm vào giỏ hàng</b>
                        </Button>{" "}
                  </Col>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default (DetailProduct);
