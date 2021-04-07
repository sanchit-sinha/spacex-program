import Program from './Program'
const Programs = ({programs , onToggle}) => {
    return (
        <div >
             <table className="table">
                <thead className="thead-light text-center">
                    <tr>
                    <th scope="col">Flight Number</th>
                    <th scope="col">Mission Name</th>
                    <th scope="col">Launch Site Name</th>
                    <th scope="col">Launch Year</th>
                    <th scope="col">Rocket Name</th>
                    <th scope="col">Launch Success</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                {programs.map((program , index) => (
                    <Program key={index} program = {program} />
                ))} 
            </table>
            
        </div>
    )
}

export default Programs
