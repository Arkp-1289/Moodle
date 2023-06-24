import React from 'react'
import { useState } from 'react';
import Back from './Back';
import Test from '../Test'

const Fsd = () => {
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
        <h2 id='h2_text'>FULLSTACK DEVELOPMENT</h2>
        <div className='syllabus'>
              <h2 style={{ margin: '2rem' }}>Syllabus</h2>
              <h4>UNIT-I</h4>
              <p><b>Introducing the Node.js-to-Angular Stack</b>: Understanding the Basic Web
                  DevelopmentFramework, Understanding the Node.js-to-Angular StackComponents
                  <br/><b>Getting Started with Node.js</b>:: Understanding Node.js, Installing Node.js, Working with Node
                  Packages,Creating a Node.js Application, Writing Data to the Console<br/>

                  <b>Angular.js</b>:Getting Started with Angular, Why Angular?, Understanding Angular, Separation of
                  Responsibilities, Adding Angular to Your Environment, Using the Angular CLI, Creating a Basic
                  Angular Application,Understanding and Using NgModule,

              </p>
              <h4>UNIT-II</h4>
              <p><b>Angular Components</b>:Component Configuration, Building a Template, Using Constructors, Using
                  External Templates, Injecting Directives.<br/>
                  <b>Expressions</b>Using Expressions, Using Pipes<br/>
                  <b>Data Binding</b>: Understanding Data Binding<br />
                  <b>Built-in Directives</b>: Understanding Directives, Using Built-in Directives
              </p>
              <h4>UNIT-III</h4>
              <p>
                  <b>Using Events, Listeners, Timers, and Callbacks in Node.js</b>:Node.js Event Model,Adding Work
                  to the Event Queue, Implementing Callbacks<br/>
                  <b>Implementing HTTP Services in Node.js</b>:Processing URLs, Understanding Request, Response,
                  and Server Objects, Implementing HTTP Clients and Servers in Node.js, Implementing HTTPS
                  Servers and Clients<br/>
                  <b>Implementing Express in Node.js</b>:Getting Started with Express, Configuring Routes, Using
                  Request/Responses Objects
              </p>
              <h4>UNIT-IV</h4>
              <p><b>Understanding NoSQL and MongoDB</b>: WhyNoSQL?, UnderstandingMongoDB, MongoDB Data
                  Types;<br/>
                  <b>Getting Started with MongoDB andNode.js</b>:Adding the MongoDB Driver to Node.js, Connecting
                  to MongoDB from Node.js, the Objects Used in the MongoDB Node.js Driver,Accessing and
                  Manipulating Databases</p>

        </div>
          <Test />

    </div>
        <Back/>
  </>
}

export default Fsd
