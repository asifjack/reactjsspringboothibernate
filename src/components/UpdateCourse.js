import React, { Fragment, useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input, FormText, Container } from 'reactstrap';
import Axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from "react-toastify";

const UpdateCourse = ({ match }) => {
    // state here 
    const [values, setValues] = useState({});
    const { id, title, description } = values;

    useEffect(() => {
        preload(match.params.id);
    }, []);

    const preload = (id) => {
        Axios.get(`${base_url}/courses/${id}`).
            then((res) => {
                console.log("Preloooooooooooooooooooooooooooooooooooooooooooooooooooooooood" + res.data.id);
                setValues({ ...values, id: res.data.id, title: res.data.title, description: res.data.description })
            })
            .catch((error) => { console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + error); })

    };

    const onHandleChange = name => e => {
        setValues({ ...values, [name]: e.target.value })
    }

    //TODO: work on it
    const onSubmitForm = (event) => {
        console.log(id, title, description);
        event.preventDefault();
        editCourse(values)

    };

    const editCourse = (data) => {
        console.log(data.title + "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        Axios.put(`${base_url}/courses`, data)
            .then((r) => {
                console.log("rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr" + r);
                toast.success("Record Updated Successfully..");

            })
            .catch((er) => { console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrrrrrrrrr" + er); })
    }

    return (
        <Fragment>
            <h2 className="text-center my-2">Update Course Detail</h2>
            <Form onSubmit={onSubmitForm}>
                <FormGroup>
                    <Label for="id">Course Id</Label>
                    <Input type="text"
                        name="id"
                        id="id"
                        value={id}
                        // onChange={(e) => { setValues({ ...values, id: e.target.value }) }}
                        onChange={onHandleChange("id")}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Course Title</Label>
                    <Input type="text"
                        name="title"
                        id="title"
                        value={title}
                        // onChange={(e) => { setValues({ ...values, title: e.target.value }) }}
                        onChange={onHandleChange("title")}

                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Course Description </Label>
                    <Input type="textarea"
                        name="description"
                        id="description"
                        value={description}
                        // onChange={(e) => { setValues({ ...values, description: e.target.value }) }}
                        onChange={onHandleChange("description")}
                    />
                </FormGroup>
                <Container>
                    <Button color="success" type="submit" >UpdateCourse</Button>
                </Container>

            </Form>
        </Fragment>
    )
}

export default UpdateCourse;