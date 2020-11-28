import Item from './Item';

function List(props) {
    const items = props.items;
    const elmItem = items.map((item, index)=>{
        return (
            <Item onClickEdit={props.onClickEdit} onClickDelete={props.onClickDelete} key={item.id} item={item} index={index}/>
        );
    });
    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Task</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-center" style={{ width: '10%' }}>#</th>
                        <th>Task</th>
                        <th className="text-center" style={{ width: '20%' }}>Level</th>
                        <th className="text-center" style={{ width: '20%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                {elmItem}
                </tbody>
            </table>
        </div>
    );
}

export default List;