import { VideoPlayer } from '../components'
import { getVideoUrl } from '../utils'

export default function VideoPlayerContainer({
  isOpen = false,
  setIsOpen = () => {},
  videos = []
}) {
  // TODO: what other types are there? Sort by type instead and then choose 1st.
  const trailers = videos.filter(video => video.type.toLowerCase() === 'trailer')
  const videoUrl = getVideoUrl(trailers[0] || videos[0])

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      setIsOpen(false)
    }
  }

  return isOpen && videoUrl ? (
    <VideoPlayer onClick={handleClick}>
      <VideoPlayer.Video src={videoUrl} allowFullScreen />
    </VideoPlayer>
  ) : null
}
