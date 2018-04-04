import React, {Component} from 'react';
import axios from 'axios';

class GetStuff extends Component {
    componentDidMount(){
        axios.get('/api/get-stuff').then( res => {
            console.log(res);
        })
        axios.post('/api/get-user').then(res => {
            console.log(res);
        })
    }
    render(){
        return(
            <div>
                <h1>Get Stuff</h1>
            </div>
        )
    }
}

export default GetStuff;