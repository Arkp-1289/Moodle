import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import Test from '../Test'

const At = () => {
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
          <h2 id='h2_text'>AUTOMATION TESTING</h2>
      <div className='syllabus'>
        <h2 style={{margin:'2rem'}}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction</b>: Introduction to Selenium Structure Objectives What is Selenium?; Introducing
          Selenium, Brief History of The Selenium Project, Selenium’s Tool Suite, SeleniumIDE, Selenium
          RC, Selenium Web driver, Selenium Grid, Test Design Considerations<br/>
  
          <b>Preparing System and Application Under Test</b>:Structure Objectives Setting eclipse Create
          new Java project Adding Selenium jars Set browser drivers Walkthrough of BPB application Other
          applications

        </p>
        <h4>UNIT-II</h4>
        <p>Web Driver, Web Element, and By Structure Objectives Web Driver and its purpose Set browser
          drivers Methods of Web Driver The Web Element interface Generic structure of Web Element
          Methods of Web Elements Exception with Web Elements About By class Methods in By class
          Understanding locators Exception with the By class
          Working with Web Elements—Form, Table, and Dropdown Structure Objectives Working with
          form elements working with Web Tables Working with dropdown
        </p>
        <h4>UNIT-III</h4>
        <p>Working with Web Element—Alert, Frame, IFrame, and Window Structure Objectives Working
          with JavaScript alerts Working with Frame and IFrame Working with HTML window
          Extra Concepts— Actions, Screenshot, Web Driver Manager Introduction Structure Objectives
          Actions Screenshot Web Driver Manager</p>
        <h4>UNIT-IV</h4>
        <p>What is Test NG Structure Objectives Introduction, Installation Structure Assertions in Test NG
          Result and reporting in Test NG Design Test NG test passing data in Test NG test
          Concept of Page Object Model Structure Objectives Page object model Implementing page object
          model Implementing page factory Structure Objectives Managing data using CSV Managing data
          using Excel Reading data from Excel file Using Excel reading function</p>

      </div>  
      <h2 style={{ margin: '2rem' }}>Topics</h2>
      <Test />

      
    </div>
    <Link to='/pe'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default At
