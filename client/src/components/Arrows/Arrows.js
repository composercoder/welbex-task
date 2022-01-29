import { useState } from 'react';
import './Arrows.css';

export default function Arrows({allowedToTurnPage, changeIsTimeToTurnPage}) {
  const allowedToTurnLeft = allowedToTurnPage.turnLeft;
  const allowedToTurnRight = allowedToTurnPage.turnRight;

  function handleClick(event) {
    changeIsTimeToTurnPage(event.target.id, true);
  }

  return (
    <div className="arrows">
      <button id="arrow-left" className={allowedToTurnLeft ? "arrow" : "arrow arrow-invisible" } disabled={!allowedToTurnLeft} onClick={handleClick}>{"<<"}</button>
      <button id="arrow-right" className={allowedToTurnRight ? "arrow" : "arrow arrow-invisible"} disabled={!allowedToTurnRight} onClick={handleClick}>{">>"}</button>
    </div>
  )
}
