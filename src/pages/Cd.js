import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { TbArrowBigLeftFilled } from "react-icons/tb";
import Test from '../Test'

const Cd = () => {
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
      <h2 id='h2_text'>COMPILER DESIGN</h2>
      <div className='syllabus'>
        <h2 style={{ margin: '2rem' }}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction to Compiling</b>: Compilers - Analysis of the source program - Phases of a compiler
          - Cousins of the Compiler - Grouping of Phases - Compiler construction tools.<br/>
          <b>Lexical Analysis</b>: Role of Lexical Analyzer - Input Buffering - Specification of TokensRecognition of tokens- a language for specifying lexical analyzers- Finite Automata-From Regular
          expressions to NFA- Design of a lexical analyzer generator
        </p>
        <h4>UNIT-II</h4>
        <p><b>Syntax Analysis</b>: Role of the parser - Top-Down parsing - Recursive Descent Parsing,
          Predictive parsing, LL(1) Parser.<br/>
          <b>Bottom-up parsing</b>- Shift Reduce Parsing, Operator Precedence Parser – Operator
          precedence parsing, Operator Precedence functions, Error recovery in operator precedence
          parsing, LR Parsers - SLR Parser, Canonical LR Parser, and LALR Parser- Parser Generators.
        </p>
        <h4>UNIT-III</h4>
        <p><b>Syntax Directed Translation</b>: Syntax Directed definition- construction of syntax trees,
          Bottom-up evaluation of S-attribute Definitions-L-attribute Definitions.<br/> 
          <b>Intermediate Code Generation: Intermediate languages </b>– SDT scheme for Assignment
          Statements - SDT scheme for Case Statements-SDT scheme for Boolean Expressions, SDT
          scheme for Flow of control constructs - SDT scheme for Procedure calls.</p>
        <h4>UNIT-IV</h4>
        <p><b>Code Generation</b>: Issues in the design of code generator - The target machine - Runtime
          Storage management - Basic Blocks and Flow Graphs - Next-use Information - A simple Code
          generator - DAG representation of Basic Blocks.<br/>
          <b>Code Optimization: Introduction- Principal Sources of Optimization </b>- Optimization of basic
Blocks - Introduction to Global Data Flow Analysis- Peephole Optimization. </p>

      </div>
      <Test />
    </div>
    <Link to='/oe'><p style={{ textAlign: 'center' }}><TbArrowBigLeftFilled /> Back</p></Link>
  </>
}

export default Cd
