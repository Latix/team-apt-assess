import React from 'react';
import Benefits from '../Components/Benefits';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Personal from '../Components/Personal';
import Processes from '../Components/Processes';
import Transfers from '../Components/Transfers';

export default function Home() {
    

    return (
        <>
        <Header />
        <main className="main">
            <Transfers />
            <Processes />
            <Benefits />
            <Personal />
            <Footer />
        </main>
        </>
    )
}
