import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import {FormGroup, Label, Input, Button} from 'reactstrap';

class Email extends Component {
   
    render(){
        const isSubmitDisable = !this.props.email || !this.props.confirmEmail || this.props.email!== this.props.confirmEmail
        return (
            <Container>
                <Row>

                    <FormGroup>
                        <Label className="content-font email-fields" for="email">Email address</Label>
                        <Input
                            className="email-input"
                            type="email"
                            name="email"
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Label className="content-font email-fields" for="confirmEamil">Confirm email address</Label>
                        <Input
                            className="email-input adHoc-width"
                            type="email"
                            name="confirmEmail"
                            onChange={this.props.handleChange}
                        />
                    </FormGroup>
                </Row>
                 

                <Button className="btn-email-submit" disabled={isSubmitDisable} >Submit</Button>
            </Container>
        )
    }
}

export default Email;