import React, { useState, useEffect } from 'react';

const URL = '/api/posts'

const Posts = () => {
    const [allPosts, setPosts] = useState([]);

    const getPosts = async () => {
        const options = {
            method: 'GET',
            headers: new Headers()
        }
        const result = await fetch(URL, options);
        if (result.ok) {
            const posts = await result.json();
            setPosts(posts);
            return posts;
        }
        return [];
    }

    const addPost = async () => {

        const NameFromUser = document.querySelector('#Name').value;
        const PhoneFromUser = document.querySelector('#Phone').value;
        const ShopFromUser = document.querySelector('#Shop').value;
        const MenuFromUser = document.querySelector('#Menu').value;
        const AmountFromUser = document.querySelector('#Amount').value;
        const discriptionFromUser = document.querySelector('#discription').value;
        const stateorder = "order"

        if (!NameFromUser || !PhoneFromUser || !ShopFromUser || !MenuFromUser || !AmountFromUser || !discriptionFromUser) {
            alert('Please fill out all fields');
            return;
        }

        const newPost = {
            name: NameFromUser,
            phone: PhoneFromUser,
            shop: ShopFromUser,
            menu: MenuFromUser,
            amount: AmountFromUser,
            discription: discriptionFromUser,
            stateorder: stateorder
        };


        const headers = new Headers();
        headers.set('Content-Type', 'application/json');

        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(newPost),
        }
        const result = await fetch(URL, options);
        if (result.ok) {
            const post = await result.json();
            allPosts.push(post);
            setPosts(allPosts.slice(post));
        }
    }

    const deletPost = async (id) => {
        const options = {
            method: 'DELETE',
            headers: new Headers()
        }

        try {
            const response = await fetch(URL + `/${id}`, options);

            if (response.ok) {
                setPosts(allPosts.filter(x => x.id !== id));
                return { message: 'Delete Success' };
            } else {
                const errorData = await response.json();
                throw new Error(errorData.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    console.log(typeof deletPost);

    const updatestate = async (id) => {
        const options = {
            method: 'PUT',
            headers: new Headers()
        }
        await fetch(URL + `/${id}`, options);

        setPosts(allPosts.filter(x => x.id !== id));


    }

    useEffect(() => {
        getPosts();
    }, [])

    console.log(allPosts);

    return (
        <div>
            <h1>กรุณาใส่ข้อมูลการฝากซื้อ</h1>
            <div>
                <div>
                    <legend>ชื่อ</legend>
                    <input id="Name" type="text" placeholder="Name" />
                </div>
                <div>
                    <legend>เบอร์โทร</legend>
                    <input id="Phone" type='phone' placeholder='Phone' pattern='[0-9]{1}-[0-9]{4}-[0-9]{4}' required />
                </div>
            </div>
            <div>
                <legend>ชื่อร้าน</legend>
                <input id="Shop" type="text" placeholder="Shop" />
            </div>
            <div>
                <div>
                    <div>
                        <legend>เมนู</legend>
                        <input id="Menu" type="text" placeholder="Menu" />
                    </div>
                    <div>
                        <legend>จำนวน</legend>
                        <input id="Amount" type="text" placeholder="Amount" />
                    </div>
                </div>
                <div>
                    <legend>รายละเอียด</legend>
                    <textarea id="discription" placeholder="รายละเอียดเพิ่มเติม" />
                </div>
            </div>
            <div>
                <button onClick={() => addPost()}>Submit</button>

            </div>
            <div>
                <legend>รายการ</legend>
                {allPosts
                    .filter(x => x.stateorder === "order")
                    .map(x => <PostItem
                        key={x.id}
                        id={x.id}
                        name={x.name}
                        phone={x.phone}
                        shop={x.shop}
                        menu={x.menu}
                        amount={x.amount}
                        description={x.description}
                        deletAction={deletPost}

                    />
                    )
                }

            </div>

        </div>
    )
}

export default Posts;

    const PostItem = ({ id, name, phone, shop, menu, amount, discription, deletAction }) => {
        return (
            <div>
                <h2>{name}</h2>
                <p>{shop}</p>
                <p>{phone}</p>
                <p>{menu} จำนวน {amount} กล่อง</p>
                <p>{discription}</p>
                <button onClick={() => deletAction(id)}>ต้องการรับ</button>
            </div>
        )
    }