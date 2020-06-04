import React , {Component} from "react"

import { Container , Navbar , Col } from "react-bootstrap"

export default class Footer extends Component{

    render(){

        let fullYear= new Date().getFullYear();
        let companyName="Abhinav"
       
        return(
            <Navbar  fixed="bottom" bg="dark" variant="dark">
                    <Container>

                        <Col lg={12} className="text-center text-muted">
                            <div>{fullYear} - {fullYear+1} All Rights Reserved By {companyName}</div>
                        </Col>

                    </Container>

            </Navbar>
        );
    }
}