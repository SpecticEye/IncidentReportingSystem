import "../../Details.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function Details() {

ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
    labels: [],
    datasets: [
        {
        label: '(%):',
        data: [25,75],
        backgroundColor: [
            'rgba(255, 207, 114, 1)',
            'rgba(230, 230, 230, 1)',
        ],
        borderColor: [
            'rgba(0, 0, 0, 1)',
        ],
        borderWidth: 1,
        },
    ],
    };

  return (
    <div>
        <h1>Defective electric door</h1> 
        <p id="ReportID">ID: 292 007</p>
        <div id="DetailsCont">
            <div className="details-wrapper">
                <table id="DetailsTable">
                    <tr>
                        <td><h2>Department:</h2></td>
                        <td><p>Construction</p></td>
                    </tr>
                    <tr>
                        <td><h2>Category:</h2></td>
                        <td><p>Damaged Infrastructure</p></td>
                    </tr>
                    <tr>
                        <td><h2>Location:</h2></td>
                        <td><p>First Floor, Men’s College Building M1 </p></td>
                    </tr>
                    <tr>
                        <td><h2>Description:</h2></td>
                        <td><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></td>
                    </tr>
                </table>
                <h2>Images:</h2>
            </div>
            <div id="StatusCont">
                <h2>Status</h2>
                <div id="Charts">
                    <div id="UrgencyCircle">
                        <h3>4</h3>
                    </div>
                    <div id="ProgCircle">
                        <Pie data={data} />
                    </div>
                </div>
                <h2>Instructions</h2>
                <p>Lorem ipsum dolor sit amet, consecteturt labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                Aliquip ex ea commodo consequat. Duis 
                fugiat nulla pariatur. Excepteur sintllit anim id est laborum.</p>
            </div>
        </div>
    </div>
  );
}

export default Details;
