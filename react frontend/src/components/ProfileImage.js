import React from 'react'

const ProfileImage = ({ image }) => {
    return(
        <p><img src={image} height={300} /></p>
    )
}

ProfileImage.defaultProps = {
    image: require('../img/default-avatar.jpg'),
}
export default ProfileImage
