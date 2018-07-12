import React from 'react';

export default class MovieList extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			movies: [],
			favorites: 0
		}

		this.addFavorites = this.addFavorites.bind(this)
	}

	componentDidMount() {
		fetch('https://thoughtworksreactreduxmovies.firebaseio.com/movies.json')
			.then(res => res.json())
			.then(movieList => this.setState({ movies: movieList }));
	}

	addFavorites() {
		this.setState((prevState, props) => {
			return {favorites: this.state.favorites + 1};
		});
	}

	render() {
		return (
			<div>
				<h4 align="right">Favorites({this.state.favorites})</h4>
				<div className="row">
					{
						this.state.movies.map((movie) =>{
							return <div className="card">
								<img src={movie['Poster']} className="card-img-top"/>
								<div className="card-img-top-overlay">
									<button type="button" onClick={this.addFavorites} className="fav-button">Add to
										Favorites
									</button>
								</div>
								<h5 className="card-title">{movie['Title']}</h5>
								<div className="card-body">
									<p>

									</p>
									<p>{movie['Year']}</p>
									<p>{movie['Genre']}</p>
								</div>
							</div>
						})
					}
				</div>
			</div>
		)
	}
}


