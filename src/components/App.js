import React from 'react';
import Card from './Card';
import GenreMenu from './GenreMenu';
import axios from 'axios';
import { endpoints, getImageUrl } from '../config';

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            list: [],
            filteredList: [],
            filtered: false,
            filterId: 'all',
            likedList: [],
            liked: false,
        };
        this.filterFilms = this.filterFilms.bind(this);
        this.likeFilm = this.likeFilm.bind(this);
    }

    componentDidMount() {
        axios
            .get(endpoints.mostPopularMovies())
            .then(data => {
                this.setState({
                    list: data.data.results,
                });
            });

    }

    likeFilm(filmId) {
        if (this.state.likedList.includes(filmId)) {
            this.setState(
                {
                    likedList: this.state.likedList.filter(item => item !== filmId)
                }
            )
        }
        else {
            this.setState(
                {
                    likedList: this.state.likedList.concat(filmId)
                }
            )
        }

    }

    filterFilms(genreId) {
        this.setState({
            filteredList: this.state.list
                .filter(film => film.genre_ids.includes(genreId)),
            filtered: true,
            filterId: genreId,
        });
    }

    render() {
        const cards = this.state.filtered ? this.state.filteredList : this.state.list;
        return (
            <div>
                <GenreMenu
                    filterFilms={this.filterFilms}
                    selected={this.state.filterId}
                />

                {cards.map((card) => (

                    <Card
                        id={card.id}
                        key={card.original_title}
                        title={card.original_title}
                        backgroundImage={getImageUrl(card.backdrop_path)}
                        data={card.release_date}
                        voteAverage={card.vote_average}
                        voteCount={card.vote_count}
                        description={card.overview}
                        likeFilm={this.likeFilm}
                        liked={this.state.likedList.includes(card.id) ? true : false}
                    />
                ))}
            </div>
        );
    }
}

export default App;
