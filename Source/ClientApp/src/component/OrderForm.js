import React from 'react';
import './OrderForm.css';
import { useState } from 'react';

function OrderForm() {

  const handleOrderForm = (e) => {
    e.preventDefault()

    // Validation checks
    if (typeof name !== 'string' || name.trim() === '') {
      alert('Please enter a valid name.');
      return;
    }

    if (typeof phone !== 'string' || !/^\d{10}$/.test(phone)) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }

    if (typeof shop !== 'string' || shop.trim() === '') {
      alert('Please enter a valid shop.');
      return;
    }

    if (typeof menu !== 'string' || menu.trim() === '') {
      alert('Please enter a valid menu.');
      return;
    }

    if (typeof amount !== 'string' || !/^[1-9]\d*$/.test(amount)) {
      alert('Please enter a valid amount as a positive integer.');
      return;
    }

    if (typeof discription !== 'string' || discription.trim() === '') {
      alert('Please enter a valid discription.');
      return;
    }

    const OrderForm = {
      Name: name,
      Phone: phone,
      Shop: shop,
      Menu: menu,
      Amount: amount,
      Discription: discription,
      ConfirmInfo: {}
    };

    const url = `/api/posts`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(OrderForm), // Convert the data object to JSON format
    })
      .then(res => {
        console.log(res.json())
        window.location.href = "/";
      })
  };

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [shop, setShop] = useState('');
  const [menu, setMenu] = useState('');
  const [amount, setAmount] = useState('');
  const [discription, setDiscription] = useState('');

  return (
    <>
      <div className='container-item'>
        <h2>กรุณากรอกข้อมูลการฝากซื้อ</h2>
        <hr class="solid"></hr>
        <form class="form-horizontal" onSubmit={handleOrderForm}>
          <div className='popup_block' >
            <div className="name_block">
              <label className='label_name'>ชื่อ</label>
              <input className='input_form' type='text' name="name" placeholder='Enter your name' value={name} onChange={(e) => setName(e.target.value)}></input>

            </div>
            <div className="name_block2">
              <label className='label_name'>เบอร์ติดต่อ</label>

              <input className='input_form' type='number' name="phone" placeholder='Enter your telephone' value={phone} onChange={(e) => setPhone(e.target.value)}></input>
            </div>
          </div>
          <div className='popup_block'>
            <div className="name_block">
              <label className='label_name_shop'>ชื่อร้าน</label>
              <input className='input_form3' type='text' name="shop" placeholder='Enter your shop name' value={shop} onChange={(e) => setShop(e.target.value)}></input>
            </div>
          </div>

          <div className='popup_block' >
            <div className="name_block">
              <label className='label_menu'>เมนู</label>
              <input className='input_form' type='text' name="name" placeholder='Enter your name' value={menu} onChange={(e) => setMenu(e.target.value)}></input>

            </div>
            <div className="name_block2">

              <label className='label_number'>จำนวน</label>

              <input className='input_form' type='number' name="phone" placeholder='Enter your telephone' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            </div>
          </div>

          <div className='popup_block'>
            <div className="name_block">
              <label className='label_name'>รายละเอียดเพิ่มเติม</label>
              <textarea className='input_form2' type='text' name="name" placeholder='Enter your detail' value={discription} onChange={(e) => setDiscription(e.target.value)}></textarea>
            </div>
          </div>

          <div className='suscess_btn'>
            <button className="btn-get2" type='submit'>ยืนยันการฝากซื้อ</button>
          </div>
        </form>
      </div>
    </>
  )
}
export default OrderForm;
