import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import SelectDocuments from './components/SelectDocuments';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Right to Rent Check</h1>
        <p>What documents do we accept? To keep this process smooth make sure that you have these documents to hand, with these it won't take any longer than 30 seconds</p>
        <Card
          title="Select 2 documents from the list:"
          buttonText="Proceed with selected docs"
        >
          <SelectDocuments />
        </Card>
        <Card
          title="Select 2 documents from the list:"
          buttonText="Proceed with selected docs"
          secondaryButton
        >
          <p>
            You only need to upload one page with the photo from your passport. Additionally, we will ask for visa for non-european passports.
          </p>
        </Card>
      </main>
    </div>
  );
}

export default App;
