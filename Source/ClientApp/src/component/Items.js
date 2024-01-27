import React, { useState, useEffect } from 'react';
import './Items.css';

function Items_data() {

  const handleConfirmPickup = () => {
    closePopup();
  };

  const [activePopup, setActivePopup] = useState(null);
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const url = "/api/posts/view";

    fetch(url, {
      method: "GET"
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${url}`);
        }
        return response.json();
      })
      .then(resdata => {
        const transformedData = resdata.map(item => ({
          id: item.id,
          shop: item.shop,
          name: item.name,
          item: item.menu,
          phone: item.phone,
          count: parseInt(item.amount, 10),
          detail: item.discription,
          confirm: item.confirmInfo,
        }));
        setData(transformedData); // Set the fetched data to the 'data' state
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const openPopup = (index) => {
    setActivePopup(index);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div>
      <h1>List of Items</h1>
      {data.map((item, index) => (
        <div className="container-item">
          <p>ร้าน : {item.shop}</p>
          <p>สิ่งที่ฝากซื้อ</p>
          <div className="item-count">
            <div>{item.item}</div>
            <div className="count">จำนวน {item.count} กล่อง</div>
          </div>
          <p>ร้านละเอียดเพิ่มเติม</p>
          <div className='detail_data'>{item.detail}</div>
          <div className="group-order">
            <button className="btn-get" onClick={() => openPopup(index)}>ผู้รับ</button>
            <div className="ph_holder">ผู้ฝาก: {item.name} เบอร์โทรติดต่อ: {item.phone}</div>

          </div>
          {activePopup === index && (
            <div>
              <div className="backdrop" onClick={closePopup}></div>
              <div className="popup">
                {/* Popup content here */}
                <div className="header">
                  <h2>ละเอียดผู้รับฝาก</h2>
                  <button className="btn-get" onClick={handleConfirmPickup}>x</button>
                </div>
                <hr class="solid"></hr>
                <div className='popup_block' >
                  <div className="name_block">
                    <label className='label_name'>ชื่อ</label>
                    <input
                      className='input_form'
                      type='text'
                      name="name"
                      placeholder='Enter your name'
                      value={item.confirm.name}
                      onChange={(e) => setName(e.target.value)}
                      disabled
                    />

                  </div>
                  <div className="name_block">
                    <label className='label_name'>เบอร์ติดต่อ</label>
                    <input
                      className='input_form'
                      type='number'
                      name="phone"
                      placeholder='Enter your telephone'
                      value={item.confirm.phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled
                    />
                  </div>
                </div>
                <div className='popup_block'>
                  <div className="name_block">
                    <label className='label_name'>รายละเอียดเพิ่มเติม</label>
                    <textarea
                      className='input_form'
                      type='text'
                      name="detail"
                      placeholder='Enter your detail'
                      value={item.confirm.detail}
                      onChange={(e) => setDetail(e.target.value)}
                      disabled
                    />
                  </div>
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
