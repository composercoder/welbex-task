import { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import turnPage from '../../controller/turnPage';
import './Arrows.css';

export default function Arrows() {
  const [ appState, dispatch ] = useContext(AppContext);
  const { allowedToTurnLeft, allowedToTurnRight } = appState.allowedToTurnPage;

  function handleClick(event) {
    dispatch({ type: 'setIsTimeToTurnPage', payload: true });
    turnPage(event.target.id, appState, dispatch);
  }

  return (
    <div className="arrows">
      <button id="arrow-left" className={allowedToTurnLeft ? "arrow" : "arrow arrow-invisible" } disabled={allowedToTurnLeft ? false : true} onClick={handleClick}>{"<<"}</button>
      <button id="arrow-right" className={allowedToTurnRight ? "arrow" : "arrow arrow-invisible"} disabled={allowedToTurnRight ? false : true} onClick={handleClick}>{">>"}</button>
    </div>
  )
}
