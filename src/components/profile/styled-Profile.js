import styled from 'styled-components';

export const BoxProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 375px;
  border-radius: 15px;
  background-color: #24292f;
`

export const ProfileImage = styled.div`
  margin: 30px 0;
`

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    background-color: #e9e9e9;
    transform: scale(1.03);
    transition: transform .2s;
  }
`

export const ProfileData = styled.div`
  font-size: 22px;
  text-align: center;
  margin: 10px 0;
  color: #ffffff;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  padding: 0 0 0 10px;
  width: 100%;
  height: 30px;
`

export const ButtonBack = styled.button`
  font-size: 18px;
  height: 100%;
  width: 85px;
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