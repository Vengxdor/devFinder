import { useEffect, useState } from 'react'

export const useInformation = (searchQuery) => {
  const [userInfo, setUserInfo] = useState({})

  useEffect(() => {
    if (!searchQuery) return
    fetch(`https://api.github.com/users/${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        // map the response to asing values and don't depent from the API
        if (!data) return
        setUserInfo({
          name: data.login,
          creation: data.created_at,
          bio: data.bio,
          repos: data.public_repos,
          followers: data.followers,
          following: data.following,
          location: data.location,
          url: data.url,
          twitter: data.twitter_username,
          company: data.company,
          image: data.avatar_url
        })
      })
  }, [searchQuery])
  return userInfo
}
