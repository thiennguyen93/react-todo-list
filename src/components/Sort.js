function Sort(props) {
    let {orderBy, orderDir} = props;
    let strSort = orderBy + ' - ' + orderDir;
    const handleSort = (hOrderBy,hOrderDir) => {
        props.onClickSort(hOrderBy,hOrderDir);
    };

    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="dropdown">
                <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                    Sort by <span className="caret" />
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li><a onClick={()=>handleSort('Name','ASC')} href="#name-asc" role="button">Name ASC</a></li>
                    <li><a onClick={()=>handleSort('Name','DESC')} href="#name-desc" role="button">Name DESC</a></li>
                    <li role="separator" className="divider" />
                    <li><a onClick={()=>handleSort('Level','ASC')} href="#level-asc" role="button">Level ASC</a></li>
                    <li><a onClick={()=>handleSort('Level','DESC')} href="#level-desc" role="button">Level DESC</a></li>
                </ul>
                <span className="label label-success label-medium">{strSort}</span>
            </div>
        </div>
    );
}

export default Sort;