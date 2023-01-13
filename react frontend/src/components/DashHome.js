import React from "react";

const DashHome = () => {
    //Initialize user
    const user = JSON.parse(localStorage.getItem('currentUser'));

    return(
        <div>
            <h1>Welcome back, {user.name}!</h1>
        </div>
    )
}
export default DashHome