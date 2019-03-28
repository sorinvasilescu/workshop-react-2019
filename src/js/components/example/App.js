/**
 * * Build systems
 * * JSX
 * * ways to build a component
 * * iterations and variables
 * * data flow
 * * propTypes
 */

import React, { Fragment, useEffect, useState } from 'react';
import HelloWorld from './HelloWorld';
import AppMenu from './AppMenu';
import history from './browserHistory';

const PAGE_HOME = "/";
const PAGE_SECOND = "/menu-2";
const PAGE_THIRD = "/menu-3";

const menuConfig = [
    {
        text: 'menu 1',
        url: PAGE_HOME,
        title: "Homepage"
    },
    {
        text: 'menu 2',
        url: PAGE_SECOND,
        title: "second page"
    },
    {
        text: 'menu 3',
        url: PAGE_THIRD,
        title: "third page"
    },
];

const PAGES = {
    [PAGE_HOME]: HelloWorld,
    [PAGE_SECOND]: ()=>{return <div>second page</div>},
    [PAGE_THIRD]: ()=>{return <div>third page</div>}
};

const App = (props) => {
    const [pageURL, setPageURL] = useState(location.pathname);
    let Component = PAGES[pageURL];


    useEffect(()=>{
        history.listen((location, action) => {
            setPageURL(location.state.url);
        })
    }, [1]);

    return (
        <Fragment>
            <section>
                <header>
                </header>
            </section>
            <section>
                <main>
                    <HelloWorld/>
                </main>
            </section>
            <section>
                <footer></footer>
            </section>
        </Fragment>
    );
};

export default App;