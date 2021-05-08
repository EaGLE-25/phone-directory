import React,{Component} from 'react';
import Header from './Header.js';
import "./AddSubscriber.css";


class AddSubscriber extends Component{
    render(){
        return(
            <div>
            <Header headerName="Add Subscriber"></Header>
            <div className="wrapper">
                <button className="btn">BACK</button>
                <form className="add-subscriber-form"> 
                    <div className="control-container">
                        <label htmlFor="name" className="heading">Name</label>
                        <input className="input-control" name="name"></input>
                    </div>
                    <div className="control-container">
                        <label htmlFor="phone" className="heading">Phone</label>
                        <input className="input-control" name="phone"></input>
                    </div>
                    <div className="subscriber-to-be-added">
                        <label>Subscriber to be added</label>
                        <div className="preview">
                            <div className="name-preview">
                                <label className="heading">Name: </label>
                            </div>  
                            <div className="phone-preview">
                                <label className="heading">Phone: </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default AddSubscriber;