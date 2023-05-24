import React, { useState, useEffect } from "react";
import { useSelector} from "react-redux";
import "../../styles/header.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ToDoDialog = (props) => {
  let activeTitle = useSelector((state) => state.toDos.selected.title);
  let activeStatus = useSelector((state) => state.toDos.selected.completed);
  let loadingStatus = useSelector((state) => state.toDos.loading);
  const [title, setTitle] = useState(activeTitle);
  const [status, setStatus] = useState(activeStatus);
  const [loading, setLoading] = useState(loadingStatus);

  useEffect(() => {
    setTitle(activeTitle);
    setStatus(activeStatus);
    setLoading(loadingStatus);
  }, [activeTitle, loadingStatus]);

  return (
    <Dialog
      fullWidth={true}
      open={props.open}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">
        {"To Do Item"}
      </DialogTitle>
      <DialogContent>
        {!loading ?
          <DialogContentText>
            <div>Title - {title}</div>
            <div>Status - {status ? "Completed" : "Pending"}</div>
          </DialogContentText>
          :
          <div>loading...</div>
        }
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.handleModal(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ToDoDialog;