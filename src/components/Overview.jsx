import React from 'react'
import './scss/Overview.scss'
import { lists } from './../utils/lists';

const Overview = () => {
  return (
    <div>
      <div className="overview">
        <div className="overviewDescription">
          <p>Abdull-Savutohunov / </p>
          <h1>Hi I'm Abdull </h1>
          <div className="line"/>
          <h2>A React Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium modi laudantium sequi sed,</p>
          <p>Lorem ipsum dolor amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor amet consectetur adipisicing elit.</p>
        </div>
        <div className="repositories">
          <div className="repositoriesTitle">
            <h2>Popular repositories</h2>
          </div>
          <div className="repositoriesContainer">
            {
              lists.map((repo , i) => (
                <div className="repoBox" key={i}>
                  <div className="repositoriesTop">
                    <h3>{repo.name}</h3>
                    {/* <p>{repo.stack}</p> */}
                  </div>
                  <div className="repositoriesBottom">
                    {/* <p>{repo.stack}</p> */}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Overview
