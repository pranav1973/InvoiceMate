import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginsignup from './LoginSingup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

class App extends Component {
  render() {
  return (
    <BrowserRouter>
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <Routes>
        <Route path="/" element={<Loginsignup />} />
        <Route path="/InvoiceForm" element={<InvoiceForm />} />
        </Routes>
      </Container>
    </div>
    </BrowserRouter>
  );
}}

export default App;

