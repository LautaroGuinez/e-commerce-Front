import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { useParams } from "react-router";

const AllUsersView = () => {
  const [allusers, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const users = await axios.get("http://localhost:3001/api/users");
        return setAllUsers(users.data);
      } catch (error) {
        return alert("Error fetching data:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (user) => {
    const { id } = user;

    try {
      await axios.delete(`http://localhost:3001/api/users/${id}/delete`,user);
      return setAllUsers(allusers.filter((u) => u.id !== id));
    } catch (error) {
      return alert("Error fetching data:", error);
    }
  };
  const handleMakeAdmin = async (user) => {
    const { id } = user;
    try {
      if (user.admin == false) {
        user.admin = true;
        return await axios.put(
          `http://localhost:3001/api/users/${id}/edit`,
          user
        );
      } else {
        user.admin = false;
        return await axios.put(
          `http://localhost:3001/api/users/${id}/edit`,
          user
        );
      }
    } catch (error) {
      return alert("Error fetching data:", error);
    }
  };
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">LastName</TableCell>
              <TableCell align="right">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allusers.map((user) => (
              <TableRow
                key={user.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {user.id}
                </TableCell>
                <TableCell align="right">{user.name}</TableCell>
                <TableCell align="right">{user.lastname}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <Button
                  type="submit"
                  variant="contained"
                  align="right"
                  onClick={() => handleMakeAdmin(user)}
                >
                  Make Admin
                </Button>
                <Button
                 type="submit"
                  variant="contained"
                  align="right"
                  type="submit"
                  onClick={() => handleDelete(user)}
                >
                  Delete
                </Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default AllUsersView;
