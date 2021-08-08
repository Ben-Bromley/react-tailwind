
function Login() {
  return (
    <div>
      <h1 className="text-3xl text-center my-4">Login</h1>
      <form action="" className="text-white flex border max-w-xs flex-col mx-auto jusitfy-evenly     px-6 bg-blue-600 rounded-lg mb-10">
        <label htmlFor="">Username
          <input type="text" placeholder="me@example.com" className="w-full p-1 rounded-md border border-black" />
        </label>
        <label htmlFor="" className="mt-4"> Password
          <input type="password" className="w-full p-1 rounded-md border border-black" />
        </label>
        <button className="bg-green-500 py-2 rounded-md hover:bg-green-600">Login </button>  
      </form>
    </div>
  );
}

export default Login;