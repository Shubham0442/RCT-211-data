import React from 'react'
import FilterSort from '../Components/FilterSort'
import style from "./Home.module.css"
import MusicRecords from './MusicRecords'

const Home = () => {
  return (
    <div>
        <div className={style.MainContainer}>
              <div className={style.filterDiv}>
                   <FilterSort/>
              </div>
              <div className={style.MusicRecordsDiv}>
                <MusicRecords/>
              </div>
        </div>
    </div>
  )
}

export default Home