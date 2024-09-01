import React from 'react'
import { getstudents } from "@/api/studentsapi";
import { useQuery } from '@tanstack/react-query';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useState } from 'react';
import { Edit, Search } from 'lucide-react';
import { Trash2} from 'lucide-react';


 const StudentList = () => {
 const [searchTerm,setsearchTerm]= useState("")
  
  
  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "Name" },
    { field: "roll no" },
    { field: "Branch" },
    {
       field: "assigned to"
       ,cellRenderer: ()=>(
        <span className='cursor-pointer underline'>Student</span>
       )

     },
    { field: "edit",maxWidth:100 ,
      cellRenderer:()=>(
        <div className='py-2'><Edit color='gray' className='cursor-pointer'/></div>
      )
    },
    { field: "delete" ,maxWidth:100 ,
      cellRenderer:()=>(
        <div className='py-2'>
          <Trash2 color='red' className='cursor-pointer'/>
          </div>
      )
    }
  ]);
 
  const{data: students,isPending,error}=useQuery({
    queryKey: ["students"],
    queryFn:getstudents,

  });
  console.log({students});
  return ( <div> 
    <h2 className='text-center font-semibold my-3 text-3xl tracking-wider'>Students List</h2>
    <div className='px-3 my-3 rounded-md'>
      <div className='border flex my-3 p-2 max-w-sm'>
      <Search/>
      <input
      type="text"
      placeholder='search by any field'
      className='outline-none pl-2'
      onChange={(event)=> setsearchTerm(event.target.value)}
      />
      </div>
    <div
  className="ag-theme-quartz" // applying the Data Grid theme
  style={{ height: 500 }} // the Data Grid will fill the size of the parent container
 >
   <AgGridReact
       rowData={students}
       columnDefs={colDefs}
      //  pagination={true}
      //  paginationPageSize={5}
      //  quickFilterText={searchTerm}
   />
   </div>
 </div>
 </div>
 );
};

export default StudentList;
