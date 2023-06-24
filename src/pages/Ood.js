import React from 'react'
import Back from './Back';
import { useState } from 'react';
import Test from '../Test'

const Ood = () => {
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
          <h2 id='h2_text'>OBJECT ORIENTED MODELLING AND DESIGN</h2>
      <div className='syllabus'>
        <h2 style={{ margin: '2rem' }}>Syllabus</h2>
        <h4>UNIT-I</h4>
        <p><b>Introduction</b>: Computer Security Concepts, The OSI security architecture, Security Attacks,
          Security Services, Security Mechanisms, A model for Network Security ..<br />
          <b>Number Theory</b>: Prime Numbers, Fermat’s and Euler’s theorem, testing for primality, The
          Chinese remainder theorem, Discrete logarithms.<br />
          <b>Classical Encryption techniques</b>:Symmetric cipher model, Substitution techniques,
          Transposition techniques, Steganography.
        </p>
        <h4>UNIT-II</h4>
        <p>Block Ciphers & Data Encryption Standard: Traditional Block Cipher Structure, Data Encryption
          Standard, Strength of DES, Block Cipher Design Principles.
          Advanced Encryption Standard(AES): AES structure, AES Transformation functions, AES key
          expansion.
          Block Cipher operations:
          Public key cryptography and RSA: Principles of public key crypto-systems,The RSA Algorithm.
          Other Public Key Crypto Systems: Diffie Hellman Key exchange, Elgamal Cryptographic System.
        </p>
        <h4>UNIT-III</h4>
        <p><b>Cryptographic Hash Functions</b>: Applications of cryptographic hash functions, Hash function
          based on cipher block chaining, SHA 512, SHA-3.<br />
          <b>Message Authentication codes</b>: Message Authentication requirements, Message
          Authentication functions, MAC Based on Hash functions: HMAC<br />
          <b>Digital signatures</b>: Digital Signatures, ELGamal Digital Signature Scheme.
          Key management and Distribution: Symmetric key distribution using Symmetric and
          asymmetric encryption, Distribution of public keys, X.509 Certificates.</p>
        <h4>UNIT-IV</h4>
        <p><b>User authentication</b>: Kerberos.<br />
          <b>Transport Level Security</b>: Web security Considerations,
          Transport Layer Security(TLS), Secure Shell(SSH)<br />
          <b>E-Mail Security</b>: S/MIME, Pretty Good Privacy (PGP)
          IP Security: Overview, IP Security Policy, Encapsulating Security Payload. </p>

      </div>
      <h2 style={{ margin: '2rem' }}>Topics</h2>
      <Test />

       
    </div>
     <Back/>
  </>
}

export default Ood
