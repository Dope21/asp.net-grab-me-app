// import React, { useState } from 'react';
// import './Items.css';

// const data = [
//     {
//       name: 'accept 12',
//       item: 'test accept A',
//       count: 5,
//       detail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     },
//     {
//       name: 'accept 23',
//       item: 'test accept B',
//       count: 10,
//       detail: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     },
//     {
//       name: 'accept 33',
//       item: 'test accept C',
//       count: 2,
//       detail: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
//     },
//   ];

// function Items_data() {
//   const [activePopup, setActivePopup] = useState(null);

//   const openPopup = (index) => {
//     setActivePopup(index);
//   };

//   const closePopup = () => {
//     setActivePopup(null);
//   };
//   return (
//     <div>
//       <h1>List of Items</h1>




//         {data.map((item,index) => (
//           <div className="container-item">
//             <p>ร้าน : {item.name}</p>
//             <p>สิ่งที่ฝากซื้อ</p>
//             <div className="item-count">
//               <div>{item.item}</div>
//               <div className="count">จำนวน {item.count} กล่อง</div>
//             </div>
//             <p>ร้านละเอียดเพิ่มเติม</p>
//             <div className='detail_data'>{item.detail}</div>
//             <div className="group-order">
//               <button className="btn-get" onClick={() => openPopup(index)}>เราซื้อให้</button>
//               <div className="ph_holder">testttttt tttt</div>

//             </div>
//             {activePopup === index && (
//               <div>
//                 <div className="backdrop" onClick={closePopup}></div>
// <div className="popup">
//                 {/* Popup content here */}
//                 <div className="header">
//                 <h2>กรุณากรอกข้อมูล</h2>

//                 </div>
//                 <hr class="solid"></hr>
//                 <div className='popup_block' >
//                 <div className="name_block">
//                   <label className='label_name'>ชื่อ</label>
//                   <input className='input_form'type='text' name="name" placeholder='Enter your name'></input>

//                 </div>
//                 <div className="name_block">
//                 <label className='label_name'>เบอร์ติดต่อ</label>

//                   <input className='input_form'type='number' name="phone" placeholder='Enter your telephone'></input>
//                 </div>
//               </div>
//               <div className='popup_block'>
//               <div className="name_block">
//               <label className='label_name'>รายละเอียดเพิ่มเติม</label>
//               <textarea className='input_form2'type='text' name="name" placeholder='Enter your detail'></textarea>
//               </div>
//               </div>
//               <div className='suscess_btn'>
//               <button className="btn-get2">ยืนยันการรับฝาก</button>
//               </div>

//               </div>
//               </div>




//             )}
//           </div>

//         ))
//         }

//     </div>
//   );
// }

// export default Items_data;


import React, { useState, useEffect } from 'react';
import './Items.css';

function Items_data() {

  const handleConfirmPickup = () => {
    // Here, you can add the logic to confirm the item pickup.
    // This may involve making an API request to the server.
    // You can use the data associated with the current item (e.g., item.shop, item.name, etc.) to send the confirmation.
    // For example:

    // const confirmationData = {

    //   name: name, // Use the name state variable
    //   phone: phone, // Use the phone state variable
    //   detail: detail,
    //   // Add other relevant data needed for confirmation
    // };

    // const url = `https://localhost:7155/api/posts/${data[activePopup].id}`;
    // fetch(url, {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json", // Set the content type to JSON
    //   },
    //   body: JSON.stringify(confirmationData), // Convert the data object to JSON format
    // })
    //   .then(res => {
    //     console.log(res.json())
    //   })


    // Now, you can send this data to the server using an API request.
    // You can use the fetch or any other HTTP library for this purpose.
    // Make the API request here to confirm the pickup.

    // After the confirmation is successful, you can close the popup if needed.
    closePopup();
  };

  const [activePopup, setActivePopup] = useState(null);
  const [data, setData] = useState([]); // Initialize data as an empty array
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [detail, setDetail] = useState('');

  useEffect(() => {
    const url = "https://localhost:7155/api/posts/view";

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
        // Transform the data into the desired format
        const transformedData = resdata.map(item => ({
          id: item.id,
          shop: item.shop,
          name: item.name,
          item: item.menu,
          phone: item.phone,
          count: parseInt(item.amount, 10),
          detail: item.discription,
          confirm: item.confirmInfo,
          // contfim_name: item.confirmInfo.name,
          // contfim_phone: item.confirmInfo.phone,
          // contfim_detail: item.confirmInfo.detail,

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
            <button className="btn-get" onClick={() => openPopup(index)}>more detail</button>
            <div className="ph_holder">{item.name} โทร: {item.phone}</div>

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
                {/* <div className='suscess_btn'>
                  <button className="btn-get2" onClick={handleConfirmPickup}>X</button>
                </div> */}
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