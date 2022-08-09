import React, { useState, useEffect } from "react";

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {

        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span> COVID-19 TRACKER DASHBOARD </h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((currentElement, index) => {
                                    return (
                                        <tr key={index}>
                                            <td> {currentElement.state} </td>
                                            <td> {currentElement.confirmed} </td>
                                            <td> {currentElement.recovered} </td>
                                            <td> {currentElement.deaths} </td>
                                            <td> {currentElement.active} </td>
                                            <td> {currentElement.lastupdatedtime} </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise;