import React, { Component } from "react";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import http from "../HttpCommon/http";
import { Link } from "react-router-dom";
import cart from "../img/cart.png";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Dropdown } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      cases: [],
      value: 8,
      page: 1,
      totalPages: 1,
    };
    this.loadData = this.loadData.bind(this);
    this.clickPage = this.clickPage.bind(this);

    this.componentDidMount = this.componentDidMount.bind(this);
    this.loadDataFromCate = this.loadDataFromCate.bind(this);
  }

  clickPage(e) { //hàm dùng để chuyển trang
    console.log(e.target.text);
    this.setState({ page: e.target.text });
  }

  loadData() {
    // post put delete
    http.get(`/product.php`).then((response) => {
      console.log(Math.ceil(response.data.length / this.state.value));
      this.setState({ cases: response.data });
      this.setState({
        totalPages: Math.ceil(response.data.length / this.state.value),
      });
    });
  }
  loadDataFromCate() {//hàm dùng để  load dữ liệu từ phân loại khi ấn váo cate
    // post put delete
    http
      .get(
        `/cate.php?action=findProductByCateId&cateId=` +
          window.location.href.split("/")[4]
      )
      .then((response) => {
        console.log(Math.ceil(response.data.length / this.state.value));
        this.setState({ cases: response.data });
        this.setState({
          totalPages: Math.ceil(response.data.length / this.state.value),
        });
      });
  }

  componentDidMount() {
    console.log(this.props.cateId);
    document.title = "MCase";
    if (this.props.cateId) {
      this.loadDataFromCate();
    } else {
      this.loadData();
    }
  }

  render() {
    let listPage = [];
    for (let index = 0; index < this.state.totalPages; index++) {
      const value2 = index + 1;
      listPage.push(
        <Pagination.Item onClick={this.clickPage} value={value2}>
          {value2}
        </Pagination.Item>
      );
    }
    const listCase = this.state.cases
      .slice(
        this.state.value * this.state.page - this.state.value,
        this.state.value * this.state.page
      )
      .map((value) => (
        <>
          <Col sm={3}>
            <Card style={{ width: "15rem", marginTop: "20px" }}>
              <Link className="text-white" to={"/detail/" + value.id}>
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
                <Card.Text style={{ color: "red" }}>{value.price}đ</Card.Text>

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
          <Container>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Màu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">trong suốt</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">vàng</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">đỏ</Dropdown.Item>
                  <Dropdown.Item href="#/action-4">xanh</Dropdown.Item>
                  <Dropdown.Item href="#/action-5">đen</Dropdown.Item>
                  <Dropdown.Item href="#/action-6">xanh lá</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Giá
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">180,000đ</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">220,000đ</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Bộ sưu tập
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Drew</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Dino</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Mcase</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                  Loại
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">trơn</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Sticker</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">hình</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Button variant="primary" style={{ marginRight: "50px" }}>
                Tìm kiếm
              </Button>
            </Col>
          </Row>
          <Row style={{ marginLeft: "50px" }}>{listCase}</Row>
          <Row>
            <Col className="d-flex justify-content-center py-3">
              <Pagination>
                

                {listPage}

                
              </Pagination>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default Products;
