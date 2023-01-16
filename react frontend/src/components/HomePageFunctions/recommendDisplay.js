import React from 'react'
import {Link} from "react-router-dom";

const RecommendDisplay = ({num, image, description, category, link}) => {
    if (num % 2 === 0) {return (<ImageRightSide image={image}
                                                description={description}
                                                category={category}
                                                link={link}
                                 />)}

    else {return (<ImageLeftSide image={image}
                                 description={description}
                                 category={category}
                                 link={link}
                    />)}

}

const ImageRightSide = ({image, description, category, link}) => {
    return(
        <>

            <div className="col text-end my-auto">
                <h2 className={"title_font"}>
                    {category}
                </h2>
                <p className={"font"}>
                    {description}
                </p>
                <Link to={link} style={{textDecoration: "none"}}>
                    <a>
                        <btn className={"button-6"} >
                            Find More
                        </btn>
                    </a>
                </Link>
            </div>

            <img className="col img-fluid w-50 img-thumbnail p-4 m-2" src={image} />
            <div className="w-100"></div>


        </>
    )
}

const ImageLeftSide = ({image, description, category, link}) => {
    return(
        <>


            <img className="col img-fluid w-50 img-thumbnail p-4 m-2" src={image} style={{float: "right"}}/>
            <div className="col text-start my-auto">
                <h2 className={"title_font"}>{category}</h2>
                <p className={"font"}>{description}</p>
                <Link to={link} style={{textDecoration: "none"}}>
                    <a>
                        <btn className={"button-6"} >
                            Find More
                        </btn>
                    </a>
                </Link>
            </div>
            <div className="w-100"></div>

        </>
    )
}

export default RecommendDisplay