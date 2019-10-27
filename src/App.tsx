import React from 'react';
import './App.css';

import Header from "./Header";
import ChartContainer from "./ChartContainer";

const App: React.FC = () => {
    return (
        <div className="container">
            <Header/>
            <ChartContainer/>
        </div>
    );
};

export default App;
