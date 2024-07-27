import { ScrollToTop } from '@/components/scroll-to-top'
import ContactPage from '@/routes/contact'
import HomePage from '@/routes/home'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function App() {
  /**
   * Vite exposes env variables on the special import.meta.env object.
   * Basename needs to be set for GitHub Pages to function properly.
   *
   * @link https://vitejs.dev/guide/env-and-mode.html
   */
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  )
}
