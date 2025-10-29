import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import DepartmentDetail from './pages/DepartmentDetail';

// Department Pages
import IVF from './pages/IVF';
import Paediatrics from './pages/Paediatrics';
import OBG from './pages/OBG';
import Surgery from './pages/Surgery';
import Ortho from './pages/Ortho';
import Urology from './pages/Urology';
import Laparoscopy from './pages/Laparoscopy';
import Neonatology from './pages/Neonatology';
import CriticalCare from './pages/CriticalCare';
import ANC from './pages/ANC';
import PainClinic from './pages/PainClinic';
import Infertility from './pages/Infertility';
import Endoscopy from './pages/Endoscopy';
import Hysteroscopy from './pages/Hysteroscopy';

// Other Pages
import Gallery from './pages/Gallery';
import MembershipHealthCart from './pages/MembershipHealthCart';
import BookLabTest from './pages/BookLabTest';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Contact />} />
            
            {/* Specific Department Routes */}
            <Route path="/department/ivf" element={<IVF />} />
            <Route path="/department/pediatrics" element={<Paediatrics />} />
            <Route path="/department/obg" element={<OBG />} />
            <Route path="/department/surgery" element={<Surgery />} />
            <Route path="/department/ortho" element={<Ortho />} />
            <Route path="/department/urology" element={<Urology />} />
            <Route path="/department/laparoscopy" element={<Laparoscopy />} />
            <Route path="/department/neonatology" element={<Neonatology />} />
            <Route path="/department/critical-care" element={<CriticalCare />} />
            <Route path="/department/anc" element={<ANC />} />
            <Route path="/department/pain-clinic" element={<PainClinic />} />
            <Route path="/department/infertility" element={<Infertility />} />
            <Route path="/department/endoscopy" element={<Endoscopy />} />
            <Route path="/department/hysteroscopy" element={<Hysteroscopy />} />
            
            {/* Dynamic department route handles others like /department/medicine */}
            <Route path="/department/:id" element={<DepartmentDetail />} />

            {/* Other Pages */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/health-packages" element={<MembershipHealthCart />} />
            <Route path="/book-lab-test" element={<BookLabTest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;