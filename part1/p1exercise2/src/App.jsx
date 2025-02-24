import "./App.css";

const Part = ({ course, part, exercises }) => {
	return (
	  <div>
		<div className="header">
		  <h1>{course}</h1>
		</div>

		{part.map((p, index) => (
		  <div className="course-part" key={index}>
			<h2>{p}</h2>
			<p className="exercise-count">
			  Amount of exercises: {exercises[index]}
			</p>
		  </div>
		))}

		<div className="total-exercises">
			<h2>Total exercises</h2>
			<p>Exercises: {exercises.reduce((sum, current) => sum + current, 0)}</p>
		</div>
	  </div>
	);
  };
  

const App = () => {
	const course = 'Half Stack application development'
	const part1 = 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using Props To Pass Data'
	const exercises2 = 7
	const part3 = 'State of A Component'
	const exercises3 = 14

	const parts = [part1, part2, part3];
	const exerciseCalc = [exercises1, exercises2, exercises3];

	return (
		<div className="container">
			<Part course={course} part={parts} exercises={exerciseCalc}/>
		</div>
	)
}

export default App