import "./App.css";

const Header = (props) => {
	return (
		<div className="header">
			<h1>
				{props.course}
			</h1>
		</div>
	)
}

const Content = (props) => {
	return (
		<div class="course-part">
			<h3>{props.part}</h3>
			<p class="exercise-count"> 
				Amount of exercises: {props.exercises}
			</p>
		</div>
	)
}

const Total = (props) => {
	return (
		<div class="total-exercises">
			<p class="exercise-count">
				Total amount of exercises: {props.e1 + props.e2 + props.e3}
			</p>
		</div>
	)
}

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div class="container">
			<Header course={course} />
			<Content exercises={exercises1} part={part1} />
			<Content exercises={exercises2} part={part2} />
			<Content exercises={exercises3} part={part3} />
			<Total e1={exercises1} e2={exercises2} e3={exercises3} />
		</div>
	)
}

export default App