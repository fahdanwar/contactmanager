import React, { Component } from 'react'
import Contact from './Contact'
class Contacts extends Component {
    state = {
        contacts: [
            {
                id: 1,
                name: 'John Doe',
                email: 'Jdoe@gmail.com',
                phone: '444-444-444'
            },
            {
                id: 2,
                name: 'Kareen Tripier',
                email: 'Ktripier@gmail.com',
                phone: '544-555-444'
            },
            {
                id: 3,
                name: 'Moo Hoo',
                email: 'mohoo@gmail.com',
                phone: '334-334-444'
            }
        ]
    };


    render() {
        const { contacts } = this.state;
        return (
            <React.Fragment>
                {contacts.map(contact => (
                    <Contact key={contact.id} name={contact.name} email={contact.email} phone={contact.phone}
                    />
                ))}
            </React.Fragment>
        )
    }
}
export default Contacts;