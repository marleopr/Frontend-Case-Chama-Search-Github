import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/BASE_URL"
import * as s from "./styled";
import githubImg from "../../assets/img/githubLogo.png"
import githubFooter from "../../assets/img/githubLogoFooter.png"
import { goToHistoricPage } from "../../routes/coordinator";
import Profile from "../../components/profile/Profile";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function showHiringMessage() { try { window.console.log("\n%cOl\u00e1!\n%cEsse é o buscador de usuários do Github desenvolvido por Márleo Piber\n\n%cAgora se você quer buscar um Dev promissor, clique no link abaixo:\n%chttps://github.com/marleopr\n", "font-family: serif; font-size: 32px; color: #767676", "font-family: serif; font-size: 25px; color: #24292f; font-weight: bold;", "font-family: sans-serif; font-size: 16px; line-height: 1.2rem; color: #767676", "font-family: sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676") } catch (a) { } }
showHiringMessage();

export default function HomePage() {
    const navigate = useNavigate();

    const [searchProfile, setSearchProfile] = useState()
    const [dataProfile, setDataProfile] = useState()
    const [profileExist, setProfileExist] = useState(false)

    let listaProfiles = JSON.parse(localStorage.getItem('listaProfiles')) || []


    const getProfile = (username) => {
        if (searchProfile) {

            axios
                .get(`${BASE_URL}${username}`)
                .then((res) => {
                    setProfileExist(true)
                    setDataProfile(res.data)
                    const newDataProfile = res.data
                    newDataProfile.dateSearch = Date.now()
                    listaProfiles.push(newDataProfile)
                    localStorage.setItem('listaProfiles', JSON.stringify(listaProfiles))
                    setSearchProfile("")
                    toast.success('Buscando perfil...')
                })
                .catch((error) => {
                    const errorCode = error.response.status
                    if (errorCode >= 400 && errorCode < 500) {
                        toast.error('Usuário não encontrado!', {
                            position: "top-right",
                            autoClose: 2000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    } else {
                        toast.error('Erro no servidor', {
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
                })
        } else {
            toast.warn('Digite um usuário!', {
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
    }

    const onChangeSearchProfile = (event) => {
        setSearchProfile(event.target.value)
    }

    const onChangeBox = (event) => {
        setProfileExist(false)
    }

    // useEffect(() => {
    //     getMovies()
    // }, [page])

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={githubImg}></s.Logo>
            </s.Header>
            <s.BoxSearch>
                {
                    !profileExist ?
                        <s.BoxSearch>
                            <s.InputSearch
                                value={searchProfile}
                                onChange={onChangeSearchProfile}
                                placeholder="Buscar conta Github..."
                                type={"text"}
                            />

                            <s.Buttons>
                                {/* <s.ButtonBack onClick={() => goToStartPage(navigate)}> Voltar </s.ButtonBack> */}
                                <s.ButtonHistoric onClick={() => goToHistoricPage(navigate)}> Histórico </s.ButtonHistoric>
                                {/* <s.ButtonSearch onClick={() => getProfile(searchProfile)}> Pesquisar </s.ButtonSearch> */}
                                <s.ButtonSearch onClick={() => getProfile(searchProfile)}> Pesquisar </s.ButtonSearch>

                                {/* <button onClick={success}>Notify !</button> */}
                                <ToastContainer />

                            </s.Buttons>
                        </s.BoxSearch>
                        :
                        <Profile
                            dataProfile={dataProfile}
                            onChangeBox={onChangeBox}
                        />
                }
            </s.BoxSearch>
            <s.Footer>
                <a a href="https://github.com/marleopr" target="_blank"><s.LogoFooter src={githubFooter}></s.LogoFooter></a>
            </s.Footer>
        </s.Body>
    )
}