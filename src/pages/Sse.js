import React from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import { useState } from 'react';
import Test from '../Test'

const Sse = () => {
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
      <h2 id='h2_text'>SECURE SOFTWARE ENGINEERING</h2>
      <div className='syllabus'>
        <h2 style={{ margin: '2rem' }}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction & Motivation</b>: Hacker vs. Cracker, Historical Background, Mode of Ethical
          Hacking, Hacker Motive, Gathering Information, Secure Software, Compliance Requirements,
          C-Level Language, Assets, Threats and Risks, Security Requirements, Confidentiality,
          Integrity, Availability<br/>  
          <b>Secure Software Development Methodologies</b>: Secure Software Development Lifecycle
          (SSDLC), Guidelines for Secure Software, SD-3 Principles, Security Practices, Secure coding
          standards, OWASP, ISO15408, Common Criteria (CC), build-insecurity Requirements
          Engineering: Availability, Authenticity, Confidentiality, Efficiency, Integrity, Maintainability,
          Portability, Reliability, 
        </p>
        <h4>UNIT-II</h4>
        <p><b>Requirements Engineering, Trustworthiness</b>, Threat Analysis and Risk Management
          Secure Architectural Design: Threat Modelling, Asset, Threat, Attack, Dataflow Diagram
          (DFD), Threat Tree (Attack Tree), STRIDE, DREAD.<br/>
          <b>Secure Architectural Design</b>: Threat Modelling, Asset, Threat, Attack, Dataflow Diagram
          (DFD), Threat Tree (Attack Tree), STRIDE, DREAD. Security Architecture, Software Attack
          Surface, Secure, Mandatory Access Control (MAC), Discretionary Access Control (DAC), Rolebased Access Control (RBAC), Access Matrix

        </p>
        <h4>UNIT-III</h4>
        <p><b>Secure Coding and Security Testing</b>: Introduction to Vulnerabilities, Vulnerability
          Patterns, Secure Coding Practices, Code Checking, Tools, Cross Site Scripting, Injection
          Flaws, Cross Site Request Forgery, Denial of Service, Test Cases, Security Test Plan, White
          Box Test, Black Box Test, Penetration Testing, Code Review, Test Report<br/>
          <b>Secure Deployment</b>: Secure Default Configuration, Product Life Cycle, Automated
          Deployment Process, Secure Target Environment, Secure Delivery of Code, Trusted Origin,
Code Signing, Least Privilege Permissions, ITIL Release and Deployment Management .</p>
        <h4>UNIT-IV</h4>
        <p><b>Security Response</b>: Security Response, Security Bulletins, Vulnerabilities, Security Patches,
          Disclosure, Responsible Disclosure, Patch Tuesday, Security Response Policy, Security
          Response Process, Common Vulnerability Scoring System, CVSS<br/>
          <b>Code & Resource Protection</b>: Introduction to Back Door, Time Bomb, Four-Eyes
          Principle, Confidentiality Classification, Background Screening, Security Clearance, Offline
and Online Licensing, Mechanisms, Code Obfuscation  </p>

      </div>
      <h2 style={{ margin: '2rem' }}>Topics</h2>
      <Test />

    </div>
    <Link to='/oe'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default Sse
