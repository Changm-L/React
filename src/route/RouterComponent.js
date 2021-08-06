import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListComponent from '../component/list/ListComponent';

const AppRouter = ()=>{
    const style ={
        marginTop:'20px'
    }
    return (
        <div>
            <BrowserRouter>
                <div style={style}>
                    <Switch>
                        <Route exact path="/" component={ListComponent}/>
                        <Route path="/list" component={ListComponent}/>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default AppRouter;

