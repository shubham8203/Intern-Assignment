"use client";
import {
  FormControlLabel,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  TextField
} from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import "./Table1.css";
import {
  randomUserName,
  randomEmail,
  randomPrice,
} from "@mui/x-data-grid-generator";
import profile from "../Public/profile.png";
import paid from "../Public/paid.png";
import sent from "../Public/sent.png";
import draft from "../Public/draft.png";
import reject from "../Public/reject.png";
import over from "../Public/over.png";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckBox from "@mui/material/Checkbox";

const originalRows = [
  {
    id: "#5041",
    status: "Paid",
    client: {
      name: "Shubham Chauhan",
      email: "shubhamchauhan8203@gmail.com",
      image: profile,
    },
    total: 2000,
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5042",
    status: "Paid",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 200,
  },

  {
    id: "#5043",
    status: "Cancelled",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5044",
    status: "Overdue",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5045",
    status: "Draft",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5046",
    status: "Draft",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5047",
    status: "Paid",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5048",
    status: "Cancelled",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5049",
    status: "Overdue",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5050",
    status: "Paid",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5051",
    status: "Paid",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5052",
    status: "Cancelled",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5053",
    status: "Overdue",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5054",
    status: "Draft",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5055",
    status: "Draft",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5056",
    status: "Paid",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5057",
    status: "Cancelled",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
  {
    id: "#5058",
    status: "Overdue",
    client: { name: randomUserName(), email: randomEmail(), image: profile },
    total: Math.floor(randomPrice(1000, 5000)),
    issued_date: formatDate(
      new Date(Date.now() - Math.floor(Math.random() * 100 * 86400))
    ),
    balance: 0,
  },
];

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDate(date) {
  
  let day = date.getDate();
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[date.getMonth()]; // getMonth() returns a zero-based index
  let year = date.getFullYear();

  // Format the date as "12 October 2024"
  let formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}



  // Calculate the rows to display based on current page and rows per page
  


const Table1 = ({ status, search }) => {
  const [rows, setRows] = useState(originalRows);
  const [check, setChecked] = useState(
    rows.map(() => {
      return false;
    })
  );
  const [page, setPage] = useState(0); // Page index starts from 0
  const [rowsPerPage, setRowsPerPage] = useState(5); // Default rows per page
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');
  const [filters, setFilters] = useState({
    id:'',
    name:'',
    email:'',
    total:'',
    status:'',
    issued_date:'',
    balance:''
  });

  useEffect(()=>{
    if(status!==''){
    setFilters({...filters,status:status});
    }

},[status]);
useEffect(()=>{
  
  setFilters({...filters,name:search});
  

},[search]);
  // Handle page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page when rows per page change
  };

  const handleRequestSort = (property) => {
    console.log("hello");
    const isAsc = (orderBy === property && order === 'asc');
    setOrder((isAsc )? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = useCallback( [...rows].sort((a, b) => {
   
         if(orderBy==='issued_date'){
          
          const A=a.issued_date.split(' ');
          const B=b.issued_date.split(' ');
          if(order==='asc'){
          return (A[2]<B[2])?true:(A[2]>B[2])?false:(monthNames.indexOf(A[1])<monthNames.indexOf(B[1]))?true:(monthNames.indexOf(A[1])>monthNames.indexOf(B[1]))?false:(A[0]<B[0])?true:(A[0]>B[0])?false:true;
          }
          else{
            return (A[2]<B[2])?false:(A[2]>B[2])?true:(monthNames.indexOf(A[1])<monthNames.indexOf(B[1]))?false:(monthNames.indexOf(A[1])>monthNames.indexOf(B[1]))?true:(A[0]<B[0])?false:(A[0]>B[0])?true:false;
          }
            
         }
else{
  let valA,valB;
  if(orderBy=='name'){
       valA = a.client[orderBy].toLowerCase();
       valB = b.client[orderBy].toLowerCase();
  }
  else{
    valA = a[orderBy].toString().toLowerCase();
       valB = b[orderBy].toString().toLowerCase();
  }
      return order === 'asc' ? valA.localeCompare(valB) : valB.localeCompare(valA);
}
  }),[order,orderBy,rows,]);
console.log(sortedData);
  // Handle Filtering
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredData = useCallback(
    sortedData.filter((row) => {
    return (
      row.client.name.toLowerCase().includes(filters.name.toLowerCase()) &&
      row.client.email.toString().includes(filters.email.toLowerCase()) &&
      row.id.toLowerCase().includes(filters.id.toLowerCase())&&
      (row.total.toString().toLowerCase().includes(filters.total.toLowerCase()))&&
      row.issued_date.toLowerCase().includes(filters.issued_date.toLowerCase())&&
      (row.balance.toString().toLowerCase().includes(filters.balance.toLowerCase()))&&
      (row.status.toLowerCase().includes(filters.status.toLowerCase()))

    );
  }),[filters,order,orderBy,rows]);
  const handleDelete = (id) => {
    const updatedData = rows.filter((row) => row.id !== id);
    console.log(updatedData);
    
    setRows(updatedData); // Update the table data by removing the row
  };
  

  console.log(check);
  const paginatedRows = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <TableContainer className="table-container" component={Paper}>
      <Table className="table-main">
        <TableHead className="table-header">
          <TableRow className=" head-cell ">
            <TableCell className="head-cell-0">
              <FormControlLabel
              style={{marginRight:'0px',marginLeft:'0px'}}
                control={
                  <CheckBox checked={check.some((val) => val == true)}  />
                }
                onChange={(e) => {
                  console.log(e.target.checked);
                  const n = check.map(
                    (ele, idx, arr) => (arr[idx] = e.target.checked)
                  );
                  console.log(n);
                  setChecked(n);
                }}
              ></FormControlLabel>
            </TableCell>

            <TableCell className="head-cell-border head-cell head-cell-1" align="center">

              <TableSortLabel
               sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                active={orderBy === 'id'}
                direction={orderBy === 'id' ? order : 'asc'}
                onClick={() => handleRequestSort('id')}
              >
                ID
              </TableSortLabel>
              <TextField
                label="Filter"
                name="id"
                value={filters.id}
                onChange={handleFilterChange}
                
                className="filter"
              /> </TableCell>
            <TableCell className="head-cell-border head-cell head-cell-2" align="center">


                STATUS
                <TextField
                label="Filter "
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
                className="filter"
              />
             
            </TableCell>
            <TableCell className="head-cell-border head-cell head-cell-3" align="center">
            
              <TableSortLabel
             sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
              CLIENT
              </TableSortLabel>
              <div className="name-email-filter">
              <TextField
                label="Filter by name "
                name="name"
                value={filters.name}
                onChange={handleFilterChange}
                className="filter name-filter"
                
              />
              <TextField
                label="Filter by email "
                name="email"
                value={filters.email}
                onChange={handleFilterChange}
                className="filter email-filter"
                
              />
              </div>
              
            </TableCell>
            <TableCell className="head-cell-border head-cell head-cell-4" align="center">
            <TableSortLabel
            sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                active={orderBy === 'total'}
                direction={orderBy === 'total' ? order : 'asc'}
                onClick={() => handleRequestSort('total')}
              >
                TOTAL
              </TableSortLabel>
              <TextField
                label="Filter"
                name="total"
                value={filters.total}
                onChange={handleFilterChange}
                className="filter"
                sx={{width:'100px'}}
              /></TableCell>
            <TableCell className="head-cell-border head-cell head-cell-5" align="center">
            <TableSortLabel
            sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                active={orderBy === 'issued_date'}
                direction={orderBy === 'issued_date' ? order : 'asc'}
                onClick={() => handleRequestSort('issued_date')}
              >
               ISSUED DATE
              </TableSortLabel>
              <TextField
                label="Filter"
                name="issued_date"
                value={filters.issued_date}
                onChange={handleFilterChange}
                className="filter"
                sx={{width:'100px'}}
              /></TableCell>
            <TableCell className="head-cell-border head-cell head-cell-6" align="center">
            <TableSortLabel
           sx={{display:'flex',flexDirection:'row',justifyContent:'center'}}
                active={orderBy === 'balance'}
                direction={orderBy === 'balance' ? order : 'asc'}
                onClick={() => handleRequestSort('balance')}
              >
              BALANCE
              </TableSortLabel>
              <TextField
                label="Filter"
                name="balance"
                value={filters.balance}
                onChange={handleFilterChange}
                className="filter"
                sx={{width:'100px'}}
              /> </TableCell>
            <TableCell className=" head-cell head-cell-7" align="center">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedRows.map((row, idx) => {
            const { id, status, client, total, balance, issued_date } = row;
            return (
              <TableRow key={id} className={check[idx] ? "checked body" : "body"}>
                <TableCell className="table-cell-0">
                  <CheckBox
                  style={{zIndex:'0'}}
                    checked={check[idx]}
                    onChange={(e) => {
                      setChecked((prevState) =>
                        prevState.map((item, index) =>
                          index === idx ? e.target.checked : item
                        )
                      );
                    }}
                  />
                </TableCell>
                <TableCell className="table-cell-1" align="center">{id}</TableCell>
                <TableCell className="table-cell-2" align="center">
                  {status === "Paid" ? (
                    <img src={paid.src} className="status"></img>
                  ) : status === "Cancelled" ? (
                    <img src={reject.src} className="status"></img>
                  ) : status === "Draft" ? (
                    <img src={draft.src} className="status"></img>
                  ) : status === "Overdue" ? (
                    <img src={over.src} className="status"></img>
                  ) : status === "Sent" ? (
                    <img src={sent.src} className="status"></img>
                  ) : (
                    <></>
                  )}
                </TableCell>
                <TableCell className="">
                  <div className="table-cell-3">
                  <div>
                    <img src={profile.src} className="profile"></img>
                  </div>
                  <div className="user-info">
                    <div className="name">{client.name}</div>
                    <div className="email">{client.email}</div>
                  </div>
                  </div>
                 
                </TableCell>
                <TableCell className="table-cell-4" align="center">${total}</TableCell>
                <TableCell className="table-cell-5" align="center">{issued_date}</TableCell>
                <TableCell className="table-cell-6" align="center">
                  {balance === 0 ? (
                    <div className="paid-btn">Paid</div>
                  ) : (
                    `$${balance}`
                  )}
                </TableCell>
                <TableCell className="table-cell-7" align="center" onClick={(e)=>handleDelete(row.id)}>
                  <DeleteIcon />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
      className="pagination"
        rowsPerPageOptions={[5, 10, 15]}  // Options for rows per page
        component="div"
        count={filteredData.length}               // Total number of rows
        rowsPerPage={rowsPerPage}         // Rows per page to display
        page={page}                       // Current page number
        onPageChange={handleChangePage}   // Handle page change
        onRowsPerPageChange={handleChangeRowsPerPage}  // Handle rows per page change
      />
    </TableContainer>
  );
};

export default Table1;
