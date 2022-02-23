import React from "react";
import Accordion from "./common/Accordion/Accordion";

const questions = [
  {
    title: "How do I purchase $GAINZ tokens?",
    text: "As we gear up for launch on Pancakeswap, join our Telegram community for the latest updates on how to participate in our presale!",
  },
  {
    title: "Who are the team? How can we trust them?",
    text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing with Pinksale in order to be as transparent and trustworthy as possible to our investors.",
  },
  {
    title: "Is liquidity going to be locked?",
    text: "Of course! We will provide the link once token has launched and liquidity is locked via Pinksale.",
  },
  {
    title: "Is the token audited?",
    text: "The contract will be fully audited before launch to ensure everything is safe and goes smooth!",
  },
  {
    title: "What are your tokenomics?",
    text: "Please check out our litepaper, linked on top of the website, for info on tokenomics and much more!",
  },
];

export default function FAQ({ refProp }) {
  return (
    <div className="faq container" ref={refProp}>
      <h1 className="title faq__title">Frequently Asked Questions</h1>
      <Accordion className="faq__accordion" list={questions} />
    </div>
  );
}
