import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { HomePage, ShiroMakerPage } from 'pages'

const Wrapper = ({ children }) => {
  const location = useLocation()
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, behavior: 'auto' })
  }, [location.pathname])
  return children
}

const Router = () => {
  const location = useLocation()
  return (
    <AnimatePresence>
      <Wrapper>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/shiromaker" element={<ShiroMakerPage />} />
          {/* <Route path="/event" element={<EventPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/order/:orderId/success" element={<SuccessPage />} />
          <Route path="/order/:orderId/fail" element={<FailPage />} />
          <Route path="/order/:orderId/info" element={<OrderInfoPage />} />
          <Route path="/terms" element={<TermsPage />} /> */}
        </Routes>
      </Wrapper>
    </AnimatePresence>
  )
}

export default Router
