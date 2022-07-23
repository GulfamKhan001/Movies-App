import React, { Component } from 'react'
import { movies } from './GetMovies'
import API_KEY from '../secrets';
import axios from 'axios'

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            //   hover: "",
            //   parr: [1], //ab tak main konse page par hu , or what page result am i showing ,
            currPage: 1,
            movie: [],
        };
    }

    async componentDidMount() {
        let ans = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currPage}`);
        // console.log(ans.data.results);

        this.setState({
            movie: [...ans.data.results],
        })
    }

    render() {
        let film = this.state.movie[5];
        // let movie = "";

        return (
            <>
                {this.state.movie.length == 0 ?
                    (<div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    ) : (
                        <div className="card bg-dark text-white">
                            <img src={`https://image.tmdb.org/t/p/original${film.backdrop_path}`
                            } className="card-img" alt={film.original_title} height="580" />
                            <div className="card-img-overlay" >
                                <h5 className="card-title">{film.original_title}</h5>
                                <p className="card-text">{film.overview}</p>
                                <p className="card-text">{TimeRanges}</p>
                            </div>
                        </div>
                    )
                } </>
        )
    }
}
