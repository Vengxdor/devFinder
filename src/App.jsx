import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons'
import { Mode } from './components/mode'
import { UserInfo } from './components/userInfo'
import { useInformation } from './hooks/userInformation'

function App () {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const fields = new window.FormData(e.target)
    const newSearch = fields.get('search')
    setSearchQuery(newSearch)
  }
  const inf = useInformation(searchQuery)

  return (
    <div className='app bg-backgroundDark dark:bg-white'>
      <main className='w-10/12 m-auto md:w-9/12 lg:w-2/4'>
        <header className='flex justify-between py-8 dark:text-black'>
          <h1 className='text-3xl font-'>devfinder</h1>
          <Mode/>
        </header>

        <form onSubmit={handleSubmit} className=' mb-7'>
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
            <button className='p-3 px-5 rounded-lg bg-searchDark' type='submit'>
              Search
            </button>
          </label>
        </form>

        <UserInfo inf={inf} searchQuery={searchQuery}/>
      </main>
    </div>
  )
}

export default App
