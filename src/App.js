// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Control from './components/Control';
import Form from './components/Form';
import List from './components/List';
import React, { useState } from 'react';
import tasks from './mocks/tasks';
import { v4 as uuidv4 } from 'uuid';
import {filter, includes, orderBy as _OrderBy, remove} from 'lodash';
// const handleToggleForm = ()=> {

// }



function App() {
  // Khai báo 1 biến trạng thái mowits đặt tên là item;
  const [itemsOrigin, setItemsOrigin] =  useState(tasks)
  let items =[];
  const [isShowForm, setIsShowForm] = useState(false);
  const [strSearch, setStrSearch] = useState('');
  const [orderBy, setOrderBy] = useState('Name');
  const [orderDir, setOrderDir] = useState('ASC');
  const [itemSelected, setItemSelected] = useState(null);
  const handleCloseForm = () => {
    setIsShowForm(false);
  };
  const handleSearch = (value) => {
    setStrSearch(value);
  };

  const handleSort = (hOrderBy, hOrderDir)=>{
    setOrderBy(hOrderBy);
    setOrderDir(hOrderDir);
  }

  const handleSubmit = item => {
    console.log("to be added: ",item);
    let newItem = {
        id: uuidv4(),
        name: item.name,
        level: parseInt(item.level),
      };
      items.push(newItem);
      setItemsOrigin(items);
      // console.log(newItem);
      // item.push(newItem);
  };

  const handleEdit = (item) => {
    setItemSelected(item);
    setIsShowForm(true);
  }
  
  // if (strSearch.length>0) {
  //   itemsOrigin.forEach(item => {
  //     if (item.name.toLocaleLowerCase().indexOf(strSearch)!==-1) {
  //       items.push(item);
  //     }
  //   });
  // } else {
  //   items = itemsOrigin;
  // }
  
  items = filter(itemsOrigin, (item)=> {
    return includes(item.name.toLocaleLowerCase(), strSearch.toLocaleLowerCase());
  })

  items = _OrderBy(itemsOrigin,[orderBy.toLowerCase()],[orderDir.toLowerCase()])
  console.log(items);
  const handleDelete = id => {
    remove(items, (item)=> {
      return item.id === id;
    });
    setItemsOrigin(items);
  }


  let elmForm = null;
  if (isShowForm) {
    elmForm = <Form itemSelected={itemSelected} onClickSubmit={handleSubmit} onClickCancel={handleCloseForm}/>
  }
  return (
    <div data-reactroot>
      {/* BEGIN: TITLE */}
      <Title />
      {/* END: TITLE */}

      {/* BEGIN: CONTROL */}
      <Control onClickSort={handleSort} orderBy={orderBy} orderDir={orderDir} onClickSearchGo={handleSearch} isShowForm = {isShowForm} onClickAdd={()=>setIsShowForm(!isShowForm)}/>
      {/* END: CONTROL */}

      {/* BEGIN: FORM */}
      {elmForm}
      {/* END: FORM */}

      {/* BEGIN: LIST OF TO-DOs */}
      <List onClickEdit={handleEdit} onClickDelete={handleDelete} items={items}/>
      {/* END: LIST OF TO-DOs */}
    </div>
  );
}

export default App;
