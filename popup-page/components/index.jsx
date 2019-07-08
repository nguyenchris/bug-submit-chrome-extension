import React from 'react';
import axios from 'axios';

export default class Index extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        axios.get('https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key={YOUR-API-KEY}&token={AN-OAUTH-TOKEN}')
    }
    render() {
        return (
            <div></div>
        );
    }
}
