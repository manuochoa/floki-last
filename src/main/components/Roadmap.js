const roadmapArray = [
    {
        title: "Q1 2022",
        list: [
            "Private and Presale",
            "KYC and Audit",
            "Launch",
            "Huge Influencer Marketing and Ads",
            "CMC and CG listings",
            "Fitness Contest Begins",
            "NFT Collection #1 Launch"
        ]
    },
    {
        title: "Q2 2022",
        list: [
            "NFT Marketplace",
            "ERC Launch and Bridging",
            "Merchandising",
            "Surprise Utility Announcement"
        ]
    },
    {
        title: "Q3 2022",
        list: [
            "ExChange Listing Applications",
            "Staking",
            "Fitness and Nutrition Partnerships",
            "Additional NFT-Based utility"
        ]
    },
    {
        title: "Q4 2022",
        list: [
            "Global Product Brand Launch",
            "App Launch",
            "Surprise Utility Announcement"
        ]
    },
];

export default function Roadmap({ refProp }) {
    return (
        <div className="roadmap" ref={refProp}>
            <h1 className="title roadmap__title container">ROADMAP</h1>
            <div className="roadmap__wrapper">
                <ul className="cards-list cards-list--roadmap roadmap__cards-list container">
                    {roadmapArray.map((item, index) => {
                        return (
                            <li className="cards-list__item" key={index}>
                                <div className="card card--roadmap">
                                    <div className="card__wrapper">
                                        <h3 className="card__title">{item.title}</h3>
                                        <ul className="card__list">
                                            {item.list.map((listItem, listIndex) => <li className="card__list-item" key={listIndex}>{listItem}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}
