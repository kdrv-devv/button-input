import React, { useState } from 'react';
import Input from './components/input';
import Button from './components/button';
import Flex from './components/flex';
import Alert from './components/alert';

const App = () => {
  const [name, setName] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = () => {
    if (name) {
      setShowAlert(true);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <Flex direction="column" justify="center" align="center" style={{ gap: "10px" }}>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleSubmit}>Submit</Button>
        {showAlert && <Alert message={`Salom, ${name}!`} type="success" />}
      </Flex>
    </div>
  );
};

export default App;
