import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useState } from 'react';
import Test from '../Test'

const Pcc = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle file submission or further processing here
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
      // You can perform additional operations like uploading the file
    }
  };
  return <>
  <div>
      <h2 id='h2_text'>PRINCIPLES OF CLOUD COMPUTING</h2>
    <div className='syllabus'>
        <h2 style={{ margin: '2rem' }}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction to cloud computing</b>: Cloud Computing, in a Nutshell, roots of Cloud Computing,
        Layers and Types of Clouds, Desired Features of Cloud, Cloud Infrastructure Management,
        Infrastructure as a Service Providers, Platform as a Service Providers.<br/>
         <b> Migration into a Cloud</b>: Introduction, Broad Approaches to Migrating into the Cloud, The
        Seven-Step Model of Migration into a Cloud.<br/>
          <b>Enriching the ‘Integration as a Service’ Paradigm for the Cloud Era</b>: An Introduction,
        The Onset of Knowledge Era, The Evolution of SaaS, The challenges of SaaS paradigm, New
        integration scenarios, The integration methodologies, Saas integration products and platforms,
        SaaS Integration Services, Business to Business Integration(B2Bi) Services, A Framework of
        Sensor-Cloud Integration.<br/>
      </p>
      <h4>UNIT-II</h4>
        <p><b>The Enterprise Cloud Computing Paradigm</b>: Relevant deployment models for enterprise
          cloud computing, Issues for Enterprise Applications on the Cloud, Transition Challenges, Business
          Drivers toward a Marketplace for Enterprise Cloud Computing, The Cloud Supply Chain.<br/>
         <b> Virtual Machines Provisioning and Migration Services</b>: Virtualization Technology overview,
          Virtual Machines Provisioning and Manageability, Virtual Machine Migration Services, VM
          Provisioning and Migration in Action, Provisioning in the Cloud Context.<br/>
          <b>Enhancing Cloud Computing Environments Using a Cluster as a Service</b>: Introduction,
          Related Work, RVWS Design, Cluster as a Service: The Logical Design, Proof of Concept.
      </p>
      <h4>UNIT-III</h4>
        <p><b>Secure Distributed Data Storage in Cloud Computing</b>: Introduction, Cloud Storage: from
LANs TO WANs, Technologies for Data Security in Cloud Computing Open Questions and
Challenges.<br/>
          <b>Workflow Engine for Clouds</b>: Introduction, Workflow Management Systems and Clouds,
Architecture of Workflow Management Systems, Utilizing Clouds for Workflow Execution.</p>

        <h4>UNIT-IV</h4>
        <p><b>SLA Management in Cloud Computing</b>: Traditional Approaches to SLO Management, Types
          of SLA, Life Cycle of SLA, SLA Management in Cloud, Automated Policy-based Management.<br/>
       <b> Data Security in the Cloud</b>: An Introduction to the Idea of Data Security, The Current State of
          Data Security in the Cloud, Homo Sapiens and Digital Information, Cloud Computing and Data
          Security Risk, Cloud Computing and Identity, The Cloud, Digital Identity, and Data Security,
          Content Level Security—Pros and Cons.</p>
    </div>
      <h2 style={{ margin: '2rem' }}>Topics</h2>
      <Test />

      
    </div>
    <Link to='/oe'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default Pcc
