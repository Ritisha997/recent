import React from 'react'
import { FaAngleDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import './index.scss'

const Navbar = () => {
  return (
		<>
			<div className="navbar_main_container">
				<div className="max_width">
					<div className="navbar_container">
						<div className="left_section">
							<ul className="left_section_list">
								{/* <li>
									<button className='nav-btn btn'>Swap</button>
								</li>
								<li>Farm</li> */}
							</ul>
						</div>
						<div className="right_section">
							<ul className="right_section_list">
								<li>
									<button className='nav-btn btn'><span></span>Faucet</button>
								</li>

								<li>
									
								</li>
								

								<li>
									<button className='btn'>Connect</button>
									
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Navbar
