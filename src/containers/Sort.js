import React, { useContext } from 'react'
import { FavouritesContext } from '../context/favourites'
import { Sort } from '../components'

export default function SortContainer() {
  const { setSortBy, sortBy } = useContext(FavouritesContext)

  const handleChange = event => {
    setSortBy(event.target.value)
  }

  return (
    <Sort>
      <Sort.Label htmlFor="sort">Sort By:</Sort.Label>
      <Sort.Select id="sort" onChange={handleChange} value={sortBy}>
        <Sort.Option value="timestamp_favourited,desc">Date Bookmarked Descending</Sort.Option>
        <Sort.Option value="timestamp_favourited,asc">Date Bookmarked Ascending</Sort.Option>
        <Sort.Option value="popularity,desc">Popularity Descending</Sort.Option>
        <Sort.Option value="popularity,asc">Popularity Ascending</Sort.Option>
        <Sort.Option value="vote_average,desc">Rating Descending</Sort.Option>
        <Sort.Option value="vote_average,asc">Rating Ascending</Sort.Option>
        <Sort.Option value="release_date,desc">Release Date Descending</Sort.Option>
        <Sort.Option value="release_date,asc">Release Date Ascending</Sort.Option>
        <Sort.Option value="title,asc">Title (A-Z)</Sort.Option>
        <Sort.Option value="title,desc">Title (Z-A)</Sort.Option>
      </Sort.Select>
    </Sort>
  )
}
