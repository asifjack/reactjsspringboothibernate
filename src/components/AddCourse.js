import React, { Fragment, useState } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import { toast } from "react-toastify";
import Axios from 'axios';
import base_url from '../api/bootapi';

const AddCourse = () => {
    // state here  
    const [course, setCourse] = useState({})

    const handleForm = (e) => {
        e.preventDefault();
        console.log(course)
        saveCourse(course);
    }

    const saveCourse = (data) => {
        Axios.post(`${base_url}/courses`, data).
            then((response) => {
                console.log(response);
                setCourse({ id: "", title: "", description: "" })
                toast.success("Course Added Successfuly..", {
                    position: "top-right"
                })
            }).
            catch((error) => {
                toast.error("Course Not Added", {
                    position: "top-center"
                })
                console.log(error);

            })

    }

    return (
        <Fragment>
            <h2 className="text-center my-2">Fill Course Detail</h2>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <Label for="userId">Course Id</Label>
                    <Input type="text" name="userId" id="userId"
                        // onChange={(e) => { setCourse({ ...course, id: e.target.value }) }}
                        onClick={(e) => { setCourse({ ...course, id: e.target.value }) }}
                        placeholder="Enter Here........"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userId">Course Title</Label>
                    <Input type="text" name="title" id="title"
                        onChange={(e) => { setCourse({ ...course, title: e.target.value }) }}
                        placeholder="Enter Title Here........"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="userId">Course Description </Label>
                    <Input type="textarea" name="description" id="description"
                        onChange={(e) => { setCourse({ ...course, description: e.target.value }) }}
                        placeholder="Enter Description Here........"
                    />
                </FormGroup>
                <Container>
                    <Button type="submit" color="success" >AddCourse</Button>
                    <Button color="warning ml-2" type="reset" onClick={() => { setCourse({ id: "", title: "", description: "" }) }}>Clear</Button>
                </Container>

            </Form>
        </Fragment>
    )
}

export default AddCourse;