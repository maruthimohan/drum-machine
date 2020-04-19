import React from 'react';
import Drumpad from './Drumpad';
import './DrumMachine.scss';

class DrumMachine extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            soundList: this.props.drumSoundData,
            currentSound: 'none'
        };
        //bind the custom actions
        this.showCurrentTrack = this.showCurrentTrack.bind(this);
    }

    showCurrentTrack = (currentTrack) => {
        this.setState({
            currentSound: currentTrack
        });
    }

    render() {
        // Formulate the drumpad elements
        const drumpPadElements = this.state.soundList.map((keyObject, index) => {
            return <Drumpad key={index} soundObject={keyObject} pushCurrentTrack={this.showCurrentTrack} />
        })
        return (
            <div id="drum-machine" className="drum-machine">
                <div id="display" className="display">
                    <span className="now-playing">Now playing</span>
                    <span className="current-sound">{this.state.currentSound}</span>
                </div>
                <div className="drum-pad-group">
                    {drumpPadElements}
                </div>
            </div>
        );
    }
}

export default DrumMachine;