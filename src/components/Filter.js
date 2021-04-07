const Filter = ({text , data , onToggle}) => {
    return (
        <div className = 'form-control-check'>
            <label className = "text-white" style = {FilterStyle} >{text}</label>
            <input type = 'checkbox' onClick = {(e) => onToggle(e.currentTarget.checked , {data})} value = {data}  ></input>
        </div>
    )
}

const FilterStyle={
    color : "rgb(0, 28, 168)",
}


export default Filter
