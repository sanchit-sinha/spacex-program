const Program = ({program}) => {
    return (
        <tbody>
            <tr>
            <th scope="row">{program.flight_number}</th>
            <td>{program.mission_name}</td>
            <td>{program.launch_site.site_name}</td>
            <td>{program.launch_year}</td>
            <td>{program.rocket.rocket_name}</td>
            <td>{program.launch_success === false ? 'No' : 'Yes'}</td>
            <td>{program.details === null ? 'No Details' : program.details}</td>
            </tr>
        </tbody>
    )
}

export default Program
