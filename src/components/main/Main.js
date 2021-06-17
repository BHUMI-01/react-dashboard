import "./Main.css";
import hello from "../../assests/hello.png"
import Chart from "../charts/Chart";

const Main=() => {
    return(
        <main>
            <div className="main__conatiner">
                <div className="main__title">
                    <img src={hello} alt="hello" />
                    <div className="main__greeting">
                        <h1>Hello Ansys !</h1>
                        <p>Welcome to your admin dashbaord</p>
                    </div>

                </div>

                <div className="main__cards">
                        <div className="card">
                            <i className="fa fa-desktop fa-2x text-black"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Software</p>
                                <span className="font-bold text-title">$20.00</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fa fa-users fa-2x text-yellow"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Manangement</p>
                                <span className="font-bold text-title">$30.00</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fa fa-apple fa-2x text-red"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Support</p>
                                <span className="font-bold text-title">$40.00</span>
                            </div>
                        </div>
                        <div className="card">
                            <i className="fa fa-microchip fa-2x text-lightgray"></i>
                            <div className="card_inner">
                                <p className="text-primary-p">Hardware</p>
                                <span className="font-bold text-title">$25.00</span>
                            </div>
                        </div>
                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Total Profit</h1>
                                <p>September 2020</p>
                            </div>
                            <i className="fa fa-usd-circle"></i>
                            
                        </div>
                        <Chart />
                    </div>
                    <div className="charts__right">
                        <div className="charts___right__title">
                            <div>
                                <h1>Invoices</h1>
                                <p>Used</p>
                            </div>
                        
                        <i className="fa fa-dollar-sign"></i>
                        </div>
                        <div className="charts__right__cards">
                            <div className="card1">
                                <h1>Overdue</h1>
                                <p>$12,095</p>
                            </div>

                            <div className="card2">
                                <h1>Total Outstanding</h1>
                                <p>$33,363</p>
                            </div>

                            <div className="card3">
                                <h1>In Draft</h1>
                                <p>$4,500</p>
                            </div>

                            <div className="card4">
                                <h1>Revenue</h1>
                                <p>$12,125</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}

export default Main;