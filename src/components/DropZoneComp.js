import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class DropZoneComp extends Component {
    constructor() {
        super()
        this.state = {
            accepted: [],
            rejected: []
        }
    }

    render() {
        return (
            <section>
                <div className="dropzone">
                    <Dropzone
                        className="drop-box"
                        accept="image/jpeg, image/png"
                        onDrop={(accepted, rejected) => { this.setState({ accepted, rejected }); }}
                    >
                        <h1>Drop Your file</h1>
                        <p>Seul les fichiers .jpep et png sont acceptés</p>
                        <img src="/img/clound.png" alt="Mountain View"/>
                    </Dropzone>
                </div>
                <aside>
                    <h2>Accepted files</h2>
                    <ul>
                        {
                            this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                    <h2>Rejected files</h2>
                    <ul>
                        {
                            this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                        }
                    </ul>
                </aside>
            </section>
        );
    }
}

export default DropZoneComp;
