import { useState, useEffect } from "react";
import CustomSwiper from "./CustomSwiper";
import { ethers } from "ethers";
import img1 from "../../images/swiper/img1.png";
import img2 from "../../images/swiper/img2.png";
import Quantity from "../common/Quantity";

export default function Minting({ refProp }) {
  const nftAddress = "0x5F5C8AbD50051e4F8d8325368c79A754F9E9bbC8";
  const [userAddress, setUserAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [itemIndex, setItemIndex] = useState(0);
  const [launchTime, setLaunchTime] = useState(1642777200000);
  const [value, setValue] = useState(1);
  const [gallery] = useState([
    {
      price: 0.15,
      id: 2,
      image: img2,
    },
    {
      price: 0.15,
      id: 1,
      image: img1,
    },
  ]);

  const connectWallet = async () => {
    console.log("hola");
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAddress(accounts[0]);

      window.localStorage.setItem("userAddress", accounts[0]);

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      console.log(chainId);

      if (chainId !== "0x38") {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x38" }],
        });
      }

      window.ethereum.on("accountsChanged", function (accounts) {
        setUserAddress(accounts[0]);
      });

      window.ethereum.on("chainChanged", (_chainId) =>
        window.location.reload()
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleMint = async () => {
    setIsLoading(true);
    try {
      let provider = new ethers.providers.Web3Provider(window.ethereum);
      let signer = provider.getSigner(0);

      let contractInstance = new ethers.Contract(
        nftAddress,
        ["function publicSaleMint(uint256 _amount) public payable "],
        signer
      );

      let price = (value * 0.15 * 10 ** 18).toString();

      let tx = await contractInstance.publicSaleMint(value, {
        value: price,
      });

      let receipt = await tx.wait();

      console.log(receipt);
    } catch (error) {
      console.log(error, "handleMint");
      if (error.data) {
        window.alert(error.data.message);
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    // const checkStartTime = async () => {
    //   try {
    //     const NODE_URL = "https://data-seed-prebsc-1-s1.binance.org:8545/";
    //     let provider = new ethers.providers.JsonRpcProvider(NODE_URL);
    //     let contractInstance = new ethers.Contract(
    //       nftAddress,
    //       ["function publicSaleStarts() public view returns(uint256)"],
    //       provider
    //     );
    //     let startTime = await contractInstance.publicSaleStarts();
    //     console.log(startTime * 1000, "launchTime");
    //     setLaunchTime(startTime * 1000);
    //   } catch (error) {
    //     console.log(error, "checkStartTime");
    //   }
    // };
    // checkStartTime();
  }, []);

  return (
    <div id="mint-box" className="product container" ref={refProp}>
      <CustomSwiper
        gallery={gallery}
        setItemIndex={setItemIndex}
        className="product__column product__column--1"
      />
      <div className="product__column product__column--2">
        {Date.now() > launchTime ? (
          <>
            <h1 className="title product__title">Minting</h1>
            <ul className="product__list">
              <li className="product__item">
                <h4 className="product__item-title">Account</h4>
                {userAddress ? (
                  <span className="product__item-text product__item-text--address">
                    {userAddress.slice(0, 8)}...{userAddress.slice(-8)}
                  </span>
                ) : (
                  <span
                    onClick={connectWallet}
                    className="product__item-text product__item-text--address"
                  >
                    Please connect wallet
                  </span>
                )}
              </li>
              <li className="product__item">
                <h4 className="product__item-title">Amount</h4>
                <Quantity
                  className="quantity--product"
                  value={value}
                  setValue={setValue}
                />
              </li>
              <li className="product__item">
                <h4 className="product__item-title">Total price</h4>
                <span className="product__item-text">
                  {Number(gallery[itemIndex].price * value).toFixed(2)} BNB
                </span>
              </li>
            </ul>
            <button
              onClick={userAddress ? handleMint : connectWallet}
              disabled={isLoading}
              className="product__button button"
            >
              {isLoading ? "Buying..." : "Buy Now"}
            </button>
          </>
        ) : (
          <>
            <h1 className="title product__title product__minting">
              Minting is not available yet...
            </h1>
          </>
        )}
      </div>
    </div>
  );
}
