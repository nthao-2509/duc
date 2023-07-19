import React from "react";
import { DetailStyled } from "../styles/Detail";
import parse from "html-react-parser";
import { DataDetail } from "modules/data-fake";
import Container from "../Container";
import RecentPost from "./components/RecentPost";
import AuthorName from "./components/AuthorName";
import Categories from "./components/Categories";
import Tags from "./components/Tags";
import Comments from "./components/Comments";
const DetailComponent = () => {
  return (
    <DetailStyled>
      <Container>
        <div className='detail'>
          <div className='left'>
            <div className='content'>{parse(DataDetail?.[0].html)}</div>
            <Tags title={undefined} tags={DataDetail?.[0].tag} />
            <AuthorName />
            <RecentPost
              title='Relate Post'
              dataPost={Array.from({ length: 2 })}
            />
            <Comments />
          </div>
          <div className='right'>
            <div className='search'>
              <input type='text' placeholder='Search ...' />
              <i className='fa-solid fa-magnifying-glass'></i>
            </div>
            <RecentPost
              title='Recent Post'
              dataPost={Array.from({ length: 10 })}
            />
            <Categories />
            <img src='/images/children.jpg' alt='' />
            <div
              style={{
                padding: "50px 0",
              }}
            >
              <Tags title='Tags Cloud' tags={DataDetail?.[0].tag} />
            </div>
            <div className='widget'>
              <div className='widget__title'>
                <h1>Text Widget</h1>
              </div>
              <div className='widget__des'>
                <p>
                  That’s why last year, I decided to join a charity organization
                  to support the kids in Ha Giang. We used social networks to
                  call for donations of old clothes, books,… for people in Ha
                  Giang, especially the children. Then, we directly went there
                  and visited the poorest districts. The weather was so cold, it
                  was only about 5 degrees in the morning
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DetailStyled>
  );
};

export default DetailComponent;
