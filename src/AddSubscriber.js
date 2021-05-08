import React,{Component} from 'react';
import Header from './Header.js';
import "./AddSubscriber.css";


class AddSubscriber extends Component{
    constructor(){
        super();
        this.state = {
            name:"",
            phone:""
        }
    };

    changeHandler = (e)=>{
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    render(){
        return(
            <div>
            <Header headerName="Add Subscriber"></Header>
            <div className="wrapper">
                <button className="btn">BACK</button>
                <form className="add-subscriber-form"> 
                    <div className="control-container">
                        <label htmlFor="name" className="heading">Name</label>
                        <input className="input-control" name="name" onChange={this.changeHandler}></input>
                    </div>
                    <div className="control-container">
                        <label htmlFor="phone" className="heading">Phone</label>
                        <input className="input-control" name="phone" onChange={this.changeHandler}></input>
                    </div>
                    <div className="subscriber-to-be-added">
                        <label>Subscriber to be added</label>
                        <div className="preview">
                            <div className="name-preview">
                                <label className="heading">Name: {this.state.name}</label>
                            </div>  
                            <div className="phone-preview">
                                <label className="heading">Phone: {this.state.phone}</label>
                            </div>
                        </div>
                        <button className="btn add-btn">ADD</button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

export default AddSubscriber;