import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { AdvancedCounter } from './components/AdvancedCounter'
import { HookedAdvancedCounter } from './components/HookedAdvancedCounter'

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <AdvancedCounter />
        <HookedAdvancedCounter />
        <p>
          Edit <code>src/app.tsx</code> and save to test Hopeless Mortal Return
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
