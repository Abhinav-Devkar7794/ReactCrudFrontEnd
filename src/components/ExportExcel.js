import React, { Component } from 'react';
import axios from 'axios'
import ReactHTMLTableToExcel  from 'react-html-table-to-excel'
import urlConstant from './BookUrl'
import { CSVLink } from "react-csv";
class ExportExcel  extends Component {
    

        constructor(props){

            super(props);

            this.state={

                BookList : []
            }

        }

       
        componentDidMount(){

            axios.get(urlConstant.BookUrls.BookList).then(response =>
              {
               
                this.setState({BookList : response.data })
              }
                
            )
        }

    render() { 

        const rows = this.state.BookList.map(book => 
            
            <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price}</td>
                <td>{book.language}</td>                                         
            </tr>
            
        )
       const  headers = [
            { label: "First Name", key: "firstname" },
            { label: "Last Name", key: "lastname" },
            { label: "Email", key: "email" }
          ];
           
          const data = [
            { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
            { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
            { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" }
          ];
        

        return (
            <div>
                <table id="emp" class="table">
                <thead>
                    <tr>
                        <td>No</td>
                        <td>Title</td>
                        <td>Author</td>
                        <td>Price</td>
                        <td>Language</td>
                    </tr>
                </thead>
                <tbody>
                        {rows}
                </tbody>

              </table>

            <div>
                <ReactHTMLTableToExcel  className="btn btn-info"  table="emp"  filename="ReportExcel"  
                 sheet="Book List" buttonText="Export excel"  />

            </div>
            <div>
            <CSVLink data={data} headers={headers}>
             Download me
            </CSVLink>
            </div>
            </div>
            
            
            
            );
    }
}
 
export default ExportExcel ;