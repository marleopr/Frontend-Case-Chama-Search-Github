import styled from "styled-components"

export const Body = styled.div`
    box-sizing: border-box;
    overflow-x: hidden;
    width: 100vw;
    max-width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
    align-items: center;
    background-color:#f6f8fa;
    background-size:16px 16px;
    `

export const Header = styled.div`
    background-color:#24292f;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
`

export const Logo = styled.img`
    width: 70px;
    /* cursor: pointer; */
`

export const BoxSearch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 375px;
  height: 40em;
  padding: 10px;
  border-radius: 15px;
  background-color: #24292f;
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
   border-radius: 0;
}
`

export const InputSearch = styled.input`
  width: 100%;
  height: 40px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  padding: 0 0 0 5px;
  margin: 5px 0;
  &:focus {
    border: solid 1px gray;
    outline: 0;
  }

  img{
    width: 16px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  height: 30px;
`

export const ButtonHistoric = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100px;
  margin: 0 5px 0 0;
  text-align: center;
  color: #000000;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
    transform: scale(1.02);
    transition: transform .2s;
  }
`

export const ButtonSearch = styled.button`
  font-size: 18px;
  height: 100%;
  width: 100px;
  margin: 0 0 0 5px;
  text-align: center;
  color: #000000;
  background-color: #ffffff;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
    transform: scale(1.02);
    transition: transform .2s;
  }
`

export const Footer = styled.div`
    background-color:#24292f;
    width: 100vw;
    box-sizing: border-box;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const LogoFooter = styled.img`
    width: 150px;
`

export const TextFooter = styled.div`
    margin-left: 10px;
    font-weight: bold;
    text-decoration: none;
    :hover{
        cursor: pointer;
    }
`