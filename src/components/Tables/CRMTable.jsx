// IMPORTS
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

// CSS IMPORTS
import "./CRMTable.scss";

// FUNCTION TO CREATE DATA
function createData(name, profession, email, date, salary, age, status) {
  return {
    name,
    profession,
    email,
    date,
    salary,
    age,
    status,
  };
}

// DUMMY ROWS
const rows = [
  createData(
    "Rajesh",
    "Human Resources Assistant",
    "rajesh@gmail.com",
    "09/27/2018",
    2400,
    23,
    "Pending"
  ),
  createData(
    "Sourav",
    "Nuclear Power Engineer",
    "sourav@gmail.com",
    "04/15/2021",
    2100,
    20,
    "Current"
  ),
  createData(
    "Ram",
    "Sales Representative",
    "ram@gmail.com",
    "01/01/2023",
    6400,
    30,
    "Professional"
  ),
  createData(
    "Rahim",
    "Senior Cost Accountant",
    "rahim@gmail.com",
    "05/07/2021",
    1400,
    21,
    "Rejected"
  ),
  createData(
    "Kunal",
    "Geologist",
    "kunal@gmail.com",
    "04/08/2020",
    5000,
    18,
    "Pending"
  ),
];

export default function CRMTable() {
  return (
    <Box className="CRMTable">
      <TableContainer>
        <Table sx={{ minWidth: 400 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="table_header">
                <p>NAME</p>
              </TableCell>
              <TableCell className="table_header" align="left">
                <p>EMAIL</p>
              </TableCell>
              <TableCell className="table_header" align="left">
                <p>DATE</p>
              </TableCell>
              <TableCell className="table_header" align="left">
                <p>SALARY</p>
              </TableCell>
              <TableCell className="table_header" align="left">
                <p>AGE</p>
              </TableCell>
              <TableCell className="table_header" align="left">
                <p>STATUS</p>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="table_content" component="th" scope="row">
                  <p className="name"> {row.name}</p>
                  <p className="profession">{row.profession}</p>
                </TableCell>
                <TableCell className="table_content" align="left">
                  <p>{row.email}</p>
                </TableCell>
                <TableCell className="table_content" align="left">
                  <p>{row.date}</p>
                </TableCell>
                <TableCell className="table_content" align="left">
                  <p> ${row.salary}</p>
                </TableCell>
                <TableCell className="table_content" align="left">
                  <p> {row.age}</p>
                </TableCell>
                <TableCell className="table_content" align="left">
                  <Status status={row.status} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   STATUS                                   */
/* -------------------------------------------------------------------------- */

function Status({ status }) {
  let color = "";
  switch (status) {
    case "Pending":
      color = "#FFB400";
      break;
    case "Current":
      color = "#9155FD";
      break;
    case "Rejected":
      color = "#FF4C51";
      break;
    case "Professional":
      color = "#56CA00";
      break;
  }

  return (
    <Box className="status" bgcolor={color}>
      <p>{status}</p>
    </Box>
  );
}
