import React from 'react'
import {AppHeader} from './cmps/AppHeader'
import {AppFooter} from './cmps/AppFooter'
import { MainApp } from './pages/MainApp';

export class RootCmp extends React.Component {

    render() {
        return (
            <div className="app-container">
                <AppHeader />
                <main>
                        <MainApp/>
                </main>
                <AppFooter />
            </div>
        )
    }
}


