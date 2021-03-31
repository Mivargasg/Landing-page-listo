import React from "react";

//include images into your bundle

import { Navbar } from "./navbar";
import { Jumbotromp } from "./jumbotromp";
import { Card } from "./card";
import { Footer } from "./footer";
//create your first component
export function Home() {
	return (
		<div className="container text-center mt-5">
			<Navbar />
			<Jumbotromp />
			<div className="d-flex justify-content-center">
				<Card title={"React"} body="Programando APP" />
				<Card title={"Titulo"} body="DDDDDD" />
				<Card title={"Miguel"} body="Programando APP" />
				<Card title={"Laura"} body="DDDDDD" />
			</div>
			<Footer />
		</div>
	);
}
