import React from 'react'
import List from './List'
import Form from './Form'
import { useState, useEffect } from 'react'
import './style.css'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullName: 'Can',
            phone_number: '123456'
        },
        {
            fullName: 'Jack',
            phone_number:'654321'
        },
        {
            fullName: 'Danny',
            phone_number:'984213'
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div className='container'>
            <h1>Contacts App</h1>
            <List contacts={contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts