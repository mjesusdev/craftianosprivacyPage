import React from 'react'
import ReactDOM from 'react-dom'

import { CraftianosMoney } from './CraftianosMoney'

// Import SCSS & Bootstrap Bundle
import './styles/styles.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min';

ReactDOM.render(
  <React.StrictMode>
    <CraftianosMoney />
  </React.StrictMode>,
  document.getElementById('root')
)
