import { useState } from 'react'
import Navbottom from '../components/Navbottom'
import profile from '../asset/gina.svg'
import Profilecard from '../components/Profilecard'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const Profile = () => {
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault()
        setActive(true)
    }

    if (active) {
        Swal.fire({
            title: 'Apa kamu yakin?',
            text: "Kamu akan keluar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Log out',
                    'Log out berhasil',
                    'success'
                )
                navigate("/")
            }
        })
    }

    return (
        <div className='background'>
            <div className="bg-white mb-2">
                <div className="container">
                    <div className="profile py-3 d-flex justify-content-between align-items-center">
                        <div className="data-diri">
                            <h1>Gina</h1>
                            <span>085697109666</span>
                        </div>
                        <div className="foto-profile">
                            <img src={profile} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white my-2">
                <div className="container">
                    <div className='setting py-3'>
                        <Profilecard judul={"Email"} subjudul={"********ina@****l.com"} />
                        <Profilecard judul={"Pertanyaan Keamanan"} subjudul={"Sudah diatur"} />
                        <Profilecard judul={"Pengaturan PIN"} />
                        <Profilecard judul={"Bahasa"} subjudul="Indonesia" />
                    </div>
                </div>
            </div>

            <div className="bg-white my-2">
                <div className="container">
                    <div className='setting py-3'>
                        <Profilecard judul={"Ketentuan Layanan"} />
                        <Profilecard judul={"Kebijakan Privasi"} />
                        <Profilecard judul={"Pusat Bantuan"} />
                    </div>
                </div>
            </div>

            <button className='keluar bg-white text-center' onClick={handleClick}>
                Keluar
            </button>
            <Navbottom />
        </div>
    )
}

export default Profile