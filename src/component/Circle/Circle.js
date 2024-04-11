import styles from './circle.module.css'

const Circle = (props) => {

    const {num} = props

    return (
        <div>
            {/* <div>{getRandomInt(100)}</div> */}
            <p>{num}</p>
        </div>
    )
}


export default Circle;