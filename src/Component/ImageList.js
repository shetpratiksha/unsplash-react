import React from 'react'

const ImageList = props =>{

        const images = props.images.slice(0, props.visible).map((image,index) =>{
            return (
                
                    <div key={image.id} className="grid-item card">
                        <div className="card-body">
                            <img className="photos" src={image.urls.small}/>
                            <div className="user-data">
                                <img className="profile-pic" src={image.user.profile_image.small}/>
                                <p className="user-name">Image by <span>{image.user.name}</span></p>
                            </div>
                        </div>
                    </div>
               
            )
        })
    return (
        <div className="grid">
            {images}
        </div>
    )

}

export default ImageList
