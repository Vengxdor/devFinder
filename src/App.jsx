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
            <span className='uppercase font-medium'>Light</span>
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

        <section className='bg-primaryDark dark:bg-primaryLight'>
          <header>
            <picture>
              <img src='https://placekitten.com/100/100' alt='' />
            </picture>

            <div>
              <h2>The Octocat</h2>
              <a href='#'>@octocat</a>
              <p>joined 25 Jan 2011</p>
            </div>
          </header>

          <article>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
              ipsam suscipit cumque illum natus delectus eius
            </p>
            <div>
              <div>
                <h3>repos</h3>
                <span>8</span>
              </div>
              <div>
                <h3>followers</h3>
                <span>3838</span>
              </div>
              <div>
                <h3>following</h3>
                <span>9</span>
              </div>
            </div>
          </article>
          <nav>
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
