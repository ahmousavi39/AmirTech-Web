import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, Form, Offcanvas } from 'react-bootstrap';
import { BsLinkedin, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs"
import styles from './Navbar.module.css';
import { Link, useLocation } from "react-router-dom";


const NavbarCom = (props) => {
    let currentWidth = window.innerWidth;
    let location = useLocation();
    window.addEventListener("resize", function () {
        currentWidth = window.innerWidth;
    });

    useEffect(() => {
        const renderLocation = e => {
            props.getLocation(location)
        };

        renderLocation();
    }, [location])


    return (
        <div>
            <Navbar bg="transparent" expand="lg" className={styles.navbar} id={styles.desktop} >
                <Container fluid >
                    <Navbar.Collapse id="navbarScroll">
                        <Navbar.Brand><strong className={styles.brandName}>AmirTech</strong> <span id={styles.logoDivider}></span>
                        </Navbar.Brand>
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px', marginLeft: '15px' }}
                            navbarScroll
                        >
                            <Link className={styles.navbarlink} to="/">Home</Link>
                            <Link className={styles.navbarlink} to='/articles'>Articles</Link>
                            <Link className={styles.navbarlink} to="/podcasts">Podcasts</Link>
                            <Link className={styles.navbarlink} to="/courses">Courses</Link>
                            <Link className={styles.navbarlink} to="/open-source-projects">Open-Source-Projects</Link>
                        </Nav>
                        <Form className="d-flex" style={{ marginBottom: '7px' }}>
                            <a className={styles.socialMediaIcons} href='https://www.youtube.com/channel/UC9x85MwN51yBybk19Pv2tJg'><BsYoutube className={styles.socialMediaIcons}></BsYoutube></a>
                            <a className={styles.socialMediaIcons} href='https://www.twitter.com/amirtech_net'><BsTwitter className={styles.socialMediaIcons}></BsTwitter></a>
                            {/* <a className={styles.socialMediaIcons} href='https://www.facebook.com/amirtech.net'><BsFacebook className={styles.socialMediaIcons}></BsFacebook></a> */}
                            <a className={styles.socialMediaIcons} href='https://www.instagram.com/amirtech_net'><BsInstagram className={styles.socialMediaIcons}></BsInstagram></a>
                            <a className={styles.socialMediaIcons} href='https://www.linkedin.com/in/amirtechnet'><BsLinkedin className={styles.socialMediaIcons}></BsLinkedin></a>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >

            <Navbar bg="transparent" expand={false} id={styles.mobile}>
                <Container fluid style={{ margin: '0', padding: '0' }}>
                    <Navbar.Brand><Navbar.Toggle aria-controls="offcanvasNavbar" className={styles.toggleIcon} style={{ border: "none", boxShadow: "0 0 0 0rem" }} /> <strong className={styles.brandName}>AmirTech</strong></Navbar.Brand>
                    <Form className="d-flex" style={{ marginBottom: '5px' }}>
                        <a className={styles.socialMediaIcons} href='https://www.twitter.com/amirtech_net'><BsTwitter className={styles.socialMediaIcons}></BsTwitter></a>
                        {/* <a className={styles.socialMediaIcons} href='https://www.facebook.com/amirtech.net'><BsFacebook className={styles.socialMediaIcons}></BsFacebook></a> */}
                        <a className={styles.socialMediaIcons} href='https://www.youtube.com/channel/UC9x85MwN51yBybk19Pv2tJg'><BsYoutube className={styles.socialMediaIcons}></BsYoutube></a>
                        <a className={styles.socialMediaIcons} href='https://www.instagram.com/amirtech_net'><BsInstagram className={styles.socialMediaIcons}></BsInstagram></a>
                        <a className={styles.socialMediaIcons} href='https://www.linkedin.com/in/amirtechnet'><BsLinkedin className={styles.socialMediaIcons}></BsLinkedin></a>
                    </Form>
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                        style={{ maxWidth: '70%' }}
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1">
                                <Link className={styles.navbarlink} to="/">Home</Link>
                                <Link className={styles.navbarlink} to="/articles">Articles</Link>
                                <Link className={styles.navbarlink} to="/podcasts">Podcasts</Link>
                                <Link className={styles.navbarlink} to="/courses">Courses</Link>
                                <Link className={styles.navbarlink} to="/open-source-projects">Open-Source-Projects</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
export default NavbarCom;