import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Services from './components/Services';
import Journeys from './components/Journeys';
import Advisors from './components/Advisors';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Services />
      <Journeys />
      <Advisors />
      <Contact />
      <Footer />
    </main>
  );
}
