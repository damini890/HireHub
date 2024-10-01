import React from 'react';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center py-6">
      <div className="w-full max-w-md p-8 space-y-8 bg-[#F4F4F4] rounded-lg shadow-lg border border-[#EAEAEA]">
        <div>
          <h2 className="text-4xl font-extrabold text-center text-[#000000]">Sign In</h2>
          <p className="mt-2 text-center text-[#2B2B2B]">Access your account</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-md w-full px-4 py-3 bg-[#FFFFFF] text-[#2B2B2B] placeholder-[#A3A3A3] border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-md w-full px-4 py-3 bg-[#FFFFFF] text-[#2B2B2B] placeholder-[#A3A3A3] border border-[#EAEAEA] focus:outline-none focus:ring-2 focus:ring-[#000000] focus:ring-offset-2 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-[#000000] focus:ring-[#000000] border-[#EAEAEA] rounded"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-[#2B2B2B]">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-[#000000] hover:text-[#2B2B2B]">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#000000] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#000000]"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-[#2B2B2B]">
            Don’t have an account?{' '}
            <a href="/signup" className="font-medium text-[#000000] hover:text-[#2B2B2B]">
              Sign up here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
