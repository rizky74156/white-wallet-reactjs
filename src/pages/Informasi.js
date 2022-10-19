import React from 'react'
import Inbox from './Inbox'
import Inboxempty from '../components/Inboxempty.js'

const Informasi = () => {
    return (
        <div>
            <div className='Navbar'>
                <Inbox />
            </div>

            <Inboxempty judul="informasi"/>
        </div>
    )
}

export default Informasi