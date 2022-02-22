import React from 'react'
import Accordion from './common/Accordion/Accordion';

const questions = [
    {
        title: "How do I purchase $GAINZ tokens?",
        text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing in order to be as transparent and trustworthy as possible to our investors."
    },
    {
        title: "Who are the team? How can we trust them?",
        text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing in order to be as transparent and trustworthy as possible to our investors."
    },
    {
        title: "Is liquidity going to be locked?",
        text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing in order to be as transparent and trustworthy as possible to our investors."
    },
    {
        title: "Is the token audited?",
        text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing in order to be as transparent and trustworthy as possible to our investors."
    },
    {
        title: "What are your tokenomics?",
        text: "We are a team of more than 15 experienced and highly skilled individuals determined to take $GAINZ to the moon! We are in the process of KYC-ing in order to be as transparent and trustworthy as possible to our investors."
    }
];

export default function FAQ({ refProp }) {

    return (
        <div className="faq container" ref={refProp}>
            <h1 className="title faq__title">Frequently Asked Questions</h1>
            <Accordion className="faq__accordion" list={questions} />
        </div>
    )
}
