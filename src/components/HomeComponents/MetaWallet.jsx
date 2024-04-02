import React, { useState } from "react";
import Web3 from "web3";

const MetaMaskIntegration = () => {
  const [accounts, setAccounts] = useState([]);

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accs = await web3.eth.getAccounts();
        setAccounts(accs);
        alert("Wallet connected successfully!");
      } else {
        alert(`Please install MetaMask extension from https://metamask.io/`);
      }
    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Error connecting wallet. Please try again.");
    }
  };

  return (
    <div className="metamask-integration">
      <a
        href="https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?utm_source=chat.openai"
        target="_blank"
      >
        <button onClick={connectWallet}>Manage Wallet</button>
      </a>
      {accounts.length > 0 && (
        <div>
          <h3>Connected Accounts:</h3>
          <ul>
            {accounts.map((account, index) => (
              <li key={index}>{account}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MetaMaskIntegration;
