import ReactOnRails from 'react-on-rails';

import App from '../bundles/app/startup/App';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  App,
});