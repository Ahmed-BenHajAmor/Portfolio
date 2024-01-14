import React from 'react';
import './Qualification.css';
import { SectionHeader } from '../SectionHeader';
import { QualificationMainContent } from './QualificationMainContent';

function Qualification() {
  return (
    <section className="Qualification">
        <SectionHeader title={'Qualification'} subTitle={'My personal journey'}/>
        <QualificationMainContent />
    </section>
  )
}

export default Qualification;