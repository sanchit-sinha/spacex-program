import Filter from './Filter'
import Year from './Year'
import Button from './Button'

const Header = ({title , onToggle , changeYear}) => {
    return (
        <header className = 'header'>
            <h1 className = "text-center">{title}</h1>
            <div className="dropdown">
                <button className="btn btn-success btn-block dropdown-toggle float-right my-3" type="button" data-toggle="dropdown">Filters
                <span className="caret"></span></button>
                <ul className="dropdown-menu px-4 bg-info bg-gradient">
                    {/* <li><Filter onToggle = {onToggle} data = "" text="View All" /></li> */}
                    <li><Filter onToggle = {onToggle} data = "&launch_success=true" text="Successful Launch" /></li>
                    <li><Filter onToggle = {onToggle} data = "&land_success=true" text="Successful Landing" /></li>
                    <li><Year text="Year" data = "&launch_year=" changeYear = {changeYear} /></li>
                    {/* <Button text = "APPLY FILTERS"/> */}
                </ul>
            </div>
            
        </header>
    )
}
Header.defaultProps={
    'title' : 'SpaceX-Programs',
}

export default Header
