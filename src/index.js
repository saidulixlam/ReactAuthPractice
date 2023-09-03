import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 1.Yes or no is easy to duplicate or skip that step and access data.

// 2.Here unique identifier is stored and send same to the client . Client send identifier along with requests to protected resources.

// 3. It is  best for tightly coupled client and server side but not suitable for decoupled . Cause same data is shared tothe client , hence security issue might occur.

// 4.Authentication tokens are permisson token on server which are not stored and server has a key for every data which is more secure than a server side session. Cause the key is not  known to client .

// 5.It's better than the server side sessions cause it has a key which is not even known by client side .So it's more secure and defines true authentication.