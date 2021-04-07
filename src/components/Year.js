const Year = ({text , data , changeYear}) => {
    return (
        <div className = 'form-control-check'>
            <label className = "text-white">{text}</label>
            <input type="number" onKeyUp={(e) => changeYear({data} , e.currentTarget.value)} id="quantity" name="quantity" min="2006" placeholder = "xxxx" max={new Date().getFullYear()} />
        </div>
    )
}


export default Year
