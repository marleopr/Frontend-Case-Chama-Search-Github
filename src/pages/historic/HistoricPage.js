import React, { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"
import * as s from "./styled"
import githubImg from "../../assets/img/githubLogo.png"
import githubFooter from "../../assets/img/githubLogoFooter.png"
import searchEmpty from "../../assets/img/favicon.ico"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function HistoricPage() {
    const navigate = useNavigate()

    const [listProfiles, setListProfiles] = useState([]);
    const [dataProfile, setDataProfile] = useState();
    const [profileExist, setprofileExist] = useState(false);

    const getHistoric = async () => {
        setListProfiles(JSON.parse(localStorage.getItem('listaProfiles')) || [])
    }
    useEffect(() => {
        getHistoric()
    }, [])

    const clearHistoric = () => {
        localStorage.setItem('listaProfiles', JSON.stringify([]));
        getHistoric();
        toast.info('Histórico limpo!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const getProfile = (number) => {
        setprofileExist(true);
        setDataProfile(listProfiles[number])
    }

    const onChangeBox = (event) => {
        setprofileExist(false)
    }

    const searchesList = listProfiles && listProfiles
        .sort((a, b) => {
            return b.dateSearch - a.dateSearch
        })
        .map((profile, index) => {
            return (
                <s.SearchInfo onClick={() => getProfile(index)} value={index} key={index}>
                    {/* <s.SearchName> {profile.login} </s.SearchName> */}
                    <s.SearchName>
                        <a href={profile.html_url} target="_blank"><s.SearchNameImg src={profile.avatar_url} /></a>
                        {profile.login}
                    </s.SearchName>
                    {/* <a href={profile.html_url}><s.SearchName src={profile.avatar_url} /></a> */}
                </s.SearchInfo>
            )
        })

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={githubImg} onClick={() => goToHomePage(navigate)} alt={"Voltar ao início"}></s.Logo>
            </s.Header>

            <s.BoxSearch>
                <h1>Histórico</h1>
                {
                    searchesList.length > 0 ?
                        <s.List empty={searchesList.length > 0}> {searchesList} </s.List>
                        :
                        // <s.List empty={searchesList.length > 0}> <h2>Histórico vazio!</h2> </s.List>
                        <s.List empty={searchesList.length > 0} > <img src={searchEmpty} /> </s.List>
                }
                <s.Buttons>
                    <s.ButtonBack onClick={() => goToHomePage(navigate)}> Voltar </s.ButtonBack>
                    <ToastContainer />
                    <s.ButtonClear onClick={clearHistoric}> Limpar Histórico </s.ButtonClear>
                </s.Buttons>
            </s.BoxSearch>
            <s.Footer>
                <a a href="https://github.com/marleopr" target="_blank"><s.LogoFooter src={githubFooter}></s.LogoFooter></a>
            </s.Footer>
        </s.Body>
    )
}