import React from 'react'
import { useState } from 'react';
import Test from '../Test'
import Back from './Back';
const Ai = () => {

  return <>
      <h2 id="h2_text">ARTIFICIAL INTELLIGENCE</h2>
    <div className='syllabus'>
      <h2 style={{margin:'2rem'}}>Syllabus</h2>
      <h4>UNIT-I</h4>
      <p><b>Introduction to AI</b>: What Is AI?, The Foundations of AI, The History of AI, The State of the
        Art.<br/>
        <b>Intelligent Agents</b>: Agents and Environments, Good Behavior: The Concept of Rationality, The
        Nature of Environments, The Structure of Agents.<br/>
        <b>Problem Solving by Search</b>: Problem-Solving Agents, Example Problems, Searching for
        Solutions, Uninformed Search Strategies, Informed (Heuristic) Search Strategies, Heuristic
        Functions.
</p>
      <h4>UNIT-II</h4>
      <p><b>Beyond Classical Search</b>: Local Search Algorithms and Optimization Problems, Searching with
        Non-Deterministic Actions.<br/>
        <b>Adversarial Search</b>: Games, Optimal Decisions in Games, Alpha–Beta Pruning.<br/>
        <b>Constraint Satisfaction Problems</b>: Defining Constraint Satisfaction Problems, Constraint
        Propagation, Backtracking Search for CSPs, Local Search for CSPs, The Structure of Problems.
 </p>
      <h4>UNIT-III</h4>
      <p><b>Logical Agents</b>: Knowledge-Based Agents, The Wumpus World, Logic, Propositional Logic,
        Effective Propositional Model Checking, Agents Based on Propositional Logic.<br/>
        <b>First-Order Logic</b>: Representation Revisited, Syntax and Semantics of First-Order Logic, Using
        First Order Logic, Knowledge Engineering in First-Order Logic.<br/>
        <b>Inference in First-Order Logic</b>: Propositional vs. First-Order Inference, Unification and Lifting,
        Forward Chaining, Backward Chaining, Resolution</p>
      <h4>UNIT-IV</h4>
      <p><b>Knowledge Representation</b>: Ontological Engineering, Categories and Objects, Events. Mental
        Events and Mental Objects, Reasoning Systems for Categories, Reasoning with Default
        Information.<br/>
        <b>Automated Planning</b>: Definition of Classical Planning, Algorithms for Classical Planning
        Planning and Acting in the Real World: Time, Schedules and Resources, Hierarchical
        Planning. </p>
      
    </div>
    


    <Test/>
   <Back/>
  </>
  
}

export default Ai
