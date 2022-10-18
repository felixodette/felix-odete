import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import Particle from '../Particle';
import editor from '../../Assets/Projects/codeEditor.png';
import chatify from '../../Assets/Projects/chatify.png';
import bitsOfCode from '../../Assets/Projects/blog.png';
import eBay from '../../Assets/Projects/eBay.jpeg';
import churnPrediction from '../../Assets/Projects/churnPrediction.jpeg';
import movieStore from '../../Assets/Projects/movieStore.jpeg';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent
          {' '}
          <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I&apos;ve worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Suite Up!"
              description="Suite Up! is a project that simulates a hotel room booking system. It allows users to book a room for one night. It also allows users to see the list of all booked rooms on that day and see a list of rooms that are not booked yet. "
              ghLink="https://github.com/felixodette/hotel-room-frontend"
              demoLink="https://hotel-room-frontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="MoneyPenny"
              description="A mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what."
              ghLink="https://github.com/felixodette/MoneyPenny"
              demoLink="https://evening-caverns-46069.herokuapp.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Movie Lovers"
              description="In this project we used HTML, CSS, JS, Bootstrap, webpack, and, jest that displays movies and allows users to leave likes, comments, and reservations on their favorite titles."
              ghLink="https://github.com/felixodette/Javascript-Group-Capstone"
              demoLink="https://github.com/felixodette/Javascript-Group-Capstone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movieStore}
              isBlog={false}
              title="Movie Store Database"
              description="We use SQL to support decision making. It is based on a case study about an online movie rental company with a database about customer information, movie ratings, background information on actors and more. We apply SQL queries to study for example customer preferences, customer engagement, and sales development."
              ghLink="https://github.com/felixodette/Movies-PostgreSQL"
              demoLink="https://github.com/felixodette/Movies-PostgreSQL/blob/master/notebook.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churnPrediction}
              isBlog={false}
              title="Churn Prediction"
              description="Customer churn, is the percentage of customers that stopped using a company’s service during a particular period. Keeping churn rates as low as possible is what every business pursuits, and understanding these metrics can assist companies to identify potential churners in time to prevent them from leaving the client base. In this project, we will build churn prediction models based on a telecommunication company dataset."
              ghLink="https://github.com/felixodette/Churn-Prediction-Telco"
              demoLink="https://github.com/felixodette/Churn-Prediction-Telco/blob/main/notebook.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eBay}
              isBlog={false}
              title="eBay Kleinanzeigen Analysis"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/felixodette/eBay-Kleinanzeigen-Analysis"
              demoLink="https://github.com/felixodette/eBay-Kleinanzeigen-Analysis/blob/main/Analysis.ipynb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
