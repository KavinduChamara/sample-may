import React, { useState, useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { fetchItems } from '../../features/toDoSlice';
import Table from '../../Components/Table';
import Header from '../../Components/Header';
// import ToDoDialog from '../../Components/ToDoDialog';
// import Paper from '@mui/material/Paper';
import "../../styles/toDo.css";
import plate from '../../images/plate.png';


import { Scrollama } from 'react-scrollama';
import { useInView } from 'react-intersection-observer';

const ToDo = (props) => {
  const dispatch = useDispatch();
  let toDoList = useSelector((state) => state.toDos.toDos);
  const columnsList = [
    {
      name: 'Id',
      sortable: true,
      selector: row => row.id,
      maxWidth: "120px",
    },
    {
      name: 'User Id',
      selector: row => row.userId,
      maxWidth: "120px",
    },
    {
        name: 'Title',
        selector: row => row.title,
    },
    {
      name: 'Status',
      selector: row => row.completed ? "Completed" : "Pending",
      maxWidth: "220px",
    },
  ]
  const [columns, setColumns] = useState(columnsList);
  const [open, setOpen] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once
  });

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleModal = (status) => {
    setOpen(status);
  }

  const handleStepEnter = ({ data }) => {
    const { element } = data;
    // Perform any additional animation logic here
  };
  
  return (
    <div className="mainDiv">
      <p className="text-3xl text-red-700 font-bold mb-5">
        Welcome2!
      </p>
      <Header />


      <div className="first-layer">
        <div>
          <p className="text-3xl text-red-700 font-bold mb-5">
            Welcome2!
          </p>
        </div>
        <div>
          <img src={plate}></img>
        </div>
      </div>

      <div>
        <div></div>
        <div></div>
      </div>

      <div className="first-layer">
        <div>
          <p className="text-3xl text-red-700 font-bold mb-5">
            Welcome2!
          </p>
        </div>
        <div>
          <img src={plate}></img>
        </div>
      </div>


      <div className="to-do-header"><h2>To Do List</h2></div>
      {/* <Paper className="table-div">
        <Table data={toDoList} columns={columns} handleModal={handleModal} />
      </Paper> */}
      {/* <ToDoDialog open={open} handleModal={handleModal}/> */}
      <div className="first-layer">
        <div>
          <p className="text-3xl text-red-700 font-bold mb-5">
            Welcome2!
          </p>
        </div>
        <div>
          {/* <img src={plate}></img> */}
          <Scrollama onStepEnter={handleStepEnter}>
            <div data-step="1">
              <img
                ref={ref}
                className={`w-140 h-140 transition-opacity duration-1500 ${
                  inView ? 'opacity-100' : 'opacity-0'
                }`}
                src={plate}
                alt="Animated Image"
              />
            </div>
          </Scrollama>

        </div>
      </div>
    </div>
  );
};
  
export default ToDo;
  