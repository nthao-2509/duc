import React from "react";
import { OurTeamStyled } from "../styles/OurTeam";
import Container from "../Container";
import TopSession from "../TopSession";

const OurTeamComponent = () => {
  return (
    <OurTeamStyled>
      <Container>
        <TopSession
          heading='Meet Our Team'
          title='Awesome guys behind our charity activities'
        />
        <div className='content'>
          <div className='items'>
            {Array.from({ length: 5 }).map((item: any, key: number) => (
              <div className='item' key={key}>
                <div className='avatar'>
                  <img src={`/images/avatar.png`} alt='' />
                  <div className='info'>
                    <div className='name'>
                      <h1>Ng Van A</h1>
                    </div>
                    <div className='function'>
                      <h1>Founder & CEO</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </OurTeamStyled>
  );
};

export default OurTeamComponent;
