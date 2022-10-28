import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import BaiTapMovieTicket from './BaiTapMovieTicket/BaiTapMovieTicket';
import HangGhe from './BaiTapMovieTicket/HangGhe';
import BaiTapMovieTicketReducer from './redux/BaiTapMovieTicketReducer';
import store from './redux/BaiTapMovieTicketReducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Provider store={store}>
        <BaiTapMovieTicket/>
    </Provider>
  </div>
);
