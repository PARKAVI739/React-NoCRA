import React from 'react';
import BaseRoute from './Components/BaseRoute';
import DashboardRoute from './Components/DashboardRoute';

function App() {
  // Parse the current URL to get the route
  const currentPath = window.location.pathname;

  // Render different content based on the current path
  if (currentPath === '/') {
    return (
      <div>
        <BaseRoute />
      </div>
    );
  } else if (currentPath === '/Route1') {
    console.log('route 1')
    return <DashboardRoute />;
  } 
  // Add more else-if conditions for additional routes as needed

  // Default to a 404 page if the path doesn't match any known routes
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>The requested URL {currentPath} was not found on this server.</p>
    </div>
  );
}

// const rootRouter = () => {
//     return (
//         <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="add" element={<Add />} />
//             <Route path="edit/:id" element={<Edit />} />
//             <Route path="test" element={<div>test</div>} />
//         </Routes>
//     );
// };

export default App;
