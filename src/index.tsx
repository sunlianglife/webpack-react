import { createRoot } from 'react-dom/client'

import App from '@src/app'

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const root = createRoot(document.getElementById('root')!)

root.render(<App />)
