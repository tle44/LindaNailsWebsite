import React from 'react';

const HeadingLayout= ({ title, subtitle, content }) => {
    return (
        <div className="container font-cormorant">
            <div className="text-center max-w-[400px] mx-auto mt-20 mb-10">
                <p className="text-md bg-clip-text text-transparent bg-primary">
                    {title}
                </p>
                <h1 className="text-3xl sm:text-4xl font-bold">{subtitle}</h1>
                <p className="text-sm text-gray-400">
                    {content}
                </p>
            </div>
        </div>
    );
};

export default HeadingLayout;
