import { React } from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Home = () => {

    return (
        <div>
            <Jumbotron className="text-center"> 
                <h2> Hello, world!</h2>
                <p> This id Content area</p>
                <Container>
                    <Button color="primary" outline>Start Using....</Button>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Home; 