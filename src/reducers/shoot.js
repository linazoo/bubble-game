import { calculateAngle } from '../utils/formulas';

function shoot(state, action) {
  if (!state.gameState.started) return state;
  

  const { cannonBalls } = state.gameState;
  if (cannonBalls.length === 2) return state;

  const { x, y } = action.mousePosition;


  // pass the click position along as boomPosition
  // const clickPosition = { position: {}}


  const angle = calculateAngle(0, 0, x, y);

  const id = (new Date()).getTime();
  const cannonBall = {
    position: { x: 0, y: 0 },
    angle,
    id,
  };


  const boom = { 
    position: {x: x, y: y},
    id
  }

  return {
    ...state,
    gameState: {
      ...state.gameState,
      cannonBalls: [...cannonBalls, cannonBall],
      boom: boom
    }
  };
}

export default shoot;