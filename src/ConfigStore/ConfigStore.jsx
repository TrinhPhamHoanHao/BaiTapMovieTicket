// import {combineReducers} from 'redux';
// import BaiTapMovieTicketReducer from '../redux/BaiTapMovieTicketReducer';
// const rootReducer = combineReducers({
//     BaiTapMovieTicketReducer
// })
// export default rootReducer;

import {configureStore} from "@reduxjs/toolkit"
import BaiTapMovieTicketReducer from "../redux/BaiTapMovieTicketReducer"

export const store = configureStore({
    reducer: {
        BaiTapMovieTicketReducer

    }
})