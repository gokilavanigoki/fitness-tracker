

export default function Login (){
    return <section id="login" className="flex items-center justify-center min-h-screen bg-tertiary">
        <div className="w-full max-w-md bg-red-200 rounded-lg shadow-lg p-8">
            <h2 className="font-hero-font text-2xl font-bold text-center text-gray-600 mb-6">Login to fitness Tracker</h2>

            {/* {email input} */}
            <form id="login-form" className="flex flex-col">
            <div className=" mb-4">
                <label className="block text-gray-700 text-sm font-hero-font font-semibold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input type="email" id="email" placeholder="Enter your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2-gray-500 placeholder-gray-400 text-sm" 
                autoComplete="current-email"/>
                </div>
                {/* {password input} */}
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-hero-font font-semibold mb-2" htmlFor="password">
                        password
                    </label>
                    <input type="password" id="password" placeholder="Enter your password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2-gray-500 placeholder-gray-400 text-sm" 
                    autoComplete="current-password"/>

                </div>
                {/* {Login button} */}
                <button className="w-ful py-2 px-4 text-white rounded-lg hover: bg-red-800 transition duration-100">
                  Login
                </button>
                </form>
                {/* {Additional link} */}
                <div className="mt-4 text-center">
                    <a href="/" className="text-gray-600 text-sm hover:underline"> Forgot Password</a>
                </div>
                <div className="mt-2 text-center text-sm">
                    Don't have a account? {" "}
                    <a href="/" className="text-red-950 font-medium hover:underline">
                      Sign Up  
                    </a>
                </div>

                </div>
        </section>

   
}