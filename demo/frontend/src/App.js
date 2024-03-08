import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const PostitusList = lazy(() => import('./PostitusList'));
const AddPostitus = lazy(() => import('./AddPostitus'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<PostitusList />} />
                    <Route path="/add" element={<AddPostitus />} />
                </Routes>
            </Suspense>
        </Router>
    );
};




export default App;
