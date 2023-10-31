import React from "react";
import './StockCard.css';

function StockCard({stock}) {
    return(
        <div className="stock-card">
        <div>
            <h4>symbol</h4>
        </div>
        <div>
            <span>Price</span>
            <span>change</span>
            <span>change precentage</span>
        </div>
        </div>
    )
};

export default StockCard;