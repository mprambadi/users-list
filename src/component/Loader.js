import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = (props) => (
	<ContentLoader 
		height={90}
		width={400}
		speed={2}
		primaryColor="#000"
		secondaryColor="#ecebeb"
        {...props}
	>
		<rect x="65" y="19" rx="3" ry="3" width="70" height="10" /> 
		<rect x="155" y="20" rx="3" ry="3" width="130" height="10" /> 
		<rect x="74" y="42" rx="3" ry="3" width="90" height="10" /> 
		<rect x="190" y="40" rx="3" ry="3" width="60" height="10" /> 
		<circle cx="34.55" cy="34.22" r="24.55" />
	</ContentLoader>
)

export default Loader
