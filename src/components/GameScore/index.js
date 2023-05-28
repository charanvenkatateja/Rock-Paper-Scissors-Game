import {
  GameScoreCont,
  GameScoreNameCont,
  GameScoreName,
  GameScoreBoardCont,
  GameScoreBoardHeading,
  GameScoreBoardScore,
} from './styledComponents'

const GameScore = props => {
  const {score} = props
  return (
    <GameScoreCont>
      <GameScoreNameCont>
        <GameScoreName>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </GameScoreName>
      </GameScoreNameCont>
      <GameScoreBoardCont>
        <GameScoreBoardHeading>Score</GameScoreBoardHeading>
        <GameScoreBoardScore>{score}</GameScoreBoardScore>
      </GameScoreBoardCont>
    </GameScoreCont>
  )
}
export default GameScore
