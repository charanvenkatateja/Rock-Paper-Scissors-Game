import './index.css'

import {
  GameContainer,
  GameButton,
  GameImage,
  ResultText,
  ResultImgCont,
  ResultName,
  SepCont,
  ResultImgCont2,
} from './styledComponents'

const GameResults = props => {
  const {
    resetGame,
    text,
    isShow,
    choicesList,
    opponentRandomChoice,
    newArray,
  } = props

  const showGame = () => (
    <GameContainer>
      {isShow && (
        <>
          <GameButton
            type="button"
            onClick={() => opponentRandomChoice(choicesList[0].id)}
            data-testid="rockButton"
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameButton>
          <GameButton
            type="button"
            onClick={() => opponentRandomChoice(choicesList[1].id)}
            data-testid="scissorsButton"
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameButton>
          <GameButton
            type="button"
            onClick={() => opponentRandomChoice(choicesList[2].id)}
            data-testid="paperButton"
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameButton>
        </>
      )}
      {!isShow && (
        <>
          <SepCont>
            <ResultImgCont>
              <ResultName>YOU</ResultName>
              <GameImage src={newArray[0].imageUrl} alt="your choice" />
            </ResultImgCont>
            <ResultImgCont>
              <ResultName>OPPONENT</ResultName>
              <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
            </ResultImgCont>
          </SepCont>
          <ResultImgCont2>
            <ResultText>{text}</ResultText>
            <button onClick={resetGame} type="button" className="result-button">
              PLAY AGAIN
            </button>
          </ResultImgCont2>
        </>
      )}
    </GameContainer>
  )

  return showGame()
}
export default GameResults
