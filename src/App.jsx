import { Suspense, lazy } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import songsData from './data/songs.json'
import { PlayerProvider } from './context/PlayerProvider'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Songs = lazy(() => import('./pages/Songs'))

/**
 * HashRouter: routes live in the hash (…/repo/#/songs). No basename—GitHub
 * project pages sit under /repo/; basename + browser location often yields an
 * empty match and a blank #root.
 */
function App() {
  return (
    <HashRouter>
      <PlayerProvider songs={songsData}>
        <Suspense fallback={<div className="mx-auto w-full max-w-5xl px-4 py-8 text-sm font-semibold text-ink-800/60">載入中…</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="songs" element={<Songs />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Routes>
        </Suspense>
      </PlayerProvider>
    </HashRouter>
  )
}

export default App
