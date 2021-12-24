import Button from 'react-bootstrap/Table'

function Todo() {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Task</th>
                <th scope="col">Status</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Do homework 2</td>
                <td>Not yet</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Work out 30 min</td>
                <td>Not yet</td>
            </tr>
        </tbody>
    </table>
  );
}

export default Todo;
