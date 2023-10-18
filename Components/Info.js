import React from 'react'

export default function Info(){
    return(
        <>
            <img src="https://scontent-atl3-2.xx.fbcdn.net/v/t39.30808-6/347562122_787294136049469_2390659009494289523_n.jpg?stp=cp6_dst-jpg&_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=4tfATFgwE9AAX-b13kp&_nc_ht=scontent-atl3-2.xx&oh=00_AfBQyPTauSOMwTIos1fl7TjOitPiVcqhpaB3ML_5gmoQaQ&oe=6534A8EC" className="info-img"/>
            <div className="info-text">
                <h1>Cameron Courtois</h1>
                <h2>Frontend Developer</h2>
                <h3>cameronjcourtois@gmail.com</h3>
            </div>
            <div className="social-btns">
                <button className="email-btn "><i className="fa-solid fa-envelope"></i>Email</button>
                <button className="linkedin-btn "><i className="fa-brands fa-linkedin"></i>LinkedIn</button>
            </div>
        </>
    )
}