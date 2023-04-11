import React from 'react'
import ReactDOM from 'react-dom'

import { CraftianosPrivacy } from './CraftianosPrivacy'

// Import SCSS & Bootstrap Bundle
import './styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <CraftianosPrivacy />
  </React.StrictMode>,
  document.getElementById('root')
)
