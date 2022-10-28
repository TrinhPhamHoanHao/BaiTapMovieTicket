

const stateDefault = {
    danhSachGheDangDat:[
        {soGhe:"A1",gia:1000}
    ]
}

export const BaiTapMovieTicketReducer = (state = stateDefault,action)=>{
    switch(action.type){
        default: return {...state}
    }
}

export default BaiTapMovieTicketReducer;