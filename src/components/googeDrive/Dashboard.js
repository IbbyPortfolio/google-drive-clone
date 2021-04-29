import React from 'react';
import Navbar from './Navbar';
import { Container } from 'react-bootstrap';

export default function Dashboard() {
   return (
      <>
         <Navbar>Dashboard</Navbar>
         <Container fluid>Content</Container>
      </>
   );
}
