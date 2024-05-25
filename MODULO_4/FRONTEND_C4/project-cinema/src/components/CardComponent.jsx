/* eslint-disable react/prop-types */

import Image from "./Image"
import Title from "./Title"
import Details from "./Detail/Detail"

const Card = (props) => {
    return (
        <div className="container">
            <Image url={props.img} />
            <Title title={props.title} />
            <Details genre={props.genre} status={props.status} />
        </div>
    )
}

export default Card