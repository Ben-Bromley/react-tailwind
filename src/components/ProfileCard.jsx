import defaultImage from "../assets/profile-image-default.png";

function profileCard(props){

	let photo = props.imageLocation || defaultImage;
	let name = props.name || "John Smith";
	let tag = props.tag || "@jsmith";
	let desc = props.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, obcaecati.";

	return (
		<div>
			<div className="mb-7 shadow-lg w-48 border-black border rounded-md text-center p-2">
				<img className="w-full" src={photo} alt="profile"/>
				<p className="font-bold">{name}</p>
				<p className="text-gray-600">{tag}</p>
				<p className="">{desc}</p>
				<div>
					
				</div>
			</div>
		</div>
	)
}

export default profileCard