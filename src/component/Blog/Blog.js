import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
          <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
            Welcome to Blog Site
          </p>
          <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
            Questions & Ans
          </h2>
          <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
            <div>
              <h3 className="font-semibold">1: what is cors?</h3>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                Cross-origin resource sharing (CORS) is a browser mechanism which enables controlled 
                access to resources located outside of a given domain.Cross-origin resource sharing 
                (CORS) is a mechanism that allows a way for web pages to access API or assets running on
                 a different restricted domain.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                2: Why are you using firebase? What other options do you have to
                implement authentication?
              </h3>
              <p className="mt-1 dark:text-gray-400">
                {" "}
                According to Firebase console, the application SDKs provided by this toolkit, 
                directly interact with backend services. Therefore, there is no need to 
                establish any connection between the app and the service.For most developers,
                 building an authentication system for your app can feel a lot like paying 
                 taxes. They are both relatively hard to understand tasks that you have no 
                 choice but doing, and could have big consequences if you get them wrong. No 
                 one ever started a company to pay taxes and no one ever built an app just so 
                they could create a great login system. They just seem to be inescapable costs.
                Your app will then be able to connect securely with the real time database,
                 Firebase storage or to your own custom back end. 
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                3: How does the private route work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
              Private Routes in React Router (also called Protected Routes) require a user being
               authorized to visit a route (read: page). So if a user is not authorized for
                a specific page, they cannot access it.This is a React Router tutorial which 
                teaches you how to use Private Routes with React Router 6.
              </p>
            </div>
            <div>
              <h3 className="font-semibold">
                {" "}
                4: What is Node? How does Node work?
              </h3>
              <p className="mt-1 dark:text-gray-400">
              Node.js is an open-source, cross-platform JavaScript runtime environment and
               library for running web applications outside the client's browser.Node.js is a 
               server-side platform that allows you to run JavaScript applications in a run 
               time environment. It includes all the components you need to execute a JavaScript
                program on a server utilizing the same architecture as the Java Runtime 
                Environment (JRE).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
