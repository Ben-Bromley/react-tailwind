function ClubhouseEntry() {
  return (
    <div className="my-8">
    	<div className="mx-auto max-w-md md:max-w-2xl -mx-1">
    		<label htmlFor="" className="">Enter Your Clubhouse Profile URL</label><br />
    		<input className="p-2 mt-1 text-black w-4/6" type="text" placeholder="https://clubhouse.com/@username"/>
    		<button className="bg-green-500 p-2 w-2/6 hover:bg-green-600">Submit</button>
    	</div>
    </div>
  );
}

export default ClubhouseEntry;