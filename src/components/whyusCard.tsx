
export const WhyusCard = ({title, body, imgSrc}) => {

	return(

		<>

		
		<div className="card card-normal bg-blue-50 rounded-lg shadow-md">
		<div className="card-body">
		<div className="card-actions justify-start">
		<img src={imgSrc} alt="title" className="-mt-16"/>
		</div>
		<h2 className="card-title text-blue-600">{title}</h2>

		<p>{body}</p>
		</div>
		</div>

		</>


		)
}

