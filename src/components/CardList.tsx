import React from 'react';
import Card from './Card';
import { IRobot } from '../redux/reducers/fetchRobotsReducer';

const CardList = ({ robots }: { robots: Array<IRobot> }) => {
  console.log('[Render CardLists]');
  return (
    <div>
      {robots.map((user: any, i: number) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
