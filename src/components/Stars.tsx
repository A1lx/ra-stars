import { FC } from 'react';
import { Star } from "./Star";

type props = {
  count: number;
}

export const Stars: FC<props> = ({count}) => {
  const arrStars: number[] = new Array(count).fill(0);

  return (
    <>
      {arrStars.length > 0 && arrStars.length < 6 && (
        <ul className="card-body-stars u-clearfix">
          {arrStars.map((item, index) => {return <Star key={Math.random() * index}/>})}
        </ul>
      )}
    </>
  )
}