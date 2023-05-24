import React from "react";
import DataTable from 'react-data-table-component';
import { useDispatch} from "react-redux";
import { getItem } from '../../features/toDoSlice';

const Table = (props) => {
  const dispatch = useDispatch();
  const handleRowClicked = (el) => {
    dispatch(getItem(el.id));
    props.handleModal(true);
  }

  return (
    <div>
      <DataTable
        columns={props.columns}
        data={props.data}
        pagination
        onRowClicked={handleRowClicked}
      />
    </div>
  );
};
  
export default Table;
  