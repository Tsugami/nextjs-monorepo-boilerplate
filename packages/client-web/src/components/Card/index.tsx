// import React from 'react';
import { Container, Description, Title } from './styles';

interface CardProps {
  title: string;
  url: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, url, description }) => (
  <Container href={url}>
    <Title>{title} &rarr;</Title>
    <Description>{description}</Description>
  </Container>
);

export default Card;
