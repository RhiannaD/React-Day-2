import "./Like.css";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { AiOutlineLike } from "react-icons/ai";

const Like = () => {

  return (
    <>
      <Card>
        <CardBody>
          <>Like this Icon</>
          <br></br>
          <button className="btn">
            {" "}
            <AiOutlineLike size="40px" />
          </button>
        </CardBody>
      </Card>
    </>
  );

};

export default Like;
