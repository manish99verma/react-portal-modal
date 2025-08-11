import { useState } from "react";
import "./App.css";
import Modal from "./Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app-container">
      <button onClick={handleOpenModal} className="btn">
        Show Dialog
      </button>
      {isModalOpen && (
        <Modal>
          <h1>This is test modal created with React Portal</h1>
          <div className="action-container">
            <button className="btn close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
