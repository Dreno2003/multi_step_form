
export const Card = ({imgSrc, title}) => {

	return(

		<div className="card  rounded-lg card-compact w-auto bg-base-100 shadow-md">
		<figure><img src={imgSrc} alt={title} className=" h-3/6 w-full"/></figure>
		<div className="card-body">
		<h2 className="card-title">{ title }</h2>
		</div>
		</div>

		)

}