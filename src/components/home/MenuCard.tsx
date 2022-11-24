import React, { PropsWithChildren } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";

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
        <a href={route}>
          <Card className={"menu-card"}>
            <>
              <Card.Img src={imageUrl} alt="Card image" />
            </>
          </Card>
        </a>
        <span>{title}</span>
      </Col>
    </CardGroup>
  );
};

export default MenuCard;
