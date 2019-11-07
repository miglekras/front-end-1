import React from 'react';

class GenreLink extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            genreId: props.id,
            title: props.genre,
            filterFilms: props.filterFilms,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.state.filterFilms(this.state.genreId);
    }


    render() {
        return (
            <button className={this.props.selected ? 'selected' : null} onClick={this.handleClick}>
                {this.state.title}
            </button>)
    }


}
export default GenreLink;