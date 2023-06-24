import React from 'react'
import Back from './Back';
import { useState } from 'react';
import Test from '../Test'
const Ml = () => {
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
      <h2 id="h2_text">MACHINE LEARNING</h2>
      <div className='syllabus'>
        <h2 style={{ margin: '2rem' }}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction</b>: Well posed learning problems, Designing a Learning System, Perspectives and
          Issues in machine learning.<br/>
          <b>Concept Learning and general to specific ordering</b>: concept learning Task , Concept learning as a
          search, Finding a Maximally Specific Hypothesis , Version Spaces and Candidate Elimination
          Algorithm, Remarks on Version space and candidate elimination.<br/>
          <b>Bayesian Learning</b>: Bayes Theorem, Maximum Likelihood and Least Square Error Hypotheses,
Bayes Optimal Classifier, Naïve-Bayes Classifier, Bayesian Belief Network.  </p>
        <h4>UNIT-II</h4>
        <p><b>Decision Tree Learning</b> : Decision Tree Representation, appropriate problems for decision tree,
          the basic decision tree Algorithm, Issues in decision tree learning.<br/>
          <b>Artificial Neural Networks</b>: Introduction, Neural Network Representation, appropriate problems
          for neural network, Perceptrons , Multilayer Networks and the Back Propagation Algorithm.
          Instance Based Learning: Introduction, KNN Learning, Locally Weighted Regression , Radial Bias
          Functions, Case-Based Reasoning. </p>
        <h4>UNIT-III</h4>
        <p><b>Learning Sets of Rules: Sequential Covering Algorithm , Learning Rule Sets</b>: summary , Learning
          First Order Rules, Learning set of first order rules: FOIL.<br/>
          <b>Reinforcement Learning</b>: Introduction, the Learning Task , Q Learning , Non Deterministic
          Rewards and Actions , Temporal Difference Learning , Generalizing from Examples ,
          Relationship to Dynamic Programming</p>
        <h4>UNIT-IV</h4>
        <p><b>Dimensionality Reduction</b> : Introduction, subset selection, Principal component analysis,
          Feature Embedding, Factor analysis, Singular Value Decomposition and Matrix factorization,
          Multidimensional Scaling, Linear Discriminant analysis, Canonical correlation analysis.<br/>
          <b>Clustering</b>: Introduction, Mixture Densities, K-Means Clustering, Expectation-Maximization
          Algorithm, Mixtures of Latent Variable Models, Supervised Learning after Clustering, Spectral
          Clustering, Hierarchical Clustering, Choosing the Number of Clusters.</p>

      </div>
      
    </div>
    <Test/>
    <Back/>
  </>
}

export default Ml