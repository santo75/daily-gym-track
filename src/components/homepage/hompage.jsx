import React from "react";
import "./homepage.css";
import Card from "../card/card";

const Homepage = () => {
    const data = [
            {
                name: "Michel",
                day: 1, 
                imgURL: "https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?w=900&t=st=1667632339~exp=1667632939~hmac=4a3da3b394db6871769ba1d33f76c46aa6e3be83888c2698d50829b0fc1e059e"
            },
            {
                name: "Thomas",
                day: 2,
                imgURL: "https://img.freepik.com/free-photo/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon_155003-45614.jpg?w=1380&t=st=1667632741~exp=1667633341~hmac=c432b6489d3b94db5e9a2a033e1ed53e6b690e3e856488145bf631b70c26d3b8"
            },
            {
                name: "Michel",
                day: 1,
                imgURL: "https://img.freepik.com/premium-photo/strong-boxer-stance-with-handwraps-his-fists-with-girlfriend-standing-him_136403-3279.jpg?w=1380"
            },
            {
                name: "Thomas",
                day: 2, 
                imgURL: "https://img.freepik.com/free-photo/athletic-shirtless-young-male-fitness-model-holds-dumbbell-with-light-isolated-dark-background_613910-20.jpg?w=740&t=st=1667632821~exp=1667633421~hmac=70534dd7292a0a13ee962fa192d56dbb0b8036f14566b6b9572f87c190a09d4c"
            }
        ]
    return (
        <div>
            <div className="top-section">
                <h1>WELCOME TO <span className="day"><br />30</span> DAYS <br />TRAINING PROGRAM</h1>
                <h1>DAY <span className="day">1</span></h1>
            </div>
            <div className="card-section">
                {data.map(d => <Card name={d.name} day={d.day} imgURL={d.imgURL}/>)}
            </div>
        </div>
    )
}

export default Homepage;