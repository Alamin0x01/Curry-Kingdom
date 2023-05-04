import React from "react";

const Statistics = () => {
  return (
    <div className="pt-12 sm:pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200 sm:text-4xl">
            Loved by over 5 new customers every hour
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Discover the best chefs near you with our chef hunting website. Find
            your perfect culinary match and elevate your dining experience.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <dl className="rounded-lg shadow-lg sm:grid sm:grid-cols-3 bg-gray-100 dark:bg-gray-900">
                <div className="flex flex-col border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Authentic
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-orange-500">
                    100%
                  </dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Chefs
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-orange-500">
                    100+
                  </dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 dark:border-gray-800 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Users
                  </dt>
                  <dd className="order-1 text-5xl font-bold tracking-tight text-orange-500">
                    4k
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
