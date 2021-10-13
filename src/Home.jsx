import React from "react";
import {Link } from "react-router-dom";
import logo from "./logo.png";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

        return (
        <div>
           <div className="title">
           <img src={logo} alt="logo" className="logo"/>
           <div className="underline"></div>
           <br />
           <div>
            <Link to="/waiter"><Button variant="dark" size="lg" active> Mesero
             </Button>
            </Link>
            {'     '}
             <Button variant="dark" size="lg" active>
                Cocinero
              </Button>
          </div>
         </div>
         </div>
         
        );

    }

    export default Home;