import React from 'react';

// making a link component to be put in the header
const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    // fixing control keys functions
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    // preventing the default refresh
    event.preventDefault();
    window.history.pushState({}, '', href);

    // communicating to the route components that a route has changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
