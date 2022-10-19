import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Buttonregister = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        setActive(true)
    }

    if (active) {
        Swal.fire(
            'Register',
            'Register Berhasil',
            'success'
        )
        navigate("/")
    }

    return (
        <div>
            <button className='btn-login' onClick={handleClick}>
                Register
            </button>
        </div>
    )
}

export default Buttonregister
