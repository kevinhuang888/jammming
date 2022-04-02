import React from 'react';
import './Track.css';

class Track extends React.Component{

    constructor(props){
        super(props);

        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction(){
        return this.props.isRemoval ? <button className="Track-action" onClick={this.removeTrack}>-</button> : 
        <button className="Track-action" onClick={this.addTrack}>+</button>
    }

    addTrack(){
        this.props.onAdd(this.props.track);
    }
    
    removeTrack(){
        this.props.onRemove(this.props.track);
    }

    render(){
        return(
            <div className="Track">
                <div className="Track-information">
                    <div className="img-col">
                        <img src={this.props.track.albumImgs[this.props.track.albumImgs.length-1].url} />
                    </div>
                    <div className="Track-word-info">
                        <h3>{this.props.track.name}</h3>
                        <p>{this.props.track.artist} | {this.props.track.album}</p>
                    </div>
                </div>
                {this.renderAction(this.props.track)}
            </div>
        )
    }
}

export default Track;