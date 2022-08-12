import React from 'react'
import MusicRecords from './MusicRecords'
import style from "../Components/musicRecords.module.css"
import FilterSort from '../Components/FilterSort'

const Home = () => {
  return (
    <div >
      <h1>Music Records</h1>
        <div className={style.mainContainer}>
        <FilterSort/>
        <MusicRecords/>
        </div>
    </div>
  )
}

export default Home