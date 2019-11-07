import React from 'react';
import axios from 'axios';
import { endpoints } from '../config';
import GenreLink from './GenreLink';

class GenreMenu extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterFilms: props.filterFilms,
            genres: [],
        };
    }


    componentDidMount() {
        axios
            .get(endpoints.genres())
            .then(res => {
                this.setState({
                    genres: res.data.genres,
                });
            });

    }

    render() {
        return (
            <div>
                {this.state.genres.map((el) => (
                    <GenreLink
                        id={el.id}
                        key={el.id}
                        genre={el.name}
                        filterFilms={this.state.filterFilms}
                        selected={el.id === this.props.selected}
                    />
                ))}
            </div>
        );
    }
}

export default GenreMenu;