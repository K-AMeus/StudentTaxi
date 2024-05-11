import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import styles from './styles/App.module.css';
import FilterTrips from './components/FilterTrips';


import logo from "./resources/friendsDriving.jpg";

const TripList = lazy(() => import('./components/TripList'));
const AddTrip = lazy(() => import('./components/AddTrip'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <div className={styles['main-image-container']}>
                    <img src={logo} alt="Friends Driving" className={styles['main-image']}/>
                </div>
                <Routes>
                    <Route path="/" element={<TripList/>}/>
                    <Route path="/add" element={<AddTrip />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;
