import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'
import instagram from '../images/instagram.png'



function Footer() {
  return (
    <>
    <div className="p-10 bg-yellow-400 text-gray-900">
      <div className="max-x-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          <div className="mb-5 sm:text-center pt-2 xl:pl-96 lg:pl-60 md:pl-4 sm:pl-4">
                <h4><a href="https://albertkagande.github.io/portfolio" className="font-bold">Albert Kagande</a> @ 2022</h4>
                <div> <span className="font-bold"></span>Phone: +265996475170 </div>
                <div> <span className="font-bold"></span>Email: kagandea@outlook.com </div>
          </div>
          <div className="mb-5 sm:flex sm:flex-col sm:pl-20 sm:h-12 w-full">
              <a href="https://github.com/albertkagande"><img src={github} className=" pt-1 w-8 ml-8 inline-block mr-2 hover:animate-bounce" />Find me on Github</a>
              <a href="https://www.linkedin.com/in/albert-kagande-2117bb216"><img src={linkedin} className="pt-1 w-8 my-2 inline-block ml-8 mr-2 hover:animate-bounce" />Find me on Linkedin</a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer