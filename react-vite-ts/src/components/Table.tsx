import { useEffect, useState } from "react";
import { Book } from "../assets/typings";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import Departments from "./Departments";
import Logout from "./Logout";

function Table() {

  const [rows, setRows] = useState<Book[]>([]);

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 250
    },
    {
      field: 'author',
      headerName: 'Author',
      width: 150
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 150
    }
  ];

  const getTableData = async () => {
    const response = await fetch('https://fakerapi.it/api/v1/books?_quantity=5');
    const details = await response.json();
    console.log(details);
    setRows(details.data);
  }

  useEffect(() => {
    getTableData();
  }, []);

  return (
    <div >
      <Box sx={{width: '60%', height: 400, margin: 'auto'}}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
      <Departments/>
      <Logout/>
    </div>
  )
}

export default Table;