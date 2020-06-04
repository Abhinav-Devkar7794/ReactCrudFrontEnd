import React from 'react';

import './App.css';
import NavigationBar from './components/NavigationBar'

import Footer from './components/Footer'
import { Container , Row ,  Col} from 'react-bootstrap';
import {BrowserRouter as Router , Switch , Route } from "react-router-dom"
import Welcome from "./components/Welcome"
import Book from "./components/Book"
import BookList from "./components/BookList"

import BookNew from "./components/BookNew"

import ExportExcel from "./components/ExportExcel"

function App() {

  const marginTop = {

      marginTop:"20px"

  };

  return (
    <Router>
      <NavigationBar/>
     
            <Container>

                <Row>
                  <Col lg={12} style={marginTop}>
                    
                  <Switch>


                        <Route path="/" exact component={Welcome}/>
                        <Route path="/list" exact component={BookList}/>
                        <Route path="/edit/:id" exact component={Book}/>
                        <Route path="/add" exact component={Book}/>
                        <Route path="/newadd" exact component={BookNew}/>
                        <Route path="/excelexport" exact component={ExportExcel}/>

                </Switch>
                     
                  </Col>
                
                </Row>

            </Container>

     <Footer/>
    </Router>

  );
}

export default App;

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
