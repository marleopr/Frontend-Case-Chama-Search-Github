import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/home/HomePage"
import ErrorPage from "../pages/error/ErrorPage"
import HistoricPage from "../pages/historic/HistoricPage"

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="historic" element={<HistoricPage/>}/>
        {/* <Route path="search" element={<SearchPage/>}/> */}
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}