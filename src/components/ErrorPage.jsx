function ErrorPage() {
  return (
    <div className="border border-black py-32">
	    <div className="bg-blue-600 border border-black max-w-xs flex flex-col items-center mx-auto py-6 rounded-md shadow-lg">
    		<h1 className="text-3xl text-white">Error 404</h1>
    		<p className="text-white">Page Not Found</p>
    	</div>
    	<p className="max-w-xs mx-auto p-1 text-blue-500 hover:underline hover:text-blue-600">Return to homepage</p>
    </div>
  );
}

export default ErrorPage;