import React from "react";
import { Col, Row } from "react-bootstrap";

type AlbumInfoProps = {
  albumName: string;
  artistName: string;
  trackName: string;
  className?: string;
};

const AlbumInfo = ({
  className,
  albumName,
  artistName,
  trackName,
}: AlbumInfoProps) => {
  return (
    <Row className={className}>
      <Col>
        <div className="album-info">
          <h1>{trackName}</h1>
          <h2>{albumName}</h2>
          <h2>{artistName}</h2>
        </div>
      </Col>
    </Row>
  );
};

export default AlbumInfo;
