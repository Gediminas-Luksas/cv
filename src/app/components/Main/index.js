import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

import data from './data';

function Main(props) {
	const { language } = props;
	const {
		lable,
		subtitle2,
		lableCodeAcademy,
		school,
		schoolCodeAcademy,
		majorCodeAcademy,
		major,
	} = data.education[language];
	const { lable3, subtitle, list } = data.skills[language];
	const { lable4, value } = data.hobies[language];
	const { lable5, value2, value6 } = data.references[language];

	return (
		<main>
			<section className="Section">
				<div className="Section--left">
					<div className="Section--left--column">
						<h3>{lable}</h3>
					</div>
				</div>
				<div className="Section--right">
					<span>{subtitle2}</span>
					<h2>{school}</h2>
					<p>
						<span>{major.lable} </span>
					</p>
					{major.value}
				</div>
			</section>
			<section className="Section">
				<div className="Section--left">
					<div className="Section--left--column">
						<h3>{lableCodeAcademy}</h3>
					</div>
				</div>
				<div className="Section--right">
					<span>{subtitle}</span>
					<h2>{schoolCodeAcademy}</h2>
					<p>
						<span>{majorCodeAcademy.lable} </span>
					</p>
					{majorCodeAcademy.value}
				</div>
			</section>
			<section className="Section">
				<div className="Section--left">
					<div className="Section--left--column">
						<h3>{lable3}</h3>
					</div>
				</div>
				<div className="Section--right">
					<div>
						{list.map(({ responsibilities }, index) => (
							<div key={index}>
								<ul>{responsibilities.map((values, i) => <li key={i}>{values}</li>)}</ul>
							</div>
						))}
					</div>
				</div>
			</section>
			<section className="Section">
				<div className="Section--left">
					<div className="Section--left--column">
						<h3>{lable5}</h3>
					</div>
				</div>
				<div className="Section--right">
					<p>{value2}</p>
					<p>{value6}</p>
				</div>
			</section>
			<section className="Section">
				<div className="Section--left">
					<div className="Section--left--column">
						<h3>{lable4}</h3>
					</div>
				</div>
				<div className="Section--right">
					<p>{value}</p>
				</div>
			</section>
		</main>
	);
}
Main.propTypes = {
	language: PropTypes.oneOf(['en', 'lt']),
};

Main.defaultProps = {
	language: 'en',
};
export default Main;
