import Layout from "./Layout.jsx";

import Home from "./Home";
import Quiz from "./Quiz";
import Offer from "./Offer";
import Playbook from "./Playbook";
import ThankYou from "./ThankYou";

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    Quiz: Quiz,
    Offer: Offer,
    Playbook: Playbook,
    ThankYou: ThankYou,
    
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/Offer" element={<Offer />} />
                <Route path="/Playbook" element={<Playbook />} />
                <Route path="/ThankYou" element={<ThankYou />} />
                <Route path="/thank-you" element={<ThankYou />} />
                
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}