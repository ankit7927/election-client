import React from 'react'
import { Link } from "react-router-dom";

const ProfilePage = () => {
    return (
        <div>ProfilePage
            <Link to="/login" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login here
            </Link>
        </div>
    )
}

export default ProfilePage