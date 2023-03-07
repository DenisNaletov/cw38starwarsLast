import React, {Component} from 'react';
import {Api} from "../data/Api";

class FarGalaxy extends Component {
        constructor(props){
                super(props);
                this.state = {
                        filmData: undefined,
                        loadError:''
                }
        }

        componentDidMount = async () => {
                this.getRandomFilmInfo()
        }

        getRandomFilmInfo = async ()=>{
                try{
                        const res = await Api.getResponse();
                        this.setState({...this.state, filmData: res});
                } catch (e) {
                        this.setState({...this.state, filmData: undefined, loadError: 'Server error'});
                }
        }

        render() {
                return (
                    <p></p>
                );
        }
}

export default FarGalaxy;

