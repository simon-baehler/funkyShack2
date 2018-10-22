import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import axios from 'axios';

class DropZoneComp extends Component {
    constructor() {
        super()
        this.state = {
            accepted: [],
            rejected: []
        }

        this.onDrop = this.onDrop.bind(this)
    }


    onDrop(accepted, rejected) {

        let acceptedFiles = this.state.accepted;
        acceptedFiles = acceptedFiles.concat(accepted);


        this.setState(prevState => ({
            accepted: acceptedFiles,
        }))
    }


    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        className="drop-box"
                        accept="image/jpeg, image/png"
                        onDrop={this.onDrop}
                    >
                        <h1>Drop Your file</h1>
                        <p>Seul les fichiers .jpep et png sont acceptés</p>
                        <img src="/img/clound.png" alt="Mountain View"/>
                    </Dropzone>
                </div>
                <aside>
                    <div className="drop-box-wrapper">
                        <div className="drop-box">
                            <h2>Accepted files</h2>
                            <ul className="image-ul">
                                {
                                    this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </ul>
                        </div>
                        <div className="drop-box">
                            <h2>Rejected files</h2>
                            <ul>
                                {
                                    this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </aside>
            </section>
        );
    }
}

export default DropZoneComp;
