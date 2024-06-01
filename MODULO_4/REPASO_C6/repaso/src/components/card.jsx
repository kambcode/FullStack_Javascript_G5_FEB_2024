/* eslint-disable react/prop-types */
const Card = (props) => {
    return (
        <>
            <div className='card-container'>
                <img width="250" src={props.image} />
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
            </div>
        </>
    )
}
export default Card;