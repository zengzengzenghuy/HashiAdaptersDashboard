import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import TransactionTable from '../components/transactionTable/TransactionTable';
import Footer from '../components/Footer';
import React, { Component } from 'react';
export default function Home() {
  return (
    <div>
      <TransactionTable />
      <Footer />
    </div>
  );
}
