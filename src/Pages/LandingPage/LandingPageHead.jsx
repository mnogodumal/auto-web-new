import Button from "../../Components/Button/Button"
import { Routes, Route, Link } from "react-router-dom"
import About from '../RouterDom/About'
import Market from '../RouterDom/Market'
import Plus from '../RouterDom/Plus'
import NotFound from '../RouterDom/NotFound'
import Layout from "../../Components/Layout"


function LandingPageHead() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/Mark" element={<Market />} />
          <Route path="/About" element={<About />} />
          <Route path="/Plus" element={<Plus />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default LandingPageHead