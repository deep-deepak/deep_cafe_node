import React from 'react';
import Desert from '../landingpages/Desert';
import Lunch from '../landingpages/Lunch';
import BreakFast from '../landingpages/BreakFast';
import Dinner from '../landingpages/Dinner';
import { Link } from 'react-router-dom';
import BookTable from '../components/BookTable';

export default function Home() {
  return (
    <div>
      <section>
        <div className="image-container"></div>
        <div className="text-container">
          <h1 className="font-effect-fire">Deep Cafe</h1>
          <p className="font-effect-emboss">food is always a good idea</p>
            <BookTable/>
        </div>
      </section>
      <Desert />
      <BreakFast />
      <Lunch />
      <Dinner />
    </div>
  )
}
