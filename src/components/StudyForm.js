import React, { useState } from "react";
function StudyForm() {
    const [regInfo, setRegInfo] = useState({
        fullname: '',
        course: 'php',
        object: 'nkt',
        sendMail: true
    });

    const handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox'? target.checked:target.value;
        const name = target.name;
        setRegInfo({
            ...regInfo,
            [name]:value
        });
    }
    const handleSubmit = (e) => {
        console.log(regInfo);
        e.preventDefault();
    }
    return (
        <div className="row">
            <div className="panel panel-info">
                <div className="panel-heading">Panel heading</div>
                <div className="panel-body">
                    <form action="#" method="POST" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="">Họ tên</label>
                                <input name="fullname" value={regInfo.fullname} onChange={handleChange} type="text" className="form-control" placeholder="Fullname" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Khóa học</label>
                                <select onChange={handleChange} value={regInfo.course} name="course" className="form-control">
                                    <option value="angular">
                                        Angular
                  </option>
                                    <option value="react">React</option>
                                    <option value="nodejs">NodeJs</option>
                                    <option value="php">PHP</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Đối tượng</label>
                                <div className="radio">
                                    <label>
                                        <input checked={regInfo.object==='old_student'} onChange={handleChange} type="radio" name="object" id="" defaultValue='old_student' />
                    Học viên cũ
                  </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input checked={regInfo.object==='student'} onChange={handleChange} type="radio" name="object" id="" defaultValue="student" />
                    Học sinh Sinh viên
                  </label>
                                </div>
                                <div className="radio">
                                    <label>
                                        <input checked={regInfo.object==='nkt'} onChange={handleChange} type="radio" name="object" id="" defaultValue="nkt" />
                    Người khuyết tật
                  </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="checkbox">
                                    <label>
                                        <input onChange={handleChange} checked={regInfo.sendMail} name="sendMail" type="checkbox" /> Send mail
                                    </label>
                                </div>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Đăng ký" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default StudyForm;
