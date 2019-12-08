import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import {Link} from 'react-router-dom';
import Services from '../component/Services';

export default function Home() {
  return (
  <>
  <Hero>
    <Banner title="AgroShare" subtitle="Farming with technology">
    <Link to='/rooms' className="btn-primary">
    Register
    </Link>
    </Banner>
  </Hero>
  <Services/>
 
   </>
  )}
