import React from 'react';
import axios from 'axios';
import { Button } from 'antd'
import * as config from '../../config/config.json'

export default class Index extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        // axios.post(`https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key=${config.TRELLO_KEY}&token=${config.TRELLO_TOKEN}`)
    }
    render() {
        return (
            <div>
            <h1>Amerisleep</h1>
            <Button>Click Me</Button></div>
        );
    }
}