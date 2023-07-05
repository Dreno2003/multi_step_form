
export const Reviewcard = ({userName, body, imgSrc, ...otherProps}) => {

	return(

		<>

		
		<div className="card card-normal shadow-md" {...otherProps}>
		<div className="card-body">
		<div className="card-actions justify-start">
		<img src={imgSrc} alt="title" className="h-20"/>
		</div>
		<h2 className="card-title text-blue-600 mt-3">{userName}</h2>

		<p>{body}</p>
		</div>
		</div>

		</>


		)
}

