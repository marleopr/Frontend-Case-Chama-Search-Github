import styled from "styled-components";

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
    cursor: pointer;
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
  /* border: solid orange; */

  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
   border-radius: 0;
}
`

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  font-size: 14px;
  border-radius: 5px;
  margin: 5px 0;
  background-color: ${props => props.status === true && props.value === props.id ? "orange" : "#ffffff"};
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
  cursor: default;
`

export const SearchName = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 5px;
  flex: 1 0 30%;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  align-items: center;
  /* text-align: center; */

  /* text-decoration: none; */

  /* img{
   max-width: 50px;
  } */

  &:hover {
    /* cursor: pointer; */
    background-color: #e9e9e9;
    transform: scale(1.01);
    transition: transform .2s;
    border-radius: 5px;
  }
`
export const SearchNameImg = styled.img`
  max-width: 50px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.empty ? "flex-start" : "center"};
  align-items: center;
  width: 100%;
  height: 350px;
  padding: 0 5px 0 0;
  overflow: auto;
  overflow-x: hidden;
  img{
    width: 120px;
  }
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 100%;
  height: 30px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  color: #000000;
  height: 100%;
  width: 150px;
  margin: 0 5px 0 0;
  text-align: center;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ButtonClear = styled.button`
  font-size: 18px;
  color: #000000;
  height: 100%;
  width: 150px;
  margin: 0 0 0 5px;
  text-align: center;
  background-color:  #ffffff;
  border: none;
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
    transform: scale(1.03);
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