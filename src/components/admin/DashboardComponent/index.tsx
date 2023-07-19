import React, { ReactNode } from "react";
import { CardTotalDonate, DashboardStyled } from "../styles/DashBoard";
import { IconCoins, IconDonate, IconGhim, IconMoney } from "modules/icons";
import { Progress } from "antd";

const DataTotalDonate = [
  {
    title: "Total donate today",
    total: 300,
    icon: <IconMoney />,
    bgColor:
      "linear-gradient(270deg, #359DD9 0%, rgba(117, 201, 250, 0.55) 100%);",
  },
  {
    title: "Total donate this month",
    total: 5000,
    icon: <IconCoins />,
    bgColor:
      "linear-gradient(225deg, #FB4118 0%, rgba(251, 65, 24, 0.54) 100%);",
  },
  {
    title: "Total donate",
    total: 100000,
    icon: <IconDonate />,
    bgColor:
      "linear-gradient(225deg, #257070 0%, rgba(116, 255, 255, 0.68) 100%);",
  },
  {
    title: "Number of program in process",
    total: 3,
    icon: <IconGhim />,
    bgColor:
      "linear-gradient(225deg, #FDBE33 0%, rgba(254, 206, 98, 0.61) 100%);",
  },
];

const DataTotalCallingMount = [
  {
    title: "Total calling amount of closed program",
    target: 40,
    duration: 60,
  },
  {
    title: "Total calling amount of processing program",
    target: 40,
    duration: 60,
  },
];

const DashboardComponent = () => {
  return (
    <DashboardStyled>
      <div className='cards__total-donate'>
        {DataTotalDonate?.map(
          (
            item: {
              title: string;
              total: number;
              icon: ReactNode;
              bgColor: string;
            },
            key: number
          ) => (
            <div className='item' key={key}>
              <CardTotalDonate bg={item.bgColor}>
                <div className='title'>
                  <h1>{item.title}</h1>
                </div>
                <div className='total'>
                  <div className='icon'>{item.icon}</div>
                  <p>{item.total}$</p>
                </div>
              </CardTotalDonate>
            </div>
          )
        )}
      </div>
      <div className='total__calling-mount'>
        {DataTotalCallingMount?.map(
          (
            item: {
              title: string;
              target: number;
              duration: number;
            },
            index: number
          ) => (
            <div className='item' key={index}>
              <div className='title'>
                <h1>{item.title}</h1>
              </div>
              <div className='process'>
                <div className='process__item'>
                  <p>Target:</p>
                  <Progress
                    showInfo={false}
                    status='active'
                    percent={item.target}
                  />
                </div>
                <div className='process__item'>
                  <p>Duration:</p>
                  <Progress
                    showInfo={false}
                    status='exception'
                    percent={item.duration}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
      <div className='overview-report'>
        <div className=' overview'>
          <div className='title'>
            <h1>Data Overview</h1>
          </div>
        </div>
        <div className=' report'>
          <h1>Report</h1>
        </div>
      </div>
    </DashboardStyled>
  );
};

export default DashboardComponent;
