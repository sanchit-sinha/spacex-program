const Button = ({text , onReset}) => {
    return (
        <div>
            <button onClick={onReset} className = 'btn btn-block bg-warning'>{text}</button>
        </div>
    )
}

export default Button
