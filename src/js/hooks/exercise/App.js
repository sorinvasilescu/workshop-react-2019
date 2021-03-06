/**
 * Components exercise
 *
 * Convert all class components in function components
 * using hooks where needed
 *
 * Bonus: Alter the document title with title from the menu config
 * */

import React, { Fragment, Component } from 'react';
import HelloWorld from './HelloWorld';
import AppMenu from './AppMenu';
import history from './browserHistory';

const PAGE_HOME = '/';
const PAGE_SECOND = '/menu-2';
const PAGE_THIRD = '/menu-3';

const menuConfig = [
    {
        text: 'menu 1',
        url: PAGE_HOME,
        title: 'Homepage',
    },
    {
        text: 'menu 2',
        url: PAGE_SECOND,
        title: 'second page',
    },
    {
        text: 'menu 3',
        url: PAGE_THIRD,
        title: 'third page',
    },
];

const PAGES = {
    [PAGE_HOME]: HelloWorld,
    [PAGE_SECOND]: () => {return <div>second page</div>;},
    [PAGE_THIRD]: () => {return <div>third page</div>;},
};

class App extends Component {
    state = {
        pageURL: location.pathname,
    };

    componentDidMount () {
        history.listen((location, action) => {
            this.setState({pageURL: location.state.url});
        });
        this.setDocumentTitle();
    }

    componentDidUpdate () {
        this.setDocumentTitle();
    }

    setDocumentTitle () {
        document.title = menuConfig.reduce((title, el) => {
            if (el.url === this.state.pageURL) {
                return el.title;
            }
            return title;
        }, '');
    }

    render () {
        const Component = PAGES[this.state.pageURL];
        return (
            <Fragment>
                <section>
                    <header>
                        <AppMenu config={menuConfig}/>
                    </header>
                </section>
                <section>
                    <main>
                        <Component/>
                    </main>
                </section>
                <section>
                    <footer></footer>
                </section>
            </Fragment>
        );
    }
}

export default App;