import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Buttonregister = ({submit}) => {
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
            <button className='btn-login' type='submit' onClick={handleClick} onSubmit={submit}>
                Register
            </button>
        </div>
    )
}

export default Buttonregister
