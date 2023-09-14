/* eslint-disable react/prop-types */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
export function UserInfo ({ inf, searchQuery }) {
  return (
<>
{
          searchQuery === '' &&
           <div className='w-full h-full z-10 absolute inset-0 rounded-xl flex justify-center items-center pointer-events-none'>
            <h3 className='text-searchDark z-10 absolute text-2xl'>Search a user</h3>
          </div>
          }
<section className={`bg-primaryDark dark:bg-primaryLight p-8 rounded-xl relative ${searchQuery === '' && 'blur-sm'}`}>
          <header className='flex p-4 mb-2 items-center gap-6'>
            <picture >
              <img className='rounded-full w-20 md:w-32' src={inf.image || 'src/imgs/unknowCat.jpg'} />
            </picture>

            <div>
              <h2 className='font-bold text-2xl md:text-4xl'>{inf.name || 'unknow'}</h2>
              <a className='text-activeDark ' href='#'>{`@${inf.name || 'unknow'}`}</a>
              <p>{`Joined ${inf.creation ? inf.creation.slice(0, 10) : 'unknow'}` }</p>
            </div>
          </header>

          <article>
            <p className='text-center md:text-left'>
              {inf.bio || 'No bio...'}
            </p>
            <div className='flex gap-7 my-5 p-5 justify-center bg-infoDark rounded-xl text-center dark:bg-infoLight '>
              <div>
                <h3>Repos</h3>
                <span className='font-bold'>{inf.repos || 0}</span>
              </div>
              <div>
                <h3>Followers</h3>
                <span className='font-bold'> {inf.followers || 0} </span>
              </div>
              <div>
                <h3>Following</h3>
                <span className='font-bold'>{inf.following || 0}</span>
              </div>
            </div>
          </article>
          <nav className='grid gap-3 text-lg md:grid-cols-2'>
            <p>
              <FontAwesomeIcon className='pr-2' icon={faLocationDot} />
              {inf.location || 'Not Available'}
            </p>
            <a target='_blank' rel='noreferrer' href={`https://github.com/${inf.name || 'https://github.com'}`}>
              <FontAwesomeIcon className='pr-2' icon={faLink} />
              {`https://github.com/${inf.name || ''}`}
            </a>
            <a target='_blank' rel='noreferrer' href='#'>
              <FontAwesomeIcon className='pr-2' icon={faTwitter} />
              {'@' + inf.twitter || 'Not Available'}
            </a>
            <p>
              <FontAwesomeIcon className='pr-2' icon={faBuilding} />
              {inf.company || 'Not Available'}
            </p>
          </nav>
        </section>
</>
  )
}
