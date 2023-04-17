import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { links, social } from '../../utils/links'
import './index.scss'

const Sidebar = () => {
	// const [act, setAct] = useState(false);




  return (
		<>
			<div className='sidebar'>
				<div className="sidebar_main">
					<div className='sidebar-title'>
						<h1>Comdex</h1>
					</div>
					<div>
						<ul className="side-links">
							{links.map((item) => {
								return (
										<li key={item.id} className='side-items'>
											<div className="side-icon">{item.icon}</div>
											<NavLink to={item.path} className="side-link">{item.text}</NavLink>
										</li>
								);

							})}
						</ul>
					</div>
					<div>
						<ul className="social-links">
							{social.map((item) => {
								return <li key={item.id}>{item.icon}</li>;
							})}
						</ul>
					</div>
					
				</div>
			</div>
			{/* <button onClick={()=>setAct(!act)}>some</button> */}
		</>
	);
}

export default Sidebar
