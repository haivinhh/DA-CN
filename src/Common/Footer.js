import React, { Component } from "react";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact"; //bootstrap
import logo from "../img/logo.jpg";
import bocongthuong from "../img/bocongthuong.jpg";
import { Link } from "react-router-dom";// để điều hướng

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <CDBFooter className="shadow">
          <CDBBox
            display="flex"
            flex="column"
            className="mx-auto py-5"
            style={{ width: "90%" }}
          >
            <CDBBox
              display="flex"
              justifyContent="between"
              className="flex-wrap"
            >
              <CDBBox style={{marginTop:"40px"}}>
                <a href="/" className="d-flex align-items-center p-0 text-dark">
                  <img src={logo} width="200px"style={{boxShadow:"5px 10px #C0C0C0"}}  />
                </a>

                <CDBBox display="flex" className="mt-4" margin="15px">
                  <CDBBtn flat color="dark">
                    <CDBIcon fab icon="facebook-f" href="#" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3">
                    <CDBIcon fab icon="twitter" href="#" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                    <CDBIcon fab icon="instagram" href="#" />
                  </CDBBtn>
                </CDBBox>
              </CDBBox>
              <CDBBox style={{marginTop:"40px"}}>
                <p className="h5 mb-4" style={{ fontSize: "25px" }}>
                  MCase
                </p>
                <CDBBox
                  flex="column"
                  style={{ cursor: "pointer", padding: "0" }}
                >
                  <CDBFooterLink>
                    <Link
                      to={"/"}
                      className="text-black"
                      style={{ textDecoration: "none",fontSize: "20px" }}
                    >
                      Trang chủ
                    </Link>
                  </CDBFooterLink>
                  <CDBFooterLink><Link
                      to={"/products"}
                      className="text-black"
                      style={{ textDecoration: "none",fontSize: "20px" }}
                    >
                      Sản phẩm
                    </Link></CDBFooterLink>
                </CDBBox>
              </CDBBox>
              <CDBFooterLink>
                <img src={bocongthuong} width="200px" />
              </CDBFooterLink>
              <CDBBox>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9543420070145!2d106.67563805049893!3d10.738002462800189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1668964773928!5m2!1svi!2s"
                  width="400"
                  height="250"
                  frameborder="0"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                ></iframe>
              </CDBBox>
            </CDBBox>
            <small className="text-center mt-5">
              &copy; STU, 2022. Nguyễn Hải Vinh - DH51904906, Hồ Bảo Trâm - DH51904701.
            </small>
          </CDBBox>
        </CDBFooter>
      </>
    );
  }
}
export default Footer;
