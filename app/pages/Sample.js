import React from 'react'
import Jumbotron from '../components/Jumbotron'
import MovieList from '../components/MovieList'

const SamplePage = () =>
	<div className="sample-page">
		<Jumbotron name="React and Redux" />
		<MovieList/>
	</div>

export default SamplePage
