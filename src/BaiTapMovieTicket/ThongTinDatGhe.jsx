import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <div className='mt-5'>
          <button className='gheDuocChon' style={{ marginLeft: "-35px" }}></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span><br />
          <button className='gheDangChon'></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế đang đặt</span><br />
          <button className='ghe' style={{ marginLeft: "0" }}></button><span className='text-light' style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
        </div>

        <div className='mt-5'>
          <div class="table-responsive">
            <table className='table' border="2">
              <thead>
                <tr className='text-light' style={{fontSize:"25px"}}>
                  <th>Số ghế</th>
                  <th>Giá</th>
                  <th>Hủy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Số ghế</td>
                  <td>Giá</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Số ghế</td>
                  <td>Giá</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    )
  }
}
