import Search from './Search';
import Sort from './Sort';
const handleAdd = (onClickAdd) => {
    onClickAdd();
}

function Control(props) {
    let {orderBy, orderDir} = props;
    let elmButton = <button onClick={()=>handleAdd(props.onClickAdd)} type="button" className="btn btn-info btn-block">Add Task</button>
    if (props.isShowForm===true) {
        elmButton = <button onClick={()=>handleAdd(props.onClickAdd)} type="button" className="btn btn-default btn-block">Close form</button>
    }
    return (
        <div className="row">
            <Search onClickGo={props.onClickSearchGo} />
            <Sort onClickSort={props.onClickSort} orderBy={orderBy} orderDir={orderDir} />
            <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            {elmButton}
            </div>
        </div>
    );
}

export default Control;
