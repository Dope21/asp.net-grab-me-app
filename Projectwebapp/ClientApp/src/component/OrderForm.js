import React from 'react';
import './OrderForm.css';

function OrderForm(){
    return (
        <>
        <div className='container-item'>
            <h2>กรุณากรอกข้อมูลการฝากซื้อ</h2>
            <hr class="solid"></hr>
            <form class="form-horizontal" method='post' action='#'>
                <div className='popup_block' >
                <div className="name_block">
                  <label className='label_name'>ชื่อ</label>
                  <input className='input_form'type='text' name="name" placeholder='Enter your name'></input>
                  
                </div>
                <div className="name_block2">
                <label className='label_name'>เบอร์ติดต่อ</label>
                
                  <input className='input_form'type='number' name="phone" placeholder='Enter your telephone'></input>
                </div>
              </div>
              <div className='popup_block'>
              <div className="name_block">
              <label className='label_name_shop'>ชื่อร้าน</label>
              <input className='input_form3'type='text' name="shop" placeholder='Enter your shop name'></input>
              </div>
              </div>

              <div className='popup_block' >
                <div className="name_block">
                  <label className='label_menu'>เมนู</label>
                  <input className='input_form'type='text' name="name" placeholder='Enter your name'></input>
                  
                </div>
                <div className="name_block2">
                  
                <label className='label_number'>จำนวน</label>
                
                  <input className='input_form'type='number' name="phone" placeholder='Enter your telephone'></input>
                </div>
              </div>

              <div className='popup_block'>
              <div className="name_block">
              <label className='label_name'>รายละเอียดเพิ่มเติม</label>
              <textarea className='input_form2'type='text' name="name" placeholder='Enter your detail'></textarea>
              </div>
              </div>

              <div className='suscess_btn'>
              <button className="btn-get2">ยืนยันการฝากซื้อ</button>
              </div>
              </form>
              </div>
        
        </>
    )
}
export default OrderForm;