import './App.css';
import { Routes, Route } from 'react-router-dom';

import { SiteMap } from './pages/sitemap/SiteMap.jsx';

import { Dashboard } from './pages/dashboard/Dashboard.jsx';
import { DefaultLayout } from './layouts/DefaultLayout.jsx';

function App() {
    return (
        <div>
            <Routes>
                <Route element={<DefaultLayout />}>
                    {/* Default/Home page */}
                    <Route path="/" element={<SiteMap />} />

                    {/* Named pages */}
                    <Route path="/dashboard" element={<Dashboard />} />

                    {/* Optional: Add a 404/Not Found page */}
                    <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                </Route>
            </Routes>
        </div>
    );
}
export default App;
