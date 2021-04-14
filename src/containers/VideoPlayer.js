import { VideoPlayer } from '../components'
import { getPlayVideoUrl } from '../utils/api'

export default function VideoPlayerContainer({
  isOpen = false,
  setIsOpen = () => {},
  videos = []
}) {
  const trailers = videos.filter(video => video.type.toLowerCase() === 'trailer')
  const playVideoUrl = getPlayVideoUrl(trailers[0] || videos[0])

  const handleClick = event => {
    if (event.currentTarget === event.target) {
      setIsOpen(false)
    }
  }

  return isOpen && playVideoUrl ? (
    <VideoPlayer onClick={handleClick}>
      <VideoPlayer.Video src={playVideoUrl} allowFullScreen />
    </VideoPlayer>
  ) : null
}
