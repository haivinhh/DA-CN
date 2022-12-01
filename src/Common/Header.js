import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import logo from "../img/logo.jpg";
import search from "../img/search.png";
import cart from "../img/cart.png";
import { Dropdown } from "react-bootstrap";
import http from "../HttpCommon/http";
import user from "../img/user.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { //dùng để lưu một biến khi thay đổi sẽ được load lại
      cate: [],
     
    };
    this.loadCate = this.loadCate.bind(this); //khai báo biến muốn lưu
  }
  loadCate() { //hàm để gọi api lấy ds product theo phân loại
    // post put delete
    http.get(`/cate.php?action=findAll`).then((response) => {
      console.log(response.data);
      this.setState({ cate: response.data });
    });
  }
  componentDidMount() { //dùng để load dữ liệu 1 lần trong đời của component
    this.loadCate();
  }

  render() {
    const cates = this.state.cate.map((value) => ( //map dùng để chuyển dữ liệu của các dữ liệu dc khai báo trong state để xuất ra màn hình và ráng
    //cho value để lấy được từng giá trị trong data
      <>
        
        
        <NavDropdown.Item>
          <Link
          onClick={()=>{window.location.href = "/products/"+value.id}}
            to={"/products/"+value.id}
            className="text-black"
            style={{ textDecoration: "none" }}
          >
            {value.content}
          </Link>
        </NavDropdown.Item>
      </>
    ));
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={logo}
                  style={{ boxShadow: "5px 10px #C0C0C0" }}
                  margin="10px"
                  height={"50px"}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link
                    to={"/"}
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    Trang chủ
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to={"/products"}
                    className="text-black"
                    style={{ textDecoration: "none" }}
                  >
                    Sản phẩm
                  </Link>
                </Nav.Link>
                <NavDropdown
                  title="Bộ Sưu Tập"
                  id="navbarScrollingDropdown">
                  {cates}
                </NavDropdown>
              </Nav>
              <Form className="d-flex" style={{ marginRight: "20px" }}>
                <Form.Control
                  style={{
                    height: "40px",
                    marginTop: "10px",
                    boxShadow: "5px 5px #C0C0C0",
                  }}
                  type="search"
                  placeholder="Tìm kiếm"
                  className="me-2"
                  aria-label="Search"
                />
                <Button
                  variant="light"
                  style={{
                    boxShadow: "5px 5px #C0C0C0",
                    height: "40px",
                    marginTop: "10px",
                    marginLeft: "30px"
                  }}
                >
                  <img src={search} width="25px" />
                </Button>
                <Link className="text-white">
                <Button
                    variant="light"
                    style={{
                      boxShadow: "5px 5px #C0C0C0",
                      height: "40px",
                      marginTop: "10px",
                      marginLeft: "30px",
                    }}
                  >
                    <img src={cart} width="25px" />
                  </Button>
                </Link>
                <Dropdown className="w-100" style={{ marginTop: "10px"}}>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                    <img src={user} width="30px" />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Link
                      className="text-decoration-none text-black">
                      <Button variant="light">
                        Login
                      </Button>
                    </Link>
                    <Link>
                      <Button variant="light">
                        Logout
                      </Button>
                    </Link>
                  </Dropdown.Menu>
                </Dropdown>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default Header;
