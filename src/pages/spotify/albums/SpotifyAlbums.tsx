import React, { useState, useEffect } from "react";
import { useRedux } from "../../../hooks";
import { Outlet } from "react-router-dom";
import { albums } from "./albumData";
import { Album } from "../../../features/spotify/albums/types";
import {
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { CardImage, CardText, List } from "react-bootstrap-icons";

const SpotifyAlbums = () => {
  const { appSelector, dispatch } = useRedux();
  const { state } = appSelector((state) => ({
    album: state.album,
    state: state,
  }));

  const [album, setAlbum] = useState<Album>(albums[0]);
  // console.log("Album: " + album);

  return (
    <>
      <Container>
        <h6 className={"pb-0 mb-0"}>Albums</h6>
        <ListGroup horizontal className={"overflow-scroll pb-1"}>
          <ListGroup.Item style={{ backgroundColor: "#101010" }}>
            <AlbumCard />
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#101010" }}>
            <AlbumCard />
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#101010" }}>
            <AlbumCard />
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#101010" }}>
            <AlbumCard />
          </ListGroup.Item>
          <ListGroup.Item style={{ backgroundColor: "#101010" }}>
            <AlbumCard />
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
};

const AlbumCard = () => {
  return (
    <Card
      style={{ width: "12rem", backgroundColor: "#272727", color: "white" }}
    >
      <Card.Img variant="top" src={albums[0].images[0].url} />
      <Card.Body className={"text-start overflow-hidden text-nowrap"}>
        <Card.Text className={"overflow-ellipsis p-0 m-0 mb-1 fw-bold"}>
          {albums[0].name}
        </Card.Text>
        <Card.Text className={"text-muted"}>
          {albums[0].artists[0].name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export { SpotifyAlbums };
