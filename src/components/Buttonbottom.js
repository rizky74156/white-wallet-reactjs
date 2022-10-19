import React from 'react'
import { Link } from 'react-router-dom'

function Buttonbottom({ page, span }) {
    return (
        <div className="container h-100">
            <div className="text-center fixed-bottom ">
                <div className="px-4 py-2 border border-end-0 border-start-0 border-bottom-0 bg-white">
                    <Link to={page} className="btn btn-primary w-100" id="button" type="button">
                        {span}
                    </Link>
                </div>
            </div >
        </div >

    )
}

export default Buttonbottom