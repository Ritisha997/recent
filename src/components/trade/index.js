import React from "react";
import Orderbtn from "../orderbtn";
import Range from "../range";
import Content from "../trade-content";
import './index.scss'

const Trade = () => {
	return (
		<>
			<div className="trade">
				<div className="trade-section">
					<div className="trade-order">
						<Orderbtn />
                        <h3>Limit Order</h3>
					</div>
                    <Range/>
                    <Content/>
				</div>
			</div>
		</>
	);
};

export default Trade;
