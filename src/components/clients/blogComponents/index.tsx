import React from "react";
import Container from "../Container";
import TopSession from "../TopSession";
import { BlogStyled } from "../styles/Blog";
import Card from "../Card";
import Pagination from "../Pagination";

const BlogComponent = () => {
  return (
    <BlogStyled>
      <Container>
        <TopSession
          heading='Our Blog'
          title='Latest news & articles directly from out blog '
        />
        <div className='cards'>
          {Array.from({ length: 6 }).map((item: any, key: number) => (
            <Card
              image={`/images/popular-1.png`}
              raised={undefined}
              goal={undefined}
              title={"Lorem ipsum dolor sit"}
              des='Lorem ipsum dolor sit amet elit.
                Phasell nec pretium mi. Curabit facilis ornare velit non vulputa'
              button={false}
              comment={true}
            />
          ))}
        </div>
        <Pagination active={2} length={3} />
      </Container>
    </BlogStyled>
  );
};

export default BlogComponent;
