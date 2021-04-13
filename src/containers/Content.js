import { Content, Facts, Keywords, Slider } from '../components'
import { getTopCast, getTopRecommendations } from '../utils/api'
import { formatCurrency, numToPercentage, CountryCodeToName } from '../utils/format'
import { IMAGE_URLS, CONFIG } from '../constants'

export default function ContentContainer({ details }) {
  const getOriginalTitle = originalTitle => (
    details.title === originalTitle ? undefined : originalTitle
  )

  const cast = getTopCast(details, CONFIG.MAX_CAST)
  const recommendations = getTopRecommendations(details, CONFIG.MAX_RECOMMENDATIONS)
  const facts = [
    { title: 'Original Title', key: 'original_title', transform: getOriginalTitle },
    { title: 'Status', key: 'status', transform: value => value },
    { title: 'Original Language', key: 'original_language', transform: CountryCodeToName },
    { title: 'Budget', key: 'budget', transform: formatCurrency },
    { title: 'Revenue', key: 'revenue', transform: formatCurrency }
  ]

  const factItems = facts.map(fact => (
    fact.transform(details[fact.key]) && (
      <Facts.Item key={fact.key}>
        <Facts.Item.Title>{fact.title}</Facts.Item.Title>
        <Facts.Item.Value>{fact.transform(details[fact.key])}</Facts.Item.Value>
      </Facts.Item>
    )
  ))

  const keywordItems = details.keywords.keywords.map(keyword => (
    <Keywords.Item key={keyword.id}>{keyword.name}</Keywords.Item>
  ))

  const castSliderItems = cast.map(person => (
    <Slider.Item key={`${person.order}-${person.id}`}>
      <Slider.Item.Image
        src={person.profile_path && `${IMAGE_URLS.IMAGE_185}${person.profile_path}`}
        alt={person.name}
        title={person.name}
        holderClass="fas fa-user"
      />
      <Slider.Item.Content>
        <Slider.Item.Title>{person.name}</Slider.Item.Title>
        <Slider.Item.Subtitle>{person.character}</Slider.Item.Subtitle>
      </Slider.Item.Content>
    </Slider.Item>
  ))

  const recommendationsSliderItems = recommendations.map(item => (
    <Slider.Item
      to={`/movie/${item.id}`}
      key={`${item.order}-${item.id}`}
      imgHeight="140px"
      ratio="1.775"
    >
      <Slider.Item.Image
        src={item.backdrop_path && `${IMAGE_URLS.IMAGE_300}${item.backdrop_path}`}
        alt={item.title}
        title={item.title}
      />
      <Slider.Item.Content>
        <Slider.Item.Title>
          {`${item.title} (${numToPercentage(item.vote_average, 10)})`}
        </Slider.Item.Title>
      </Slider.Item.Content>
    </Slider.Item>
  ))

  // TODO: images in slider need alt text and title

  // TODO: maybe add reviews back in
  return (
    <Content>
      <Content.Columns>
        <Content.Column column="2" row="1">
          {factItems.length > 0 && (
            <>
              <Facts>{factItems}</Facts>
            </>
          )}
          {keywordItems.length > 0 && (
            <>
              <Keywords.Title>Keywords</Keywords.Title>
              <Keywords>{keywordItems}</Keywords>
            </>
          )}
        </Content.Column>
        <Content.Column column="1" row="1">
          {castSliderItems.length > 0 && (
            <>
              <Content.Heading>Top Billed Cast</Content.Heading>
              <Slider>{castSliderItems}</Slider>
            </>
          )}
          {recommendationsSliderItems.length > 0 && (
            <>
              <Content.Heading>Recommendations</Content.Heading>
              <Slider>{recommendationsSliderItems}</Slider>
            </>
          )}
        </Content.Column>
      </Content.Columns>
    </Content>
  )
}

// <div>
//     <h2 id="reviews">Reviews</h2>
//     {details.reviews.results.slice(0,5).map((review, idx) => (
//         <div key={idx}>
//             <p>{review.author}</p>
//             <p>{review.content}</p>
//         </div>
//     ))}
// </div>
