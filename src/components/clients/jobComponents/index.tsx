import React from "react";
import { JobStyled } from "../styles/Job";
import Container from "../Container";
import {
  HealthyCare,
  HealthyFood,
  PrimeryEducation,
  PureWater,
  RendicenceFacilities,
  SosialCare,
} from "modules/icons";

interface TData {
  title: string;
  description: string;
  icon: JSX.Element | string;
}

const data = [
  {
    title: "Healthy Food",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <HealthyFood />,
  },
  {
    title: "Pure Water",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <PureWater />,
  },
  {
    title: "Healthy Care",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <HealthyCare />,
  },
  {
    title: "Primery Education",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <PrimeryEducation />,
  },
  {
    title: "Rendicence Facilities",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <RendicenceFacilities />,
  },
  {
    title: "Sosial Care",
    description:
      "Lorem ispum dolor sit amet elit. Phase  nec preti facils ornare velit non metus tortor",
    icon: <SosialCare />,
  },
];

const JobComponent = () => {
  return (
    <JobStyled>
      <Container>
        <div className='job'>
          <div className='heading'>
            <h3>What We Do?</h3>
          </div>
          <div className='title'>
            <h1>We believe that we can save more lifes with you</h1>
          </div>
          <div className='job__list'>
            {data.map((item: TData, index: number) => {
              return (
                <div className='item'>
                  <div className='icon'>{item.icon}</div>
                  <div className='content'>
                    <div className='content__title'>
                      <h1>{item.title}</h1>
                    </div>
                    <div className='content__description'>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </JobStyled>
  );
};

export default JobComponent;
