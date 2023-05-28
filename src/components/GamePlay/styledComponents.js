import styled from 'styled-components'

export const GamePlayMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 100vw;
  background-color: #223a5f;
`
export const GameRulesView = styled.div`
  margin-top: auto;
  align-self: flex-end;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`

export const PopUpView = styled.div`
  display: flex;
  flex-direction: column;

  height: 80vh;
  width: 550px;
  background-color: #ffffff;

  margin-bottom: 0px;
  padding: 15px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 90%;
  }
`
export const PopUpImage = styled.img`
  height: 80%;
  width: 100%;
  margin-top: auto;
`
