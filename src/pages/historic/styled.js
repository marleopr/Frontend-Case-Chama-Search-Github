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