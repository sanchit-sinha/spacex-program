import Filter from './Filter'
import Year from './Year'
import Button from './Button'

const Header = ({title , onToggle , launch_filter , land_filter , year_value , changeYear , onReset}) => {
    return (
        <header className = 'header'>
            <h1 className = "text-center">{title}</h1>
            <div className="dropdown">
                <button className="btn btn-success btn-block dropdown-toggle float-right my-3" type="button" data-toggle="dropdown">Filters
                <span className="caret"></span></button>
                <ul className="dropdown-menu px-4 bg-info bg-gradient">
                    {/* <li><Filter onToggle = {onToggle} data = "" text="View All" /></li> */}
                    <li><Filter onToggle = {onToggle} status = {launch_filter} data = "&launch_success=true" text="Successful Launch" /></li>
                    <li><Filter onToggle = {onToggle} status = {land_filter} data = "&land_success=true" text="Successful Landing" /></li>
                    <li><Year text="Year" year_value = {year_value} data = "&launch_year=" changeYear = {changeYear} /></li>
                    {/* <Button onReset={onReset} text = "RESET FILTERS"/> */}
                </ul>
            </div>
            
        </header>
    )
}
Header.defaultProps={
    'title' : 'SpaceX-Programs',
}

export default Header
