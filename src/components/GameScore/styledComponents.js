import styled from 'styled-components'

export const GameScoreCont = styled.div`
  padding: 10px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #ffffff;
  margin-bottom: 2px;
  border-radius: 10px;
  background-color: transparent;
`
export const GameScoreNameCont = styled.div`
  display: flex;
  flex-direction: column;
`

export const GameScoreName = styled.h1`
  color: white;
  font-size: 20px;
  font-family: 'Bree Serif';
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`

export const GameScoreBoardCont = styled(GameScoreNameCont)`
  background-color: #ffffff;
  width: 15%;
  height: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 567px) {
    width: 25%;
  }
`

export const GameScoreBoardHeading = styled.p`
  margin-bottom: 0px;
  font-size: 20px;
  color: #223a5f;
  @media screen and (max-width: 567px) {
    font-size: 14px;
  }
`

export const GameScoreBoardScore = styled.p`
  margin-top: 0px;
  font-size: 44px;
  color: #223a5f;
  font-family: 'Roboto';
  @media screen and (max-width: 567px) {
    font-size: 24px;
    margin-top: 10px;
  }
`
