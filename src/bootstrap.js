import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import {createMemoryHistory} from 'history';
import {createMemoryHistory, createBrowserHistory} from 'history'; // lec91

console.log('Hello from Marketing App !!!');
 
/*
const mount = (el) => {
    const history = createMemoryHistory();
    ReactDOM.render(
          <App history={history} />,
        el
    )
}; */


const mount = (el, {onNavigate, defaultHistory }) => {
    const history = defaultHistory || createMemoryHistory();  // defaultHistory will only be there in dev mode and in isolation
    if(onNavigate) {
        history.listen(onNavigate);
    }
    
    ReactDOM.render(
          <App history={history} />,
        el
    )

    return {
        onParentNavigate(location) {
            console.log('container just navigated !!!!', location);
            const nextPathname = location.pathname;
            const {pathname} = history.location;
            if(pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};

    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot) {
        // mount(devRoot);
        mount(devRoot, {defaultHistory: createBrowserHistory(0) });
    }


export {mount};