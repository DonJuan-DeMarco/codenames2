function LinkerBlue() {
	return (
		<>
			{Array(2)
				.fill(true)
				.map((_, pageKey) => (
					<div key={pageKey} className='keys-wrapper'>
						{Array(8)
							.fill(true)
							.map((_, iKey) => (
								// <div className='wrapper-links'>
								<div className='link-card blue-link'></div>
								// <div className='link-card blue-link'></div>
								// </div>
							))}
						{!!pageKey && (
							<div className='link-card double-link'></div>
						)}
						{!pageKey && (
							<div className='link-card double-link-back'></div>
						)}
					</div>
				))}
			{Array(2)
				.fill(true)
				.map((_, pageKey) => (
					<div key={pageKey} className='keys-wrapper'>
						{Array(8)
							.fill(true)
							.map((_, iKey) => (
								// <div className='wrapper-links'>
								<div className='link-card red-link'></div>
								// <div className='link-card blue-link'></div>
								// </div>
							))}
						<div className='link-card black-link'></div>
					</div>
				))}
			{Array(2)
				.fill(true)
				.map((_, pageKey) => (
					<div key={pageKey} className='keys-wrapper'>
						{Array(7)
							.fill(true)
							.map((_, iKey) => (
								// <div className='wrapper-links'>
								<div className='link-card white-link'></div>
								// <div className='link-card blue-link'></div>
								// </div>
							))}
					</div>
				))}
			{/* <div className='wrapper-links'>
				<div className='link-card red-link'></div>
				<div className='link-card red-link'></div>
			</div>
			<div className='wrapper-links'>
				<div className='link-card double-link'></div>
				<div className='link-card double-link-back'></div>
			</div>
			<div className='wrapper-links'>
				<div className='link-card black-link'></div>
				<div className='link-card black-link-back'></div>
			</div> */}
		</>
	);
}

export default LinkerBlue;
