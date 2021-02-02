import { Container, DimensionsWrapper, VideoWrapper, Video } from './styles'

export default function VideoPlayer({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

VideoPlayer.Video = function VideoPlayerVideo({ ...restProps }) {
    return (
        <DimensionsWrapper>
            <VideoWrapper>
                <Video {...restProps}></Video>
            </VideoWrapper>
        </DimensionsWrapper>
    )
}