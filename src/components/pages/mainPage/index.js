import React from 'react'

import {Title, Toggler, TogglerItem, CardsRow, MovieCard } from '../../library/';

import { FormattedMessage } from 'react-intl';
import {Search} from "../../library/Search";

const MainPage = () => {

    return (
        <>
            {/*<h1>*/}
                {/*<FormattedMessage id="home.title"/>*/}
            {/*</h1>*/}

            <section className="section--welcome">
                <div className="background-overlay">
                    <div className="container">
                        <Title className="title title--white"  type="h1" title="home.welcome">
                            <h3 className="subtitle">
                                <FormattedMessage id="home.subtitle"/>
                            </h3>
                        </Title>
                        <Search />
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Title className="title" type="h2" title="home.popular">
                        <Toggler className="toggler toggler--blue">
                            <TogglerItem value="home.ontv" active={true} />
                            <TogglerItem value="home.ontheaters" active={false} />
                        </Toggler>
                    </Title>
                    <CardsRow type="movie">
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                        <MovieCard title="West World" />
                    </CardsRow>
                </div>
            </section>

            <section className="section--trailers section--dark">
                <div className="background-overlay">
                    <div className="container">
                        <Title className="title title--white" type="h2" title="home.trailers">
                            <Toggler className="toggler toggler--lightblue">
                                <TogglerItem value="home.ontv" active={true} />
                                <TogglerItem value="home.ontheaters" active={false} />
                            </Toggler>
                        </Title>
                        <CardsRow type="trailer">
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер" />
                            <MovieCard title="Бладшот" subtitle="Бладшот (2020) | Офіційний український трейлер"/>
                        </CardsRow>
                    </div>
                </div>
            </section>
        </>
    )
};

export default MainPage;
