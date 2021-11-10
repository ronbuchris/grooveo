import React from 'react'
import icon from '../assets/imgs/grooveo.jpg'
export function AppHeader() {
    return (
        <header className="app-header">
            <div className="main-app">
                <div className="flex align-center">
                    <img className="grooveo-icon" src={icon} alt=''/>
                    <h1>Grooveo</h1>
                </div>
            </div>
        </header>
    )
}