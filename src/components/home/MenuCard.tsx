import React, { PropsWithChildren } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";

type MenuCardProps = {
  imageUrl: string;
  title?: string;
};

const MenuCard = ({ imageUrl, title }: PropsWithChildren<MenuCardProps>) => {
  return (
    <CardGroup>
      <Col className={"align-self-center justify-self-center text-center"}>
        <Card className={"menu-card"}>
          <>
            <Card.Img src={imageUrl} alt="Card image" />
          </>
        </Card>
        <span>{title}</span>
      </Col>
    </CardGroup>
  );
};

export default MenuCard;
