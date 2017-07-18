import React from 'react';
import ReactDOM from 'react-dom';
import {AppBar,Layout,NavDrawer,Panel} from 'react-toolbox';
import {List,ListItem} from 'react-toolbox/lib/list';
import {Dashboard} from './dashboard';
import Api from './api';



class App extends React.Component{
    constructor(){
        super();
        this.state = {
            active:false,
            dashboards:[],
            currentDashboard:null
        };
    }
    componentWillMount(){
        Api.dashboards.list()
        .then(dashboards=>{
            var currentDashboard = null;
            if (dashboards.length>0){
                currentDashboard = dashboards[0];
            }
            this.setState({dashboards,currentDashboard});
        });
    }
    handleDashboardSelect(currentDashboard){
        this.setState({currentDashboard,active:false});
    }
    render(){
        return <Layout>
                <NavDrawer active={this.state.active} onOverlayClick={()=>this.setState({active:false})}>
                    <List selectable ripple>
                        {this.state.dashboards.map((d,k)=>{
                            return <ListItem key={k} caption={d.title} leftIcon={d.icon} onClick={()=>this.handleDashboardSelect(d)}/>
                        })}
                    </List>

                </NavDrawer>
                <Panel>
                    <Dashboard dashboard={this.state.currentDashboard} onMenuClick={()=>this.setState({active:true})}/>
                </Panel>
            </Layout>
    }
}

ReactDOM.render(<App />,document.getElementById('root'));

