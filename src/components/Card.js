import React from 'react';

const Card = ({ name, email, id }) => {
  // console.log('[Render Card]');
  return (
    <div className="tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

// export default Card;
const MemoCard = React.memo(Card);
MemoCard.displayName = 'Card';

export default MemoCard;
