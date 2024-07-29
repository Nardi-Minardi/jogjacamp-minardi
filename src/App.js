import React from 'react';

function App() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center py-5">
        <h5 className="text-2xl">Welcome to the My App</h5>
        <p className="text-sm">This is a simple app for technical test Jogjacamp</p>
      </div>
      <ul className="flex flex-col lg:flex-row xl:flex-row lg:space-x-8 xl:space-x-8 list-disc">
        <li>Test Layout
          <a href="/test-layout" className="text-blue-500 text-xs ml-2">Click Here</a>
        </li>
        <li>Test Layout Form<a href="/test-layout-form" className="text-blue-500 text-xs ml-2">Click Here</a>
        </li>
        <li>Test Select<a href="/test-select" className="text-blue-500 text-xs ml-2">Click Here</a>
        </li>
      </ul>
      {/* copyright */}
      <div className="absolute bottom-0 w-full text-center py-5">
        <p className="text-xs">© 2024 <a href="https://portofolio-minardi.vercel.app/" target="_blank"
          className="text-blue-500">Minardi</a></p>
      </div>
    </div>
  );
}

export default App;
