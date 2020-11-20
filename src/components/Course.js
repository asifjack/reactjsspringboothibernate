import React, { useState } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Axios from "axios";
import base_url from '../api/bootapi';
import { toast } from 'react-toastify'

const Course = ({ course }) => {

    // const [values, setValues] = useState({})

    const deleteCourse = (courseId) => {
        if (window.confirm('Sure want to delete ? ')) {
            Axios.delete(`${base_url}/courses/${courseId}`)
                .then((res) => {
                    toast.success("Deleted Successfully..")
                })
                .catch((error) => { console.log("eeeeeeeeeeeeeeeeeeeeer" + error); })
        }
    }

    return (
        <Card>
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container>
                    <Button color="danger" onClick={() => { deleteCourse(course.id) }}>Delete</Button>

                    <Link to={"/edit/" + course.id} className="btn btn-success">Edit</Link>
                </Container>
            </CardBody>

        </Card>
    )
}

export default Course;