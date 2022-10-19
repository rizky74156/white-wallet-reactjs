import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Buttonlogin = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        setActive(true)
    }

    if (active) {
        Swal.fire(
            'Login',
            'Login Berhasil',
            'success'
        )
        navigate("/home")
    }

    return (
        <div>
            <button className='btn-login' onClick={handleClick}>
                Login
            </button>
        </div>
    )
}

export default Buttonlogin
