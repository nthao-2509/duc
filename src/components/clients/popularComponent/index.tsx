import React from "react";
import { PopularStyled } from "../styles/Popular";
import Container from "../Container";
import TopSession from "../TopSession";
import Card from "../Card";

const PopularComponent = () => {
  return (
    <PopularStyled>
      <Container>
        <TopSession
          heading='Popular Cause'
          title='Let’s know about charity causes around the word'
        />
        <div className='content'>
          <div className='cards'>
            {Array.from({ length: 3 }).map((item: any, index: number) => (
              <Card
                image={`/images/popular-1.png`}
                raised={"$1000"}
                goal={"$1000"}
                title={"Lorem ipsum dolor sit"}
                des='Lorem ipsum dolor sit amet elit.
              Phasell nec pretium mi. Curabit facilis ornare velit non vulputa'
                button={true}
                comment={false}
              />
            ))}
          </div>
        </div>
      </Container>
    </PopularStyled>
  );
};

export default PopularComponent;
