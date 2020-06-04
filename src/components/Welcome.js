import React , {Component} from "react"
import {Jumbotron} from "react-bootstrap"
export default class Welcome extends Component{

    render(){
        return(<Jumbotron className="bg-dark text-white">
        <h1>Welcome To Book Shop</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        
    </Jumbotron>)
    }

}

/*


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

    bookChange= (event) =>{
        this.setState({

         
            [event.target.name]:event.target.value
            
        });
    }


*/