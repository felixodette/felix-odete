import React from 'react';
import Card from 'react-bootstrap/Card';
import { ImPointRight } from 'react-icons/im';

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            My name is
            {' '}
            <span className="purple">Felix Odete </span>
            ,
            I&apos;m a full-stack developer based in
            <span className="purple"> Nairobi, Kenya.</span>
            <br />
            I have developed different types of applications
            from simple static webpages, to Ecommerce booking platforms.
            <br />
            <br />
            I&apos;m passionate about cutting-edge, pixel-perfect, beautiful
            interfaces, intuitively implemented UX, and functional apps! In my
            free time, I like to:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight />
              {' '}
              Travelling
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            &quot;Strive to build things that make a difference!&quot;
            {' '}
          </p>
          <footer className="blockquote-footer">Felix</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
