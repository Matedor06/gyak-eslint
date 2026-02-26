import { useEffect, useState } from "react";
import type { Champ } from "../types/Champ";
import apiClient, { baseURL } from "../api/apiClient";
import { toast } from "react-toastify";
import { Card, Carousel, Container, Row,} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
function AllChamp() {
  const [champs, setChamps] = useState<Champ[]>([]);

  useEffect(() => {
    apiClient
      .get("/champions")
      .then((response) => setChamps(response.data))
      .catch((error) => {
        toast.success("got it");
        console.log("asdf");
      });
  },[]);

  const generateCard = (champ:Champ) => {
    return(
        <>
        <Card style={{width:"18rem"}}>
            <Carousel>
                {champ.images.map((image, index) =>(
                    <Carousel.Item key={index}>
                        <img src={`${baseURL}/images/${image}`} style={{maxWidth:"300px"}}/>
                    </Carousel.Item>
                ))}
            </Carousel>
        <Card.Body>
                    <Card.Title>{champ.name}</Card.Title>
                    <Card.Text>
                        {champ.description}
                    </Card.Text>
        </Card.Body>
            </Card>

        </>
    )
  }
  return (
  <>
    <Container fluid>
        <Row>
            {champs.map((champ) => generateCard(champ))}
            </Row>
    </Container>
  </>
  )
}

export default AllChamp;
