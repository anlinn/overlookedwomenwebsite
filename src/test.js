<div className={`gal-card info ${displayedWoman.category} `} id={`${displayedWoman.name.toLowerCase().replaceAll(" ","-")}`}>
          <div className="gal-row">
            <div className="gal-column image-side">
              
              <div className="flip-image-card" style={{backgroundImage: `url(${displayedWoman.image_src})`}}>
                
              <div className="image-front">
                
                <img className="gal-card-image" src={displayedWoman.img_src}  />
                {displayedWoman.img_credit ? (  <p className="credit-line"> {displayedWoman.img_credit}</p>) : null }
                
              </div>
              <div className="image-back">
                <div className="image-wrapper">
                <img className="gal-card-image" src={displayedWoman.icon_src}/>
                </div>
              </div>
              </div>
            </div>
            <div className="gal-column text-side">
              <div className="gal-content">
                <a className="gal-header">{displayedWoman.name}</a>
                <div className="gal-meta">
                  {displayedWoman.lifespan}
                </div>
                <div className="gal-description">
                  <p>{displayedWoman.description}</p>
                </div>
                <div className="gal-link-box">
                  <a className="gal-link" href={displayedWoman.link}>
                    Learn more about her !
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>