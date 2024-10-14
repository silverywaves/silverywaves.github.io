import React from 'react'
import './AchievementCard.scss'
import PropTypes from 'prop-types'

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`)
      return
    }
    var win = window.open(url, '_blank')
    win.focus()
  }

  return (
    <div className={isDark ? 'dark-mode certificate-card' : 'certificate-card'}>
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || 'Card Thumbnail'}
          className="card-image"
        ></img>
      </div>
      <div className="certificate-detail-div">
        <h5 className={isDark ? 'dark-mode card-title' : 'card-title'}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? 'dark-mode card-subtitle' : 'card-subtitle'}
          dangerouslySetInnerHTML={{ __html: cardInfo.description }}>
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footer && cardInfo.footer.length > 0 && cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? 'dark-mode certificate-tag' : 'certificate-tag'
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
            </span>
          )
        })}   
      </div>
    </div>
  )
}

AchievementCard.propTypes = {
  cardInfo: PropTypes.shape({
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footer: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired,
  }).isRequired,
  isDark: PropTypes.bool.isRequired
}
