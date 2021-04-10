const Filter = ({text , data , onToggle, status}) => {
    // console.log(text , status)
    return (
        <div className = 'form-control-check'>
            <label className = "text-white" style = {FilterStyle} >{text}</label>
            <input type = 'checkbox' onChange = {(e) => onToggle(e.currentTarget.checked , {data})} value = {data} checked={status} />
        </div>
    )
}

const FilterStyle={
    color : "rgb(0, 28, 168)",
}


export default Filter
