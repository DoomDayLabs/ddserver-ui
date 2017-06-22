import React from 'react';

export class DefaultWidget extends React.Component{
    render(){
        return (
            <div className="content">
                <div className="sensors-main">
                    <div className="sensor">
                        <h4>Sensor 1</h4>
                        <div className="progress">                                        
                            <div className="bar" style={{width:'33%'}}></div>
                        </div>
                    </div>
                </div>
                <div className="sensors-extend">
                </div>
                <div className="actions">
                    <button>HEAT</button>
                    <button>BOIL</button>
                    <button>STANDBY</button>
                </div>
            </div>        
        )
    }
}