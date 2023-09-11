import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
  faMagnifyingGlass,
  faLocationDot,
  faBuilding,
  faLink
} from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

function App () {
  const [light, setLight] = useState(false)
  const handleBack = () => {
    document.documentElement.classList.toggle('dark')
    setLight(!light)
  }
  return (
    <div className='app bg-backgroundDark dark:bg-white dark:text-black'>
      <main className='w-10/12 m-auto'>
        <header className='flex justify-between py-8 '>
          <h1 className='text-3xl font-'>devfinder</h1>
          <div className='flex gap-2 justify-center items-center'>
            <span className='uppercase font-medium'>{light === false ? 'light' : 'dark'}</span>
            <button onClick={handleBack}>
              {light === false
                ? (
                <FontAwesomeIcon className='text-2xl' icon={faSun} />
                  )
                : (
                <FontAwesomeIcon
                  className='text-2xl'
                  icon={faMoon}
                />
                  )}
            </button>
          </div>
        </header>

        <form className=' mb-7'>
          <label className='bg-primaryDark dark:bg-primaryLight p-2 flex items-center justify-between w-full rounded-xl' htmlFor='userSearch'>
            <FontAwesomeIcon className='text-xl px-3 text-activeDark' icon={faMagnifyingGlass} />
            <input
              className='w-full bg-transparent outline-none'
              type='text'
              id='userSearch'
              name='search'
              placeholder='Search Github username...'
              autoComplete='off'
            />
            <button className='p-3 rounded-lg bg-searchDark' type='submit'>
              Search
            </button>
          </label>
        </form>

        <section className='bg-primaryDark dark:bg-primaryLight p-8 rounded-xl'>
          <header className='flex p-4 mb-2 items-center gap-6'>
            <picture >
              <img className='rounded-full' src='https://placekitten.com/100/100' />
            </picture>

            <div>
              <h2 className='font-bold'>The Octocat</h2>
              <a className='text-activeDark ' href='#'>@octocat</a>
              <p>joined 25 Jan 2011</p>
            </div>
          </header>

          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              ipsam suscipit cumque illum natus delectus eius
            </p>
            <div className='flex gap-7 my-5 p-5 justify-center bg-infoDark rounded-xl text-center '>
              <div>
                <h3>Repos</h3>
                <span className='font-bold'>8</span>
              </div>
              <div>
                <h3>Followers</h3>
                <span className='font-bold'>3838</span>
              </div>
              <div>
                <h3>Following</h3>
                <span className='font-bold'>9</span>
              </div>
            </div>
          </article>
          <nav className='flex flex-col'>
            <p>
              <FontAwesomeIcon icon={faLocationDot} /> San Francisco
            </p>
            <a href='#'>
              <FontAwesomeIcon icon={faLink} />
              https://github.blog
            </a>
            <a href='#'>
              <FontAwesomeIcon icon={faTwitter} />
              Not Avaible
            </a>
            <a href='#'>
              <FontAwesomeIcon icon={faBuilding} />
              @github
            </a>
          </nav>
        </section>
      </main>
    </div>
  )
}

export default App
