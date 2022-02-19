import type { NextPage } from 'next'
import EmploymentHistory from '../components/employment-history'
import Profile from '../components/profile'

const Home: NextPage = () => {
  return (
    <>
      <Profile />
      <EmploymentHistory />
    </>
  )

}

export default Home
