import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Feedbacks } from './components';

const App = () =>{
  return (
      <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>

        </div>
        <About />
        <Experience/>
        <Feedbacks/>
        {/* <div className='relative z-0'> */}
        <Works/>
        <Tech />
          <Contact/>

        {/* </div> */}
          <StarsCanvas/>

      </div>
      </BrowserRouter>
  )
}

export default App