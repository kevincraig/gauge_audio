import React, { PropsWithChildren } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type MenuCardProps = {
  imageUrl: string;
  title?: string;
  route?: string;
};

const MenuCard = ({
  imageUrl,
  title,
  route,
}: PropsWithChildren<MenuCardProps>) => {
  return (
    <CardGroup>
      <Col className={"align-self-center text-center p-3"}>
        <Link to="/player">
          <Card className={"menu-card"}>
            <>
              <Card.Img src={imageUrl} alt="Card image" />
            </>
          </Card>
        </Link>
        <span>{title}</span>
      </Col>
    </CardGroup>
  );
};

export default MenuCard;
