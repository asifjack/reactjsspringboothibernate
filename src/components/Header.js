import React from "react";
import { Card, CardBody } from "reactstrap";

const Header = () => {
    return (
        <div>
            <Card className="bg-warning my-3">
                <CardBody>
                    <h1 className="text-center">Welcome to Course Application </h1>
                </CardBody>
            </Card>
        </div>
    )
}

export default Header