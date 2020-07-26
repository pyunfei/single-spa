import React, { useEffect, useRef } from 'react';
import './App.css'

function App({ appContent, loading }) {
  const goto = (title, href) => {
    window.history.pushState({}, title, href);
  }
  const link = useRef(null);
  useEffect(() => {
    link.current = window.location.pathname;
    console.log(link.current)
  }, []);
  return (
    <>
      <header>
        <nav>
          <ol>
            {/* <li><p onClick={() => goto('home', '/')}>home</p></li> */}
            <li><p onClick={() => goto('vue', '/vue')}>vue2</p></li>
            <li><p onClick={() => goto('react', '/react')}>react</p></li>
          </ol>
        </nav>
      </header>
      {loading ? <div>loading...</div> : null}
      <div dangerouslySetInnerHTML={{ __html: appContent }} />
    </>
  )
}

export default App;
