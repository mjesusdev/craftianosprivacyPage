import React from 'react';
import ReactDOM from 'react-dom';

import { CraftianosMoney } from './CraftianosMoney';

// Import stylesheets & JS
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/scss/bootstrap.scss';
import './styles/styles.scss';

ReactDOM.render(
  <CraftianosMoney />,
  document.getElementById('root')
);