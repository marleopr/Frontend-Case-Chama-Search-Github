import axios from "axios"
import { useNavigate } from "react-router-dom"
import { goToHomePage } from "../../routes/coordinator"
import * as s from "./styled"
import githubImg from "../../assets/img/githubLogo.png"
import githubFooter from "../../assets/img/githubLogoFooter.png"

export default function HistoricPage() {
    const navigate = useNavigate()

    return (
        <s.Body>
            <s.Header>
                <s.Logo src={githubImg} onClick={() => goToHomePage(navigate)} alt={"Voltar ao início"}></s.Logo>
            </s.Header>

            <s.BoxSearch />
            <s.Footer>
                <s.LogoFooter src={githubFooter}></s.LogoFooter>
            </s.Footer>
        </s.Body>
    )
}