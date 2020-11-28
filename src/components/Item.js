function showElementLevel(level) {
    let elmLever = <span className="label label-default">Low</span>;
    if (level === 1) {
        elmLever = <span className="label label-info">Medium</span>;
    } else if (level === 2) {
        elmLever = <span className="label label-danger">High</span>;
    } 
    return elmLever;

}

function Item(props) {
    const {item} = props;
    const handleDelete = id => {
        props.onClickDelete(id);
    }
    const handleEdit = item => {
        props.onClickEdit(item);
    }
    return (
        <tr style={{"height": "50px"}}>
            <td className="text-center">{props.index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">{showElementLevel(item.level)}</td>
            <td className="text-center">
                <button onClick={()=>handleEdit(item)} type="button" className="btn btn-warning btn-sm">Edit</button>
                <button onClick={()=>handleDelete(item.id)} type="button" className="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    );
}

export default Item;