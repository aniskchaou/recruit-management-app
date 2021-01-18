import React from 'react';
import PropTypes from 'prop-types';
import './DashBoard.css';

const DashBoard = () => (
    <div className="row">
        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-1">
                            <i className="pe-7s-cash"></i>
                        </div>
                        <div className="stat-content">
                            <div className="text-left dib">
                                <div className="stat-text"><span className="count">12</span></div>
                                <div className="stat-heading">Candidats</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-2">
                            <i className="pe-7s-cart"></i>
                        </div>
                        <div className="stat-content">
                            <div className="text-left dib">
                                <div className="stat-text"><span className="count">5</span></div>
                                <div className="stat-heading">Entretien</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-3">
                            <i className="pe-7s-browser"></i>
                        </div>
                        <div className="stat-content">
                            <div className="text-left dib">
                                <div className="stat-text"><span className="count">21</span></div>
                                <div className="stat-heading">Emplois</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="col-lg-3 col-md-6">
            <div className="card">
                <div className="card-body">
                    <div className="stat-widget-five">
                        <div className="stat-icon dib flat-color-4">
                            <i className="pe-7s-users"></i>
                        </div>
                        <div className="stat-content">
                            <div className="text-left dib">
                                <div className="stat-text"><span className="count">2</span></div>
                                <div className="stat-heading">Taches</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>















        
            <div class="col-md-6">

                <div class="card">
                    <div class="card-header">
                        <strong class="card-title">Taches en cours</strong>
                    </div>
                    <div class="card-body">
                        <div class="alert alert-primary" role="alert">
                            taches 1
                                    </div>
                        <div class="alert alert-secondary" role="alert">
                        taches 2
                                    </div>
                        <div class="alert alert-success" role="alert">
                        taches 3
                                    </div>
                        <div class="alert alert-danger" role="alert">
                        taches 4
                                    </div>
                        <div class="alert alert-warning" role="alert">
                        taches 5
                                    </div>
                       
                    </div>
                </div>

            </div>


            <div class="col-md-6">

                <div class="card">
                    <div class="card-header">
                        <strong class="card-title">Taches terminées</strong>
                    </div>
                    <div class="card-body">
                    <div class="alert alert-primary" role="alert">
                            taches 1
                                    </div>
                        <div class="alert alert-secondary" role="alert">
                        taches 2
                                    </div>
                        <div class="alert alert-success" role="alert">
                        taches 3
                                    </div>
                        <div class="alert alert-danger" role="alert">
                        taches 4
                                    </div>
                        <div class="alert alert-warning" role="alert">
                        taches 5
                                    </div>
                       
                    </div>
                </div>

            </div>



        
























    </div>

);

DashBoard.propTypes = {};

DashBoard.defaultProps = {};

export default DashBoard;