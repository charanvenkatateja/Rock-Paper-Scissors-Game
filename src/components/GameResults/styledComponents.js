import styled from 'styled-components'

export const GameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  margin-top: 60px;
  flex-wrap: wrap;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameButton = styled.button`
  width: 150px;
  height: 150px;
  cursor: pointer;
  outline: none;
  border-style: none;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 0px;
  }
`
export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`
export const ResultImgCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 40px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  @media screen and (max-width: 576px) {
    font-size: 17px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-size: 27px;
  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`
export const SepCont = styled.div`
  display: flex;
  align-items: center;
`
export const ResultImgCont2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
