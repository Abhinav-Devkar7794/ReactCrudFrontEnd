import React , {Component} from "react"
import {Card,Table, ButtonGroup ,Button} from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons'
import MyToast from "./MyToast"
import axios from "axios"
import {Link} from "react-router-dom"
import urlConstant from "./BookUrl"

export default class BookList extends Component{

    constructor(props){

        super(props);
        console.log("contructor");
        this.state={
            books : []  
        };
        console.log("contructor"+this.state.books.length);
    }
  

    componentDidMount(){
        console.log("componentDidMount");
       this.findAllBooks();
        
    }

    findAllBooks(){
        console.log("findAllBooks");  

      
        axios.get(urlConstant.BookUrls.BookList)
        .then(response => response.data)
        .then((data) => {

            console.log("data" + data);
            this.setState({books:data});
        });
    }

    deleteBook = (bookId) => {

        axios.delete(urlConstant.BookUrls.DeleteBook+bookId)
        .then(response => {

            if(response.data != null){
                this.setState({"show":true});
                setTimeout(() => this.setState({"show":false}),3000);
               
                this.setState({
                    books : this.state.books.filter(book => book.id !== bookId)
                })
            }else{
                this.setState({"show":false});
            }
        });
    
    };
 


        
        render(){
            console.log("render");
            
            return(
                <div>
                     <div style={{"display":this.state.show ? "block" : "none"}}>
                         <MyToast show= {this.state.show}  message={"Book Deleted Successfully."} type= {"danger"}/>
                    </div>
                    <Card className={"border border-dark bg-dark text-white"}>
                        <Card.Header><FontAwesomeIcon icon={faList} />   Book List</Card.Header>
                        <Card.Body>
                        <Table striped bordered hover variant="dark">
                                <thead>
                                    <tr>
                                    <th>Title</th>
                                    <th>Author</th>
                                    <th>ISBN Number</th>
                                    <th>Price</th>
                                    <th>Language</th>
                                    <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {this.state.books.length === 0?
                                    <tr align="center">
                                    <td colSpan="6">No Books Available.</td>
                                    
                                    </tr> :
                                    this.state.books.map((book) => (
    
                                        <tr key={book.id}>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.isbnNumber}</td>
                                            <td>{book.price}</td>
                                            <td>{book.language}</td>
                                            <td>
                                                <ButtonGroup>
                                                    <Link to={"edit/"+book.id} className="btn btn-sm btn-outline-primary">
                                                    <FontAwesomeIcon icon={faEdit} />
                                                    </Link>{ '  '}
                                                    
                                                    <Button size="sm" variant="outline-danger" onClick={this.deleteBook.bind(this,book.id)}>
                                                    <FontAwesomeIcon icon={faTrash} /> 
                                                    </Button>
                                                </ButtonGroup>
    
                                            </td>
                                        </tr>
                                    ))
    
                                }
                                </tbody>
                        </Table>
                        </Card.Body>
                    </Card>
    

                </div>
    
                    
            );
    
        }
    }



/*

render(){
        console.log("render");
        let display = '';
        if(this.state.books.length !== 0){
            display =  this.state.books.map((book) => (

                <tr key={book.id}>
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>{book.isbnNumber}</td>
                    <td>{book.price}</td>
                    <td>{book.language}</td>
                    <td>
                        <ButtonGroup>
                            <Button size="sm" variant="outline-primary">
                            <FontAwesomeIcon icon={faEdit} />
                            </Button>
                            <Button size="sm" variant="outline-danger">
                            <FontAwesomeIcon icon={faTrash} /> 
                            </Button>
                        </ButtonGroup>

                    </td>
                </tr>
            ));
       
        }

        if(this.state.books.length === 0){
            display = <tr align="center">
            <td colSpan="6">No Books Available.</td>
            
            </tr> ;
        }


        
        return(

                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList} />   Book List</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {display}
                            </tbody>
                    </Table>
                    </Card.Body>
                </Card>

        );

    }


 render(){
        console.log("render");
        
        return(

                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={faList} />   Book List</Card.Header>
                    <Card.Body>
                    <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                <th>Title</th>
                                <th>Author</th>
                                <th>ISBN Number</th>
                                <th>Price</th>
                                <th>Language</th>
                                <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.books.length === 0?
                                <tr align="center">
                                <td colSpan="6">No Books Available.</td>
                                
                                </tr> :
                                this.state.books.map((book) => (

                                    <tr key={book.id}>
                                        <td>{book.title}</td>
                                        <td>{book.author}</td>
                                        <td>{book.isbnNumber}</td>
                                        <td>{book.price}</td>
                                        <td>{book.language}</td>
                                        <td>
                                            <ButtonGroup>
                                                <Button size="sm" variant="outline-primary">
                                                <FontAwesomeIcon icon={faEdit} />
                                                </Button>
                                                <Button size="sm" variant="outline-danger">
                                                <FontAwesomeIcon icon={faTrash} /> 
                                                </Button>
                                            </ButtonGroup>

                                        </td>
                                    </tr>
                                ))

                            }
                            </tbody>
                    </Table>
                    </Card.Body>
                </Card>

        );

   


   state={
        title:'',
        author:'',
        coverPhotoURL:'',
        isbnNumber:'',
        price:'',
        language:''
    }
    
    submitBook = (event) => {

        alert("Name : "+[event.target.name]);
        alert("Value is : "+event.target.value);
        alert("Title "+this.state.title+" Author : "+this.state.author+" Price : "+this.state.price+" Language : "+this.state.language+" Url : "+this.state.coverPhotoURL+" isbn number : "+this.state.isbnNumber);
        event.preventDefault();
    }

    bookChange= (event) =>  {
        this.setState({

         
            [event.target.name]:event.target.value
            
        });
    }

*/