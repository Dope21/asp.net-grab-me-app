import React, { useState } from 'react';
import './Items.css';

const data = [
    {
      name: 'Shop 1',
      item: 'Product A',
      count: 5,
      detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Shop 2',
      item: 'Product B',
      count: 10,
      detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      name: 'Shop 3',
      item: 'Product C',
      count: 2,
      detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
    },
  ];

function Items_data() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (index) => {
    setActivePopup(index);
  };

  const closePopup = () => {
    setActivePopup(null);
  };
  return (
    <div>
      <h1>List of Items</h1>

      
        
      
        {data.map((item,index) => (
          <div className="container-item">
            <p>ร้าน : {item.name}</p>
            <p>สิ่งที่ฝากซื้อ</p>
            <div className="item-count">
              <div>{item.item}</div>
              <div className="count">จำนวน {item.count} กล่อง</div>
            </div>
            <p>ร้านละเอียดเพิ่มเติม</p>
            <div className='detail_data'>{item.detail}</div>
            <div className="group-order">
              <button className="btn-get" onClick={() => openPopup(index)}>เราซื้อให้</button>
              <div className="ph_holder">testttttt tttt</div>
              
            </div>
            {activePopup === index && (
              <div>
                <div className="backdrop" onClick={closePopup}></div>
<div className="popup">
                {/* Popup content here */}
                <div className="header">
                <h2>กรุณากรอกข้อมูล</h2>
                
                </div>
                <hr class="solid"></hr>
                <div className='popup_block' >
                <div className="name_block">
                  <label className='label_name'>ชื่อ</label>
                  <input className='input_form'type='text' name="name" placeholder='Enter your name'></input>
                  
                </div>
                <div className="name_block">
                <label className='label_name'>เบอร์ติดต่อ</label>
                
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
              <button className="btn-get2">ยืนยันการรับฝาก</button>
              </div>
              
              </div>
              </div>
              
              
              
              
            )}
          </div>
          
        ))
        }
      
    </div>
  );
}

export default Items_data;
