import React from 'react';
import './Drumpad.scss';

class Drumpad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyObject : this.props.soundObject
        };
        // Register the methods to this
        this.playSound = this.playSound.bind(this);
        this.handleDrumpadClick = this.handleDrumpadClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount = () => {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount = () => {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = (event) => {
        if(event.keyCode === this.state.keyObject.keyCode) {
            const drumpad = document.getElementById(this.state.keyObject.id);
            console.log(drumpad);
            drumpad.dispatchEvent(new MouseEvent('mousedown', {
                bubbles: true,
                cancelable: true,
                view: window
              }));
            this.playSound(this.state.keyObject.keyTrigger);
        } 
    }

    handleDrumpadClick = (event) => {
        this.playSound(this.state.keyObject.keyTrigger);
    }

    playSound = (keyTrigger) => {
        const soundElement = document.getElementById(keyTrigger);
        // set the current time and play the sound element
        soundElement.currentTime = 0;
        soundElement.play();
        // display the current track being played
        this.props.pushCurrentTrack(this.state.keyObject.id);
    }

    render() {
        return (
            <div className="drum-pad" id={this.state.keyObject.id} onClick={this.handleDrumpadClick}>
                <audio id={this.state.keyObject.keyTrigger} className="clip" src={this.state.keyObject.url}></audio>
                {this.state.keyObject.keyTrigger}
            </div>
        )
    }
}

export default Drumpad;