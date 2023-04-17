import React from 'react'
import './index.scss'
import { FaChevronDown } from "react-icons/fa";

const Content = () => {
  return (
		<>
			<div className="content">
				<div className="content-right">
					<h3 className='content-right_title'>From</h3>
					<div className="content-right_main">
						<div className="content-img">
							<img src="" alt="" className="content-imgs" />
						</div>
						<h2>ATOM</h2>
						<FaChevronDown className="content-icon" />
					</div>
				</div>
				<div className="content-left">
					<h2 className='content-left_main'>0.00000000</h2>
					<div className="content-left_sub">
						<h4>≈ $0.00</h4>
						<h4>1 ATOM = 224.497126 CMDX</h4>
					</div>
				</div>
			</div>
		</>
	);
}

export default Content
