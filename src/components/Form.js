import React, {useState, useEffect} from 'react';
function Form(props) {
    const handleCancel = (onClickCancel) => {
        onClickCancel();
    }
    const [task, setTask] = useState({
        id: '',
        name: '',
        level: 0,
    });

    const handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked:target.value;
        const name = target.name;
        setTask({
            ...task,
            [name]:value
        });
    }
    const handleSubmit = (e) => {
        props.onClickSubmit(task);
        e.preventDefault();
    }

    useEffect(()=>{
        let item = props.itemSelected;
        if (item.id !== '') {
            setTask({
                'id': item.id,
                'name': item.name,
                'level': item.level
            })
        }
    })
    

    return (
        <div className="row">
        <div className="col-md-offset-7 col-md-5">
            <form action="#" method="POST" className="form-inline" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="sr-only" htmlFor="taskName">label</label>
                    <input onChange={handleChange} value={task.name} name="name" id="" type="text" className="form-control" placeholder="Task Name" />
                </div>
                <div className="form-group">
                    <label className="sr-only" htmlFor="inputDs">label</label>
                    <select value={task.level} onChange={handleChange} name="level" id="inputDs" className="form-control" required="required" placeholder="Task Name">
                        <option value={0}>Low</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                    <button onClick={()=>handleCancel(props.onClickCancel)} type="button" className="btn btn-default">Cancel</button>
                </div>
            </form>
        </div>
    </div> 
    );
}

export default Form;


