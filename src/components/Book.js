import React , {Component} from "react"
import {Card , Form , Button ,Col } from "react-bootstrap"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSave, faPlusSquare , faUndo , faList ,faEdit} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import MyToast from "./MyToast"
import urlConstant from "./BookUrl"
export default class Book extends Component{

    constructor(props){
        super(props);
        console.log("constructor");
        this.state=this.initialState ;
        this.state.show=false;
     
    };

    initialState ={
            id:'',
            title:'',
            author:'',
            coverPhotoURL:'',
            isbnNumber:'',
            price:'',
            language:''
    };
    resetBook = () =>{

        this.setState(this.initialState )
    };

    componentDidMount(){
        const bookId = +this.props.match.params.id;
        if(bookId){

                this.findBookById(bookId);
        }
    }

    findBookById = (bookId) =>{

            
        axios.get(urlConstant.BookUrls.GetBookById+bookId)
        .then(response => {
                if(response.data != null){
                    this.setState({

                            id:response.data.id,
                            title:response.data.title,
                            author:response.data.author,
                            coverPhotoURL:response.data.coverPhotoURL,
                            isbnNumber:response.data.isbnNumber,
                            price:response.data.price,
                            language:response.data.language

                    });
                }

        }).catch((error) =>{
            console.error("Error - " + error)
        })

    }
    
    updateBook = event =>{
        event.preventDefault();

        const book = {
                id:this.state.id,
                title : this.state.title,
                author: this.state.author,
                coverPhotoURL : this.state.coverPhotoURL,
                isbnNumber : this.state.isbnNumber,
                price: this.state.price,
                language: this.state.language
        };

        console.log("Book Value is "+book);

        axios.put(urlConstant.BookUrls.CreateBook,book)
        .then(response => {

            
            if(  response.data != null){
               
                this.setState({"show":true ,"method":"put"});
                setTimeout(() => this.setState({"show":false}),3000);
                setTimeout(() => this.bookList(),3000);
                
            }else{
                this.setState({"show":false});
            }
        });

        this.setState(this.initialState );

    }


    submitBook = event => {
      
        event.preventDefault();

        const book = {

                title : this.state.title,
                author: this.state.author,
                coverPhotoURL : this.state.coverPhotoURL,
                isbnNumber : this.state.isbnNumber,
                price: this.state.price,
                language: this.state.language
        };

        console.log("Book Value is "+book);
       
        axios.post(urlConstant.BookUrls.CreateBook,book)
        .then(response => {

            
            if(  response.data != null){
               
                this.setState({"show":true,"method":"post"});
                setTimeout(() => this.setState({"show":false}),3000);
                
            }else{
                this.setState({"show":false});
            }
        });

        this.setState(this.initialState );
    };

    bookList = () =>  {
        return this.props.history.push("/list");
    };

    bookChange = event =>{
        console.log("bookChange");
        this.setState({
            [event.target.name]:event.target.value
        });

        console.log(this.state)
    };

    render(){
        const {title,author,coverPhotoURL,isbnNumber,price,language}=this.state;
        return(
        
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <MyToast show={this.state.show}  message={this.state.method === "put" ? "Book Update Successfully.": "Book Saved Successfully."} type={"success"} />
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />  {this.state.id ? "Update Book":"Add New Book"} </Card.Header>
                    
                        <Form  onReset={this.resetBook}  onSubmit={this.state.id ? this.updateBook : this.submitBook } id="bookFormId">
                        <Card.Body>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control required autoComplete="off"
                            
                            type="test"  
                            name="title"
                            value={title}
                            onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book Title" />
                        
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridAuthor">
                            <Form.Label>Author</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="test"  name="author"
                            value={author}
                             onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book Author" />
                        
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                            <Form.Label>Cover Photo URL</Form.Label>
                            <Form.Control  required autoComplete="off"
                            type="test" name="coverPhotoURL"
                            value={coverPhotoURL}
                            onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book Cover Photo URL" />
                        
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGrISBNNumber">
                            <Form.Label>ISBN Number</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="test"  name="isbnNumber"
                            value={isbnNumber}
                          onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book ISBN Number" />
                        
                        </Form.Group>
                        </Form.Row>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control required  autoComplete="off"
                            type="test"  name="price"
                            value={price}
                           onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book Price" />
                        
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridLanguage">
                            <Form.Label>Language</Form.Label>
                            <Form.Control required autoComplete="off"
                            type="test"  name="language"
                            value={language}
                          onChange={this.bookChange}
                            className={"bg-dark text-white"}
                            placeholder="Enter Book Language" />
                        
                        </Form.Group>
                        </Form.Row>
                    </Card.Body>
                    <Card.Footer style={{"textAlign":"right"}}>
                        <Button variant="success" size="sm" type="submit">
                        <FontAwesomeIcon icon={faSave} />  {this.state.id ? "Update":"Save"}
                        </Button>{' '}
                        <Button variant="info" size="sm" type="reset">
                        <FontAwesomeIcon icon={faUndo} />  Reset
                        </Button>
                        {' '}
                        <Button variant="info" size="sm" type="button" onClick={this.bookList.bind()}>
                        <FontAwesomeIcon icon={faList} />  Book List
                        </Button>
             </Card.Footer>
            </Form>
            </Card>  
            </div>


       
            );

    }
}
/* 

constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            coverPhotoURL:'',
            isbnNumber:'',
            price:'',
            language:''
        }
        this.bookChange = this.bookChange.bind(this);
        this.submitBook= this.submitBook.bind(this);
    }
    submitBook(event){

        alert("Name : "+[event.target.name]);
        alert("Value is : "+event.target.value);
        alert("Title "+this.state.title+" Author : "+this.state.author+" Price : "+this.state.price+" Language : "+this.state.language+" Url : "+this.state.coverPhotoURL+" isbn number : "+this.state.isbnNumber);
        event.preventDefault();
    }

    bookChange(event){
        this.setState({

         
            [event.target.name]:event.target.value
            
        });
    }

*/
/*

<Router>
      <NavigationBar/>
     
            <Container style={marginTop}>

               
                 

                        <Route path="/" exact component={Welcome}/>
                        <Route path="/list" exact component={BookList}/>
                        <Route path="/add" exact component={Book}/>

                 

            </Container>

      <Footer/>
    </Router>
*/