// Make component called "Application" that returns a single DOM elements
// Components should be uppercase.

// The app works, but it's big.  It's no better if we copy and pasted into our html.
// If it get's any bigger, we are in big trouble bc with have to manage both jsx and html.  
// Let's break app into components:
// 1. Header
// 2. Multiple Teams
// 3. Each team has a counter

// props are immutable. They do not change...
// State is a piece of data, that DOES change.
// State has:
// 1. An initial value
// 2. (Infinite number of) changed values
// All gamesBack start at 0, some kind of mutation occurs(someone wins/loses)

// in ES5, to us state, React provides a component for us to use.
// It takes an object as a param.

// ANYTIME STATE CHANGES... THE COMPONENT WILL RE-RENDER

var teams = [
	{
		name: "Braves",
		gamesBack: 0,
		city: "Atlanta"
	},
	{
		name: "Nationals",
		gamesBack: 0,
		city: "Washington D.C."
	},
	{
		name: "Marlins",
		gamesBack: 0,
		city: "Florida"
	},
	{
		name:"Mets",
		gamesBack:0,
		city: "New York"
	},
	{
		name:"Phillies",
		gamesBack:0,
		city:"Philadeliphia"
	}
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="row">
			<div className="col-sm-8 col-sm-offset-2 team">
				<div className="team-name col-sm-12">{props.city} {props.name}</div>
				<Counter gamesBack={props.gamesBack} />
			</div>
		</div>
	)
}

// the only required property is RENDER.
var Counter = React.createClass({

	getInitialState: function(){
		var stateObject = {
			gamesBack: 0
		}
		return stateObject;

	},

	addGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack + 1,
		})

	},

	loseGame: function(){
		this.setState({
			gamesBack: this.state.gamesBack - 1,
		})

	},

	render: function(){
		return(
			<div className="counter">
				<button onClick={this.addGame} className="btn btn-success">+</button>
				<div className="games-back">{this.state.gamesBack}</div>
				<button onClick={this.loseGame} className="btn btn-danger">-</button>
			</div>
		)
	}

})

function Application(props){
	return(

		// use map to loop through teams array.
		// So we no longer need: "Braves", "Brewers", etc.
		// props.team is an array with team objects
		// send team the team objec, in map es6 style.

		<div className="container">
			<Header title={props.title}/>
			{props.teams.map((team,index)=>{
				return <Team key={index} name={team.name} gamesBack={team.gamesBack} city={team.city} />

			})}
		</div>
	)
}

// Add a prop to send the title to the application component
ReactDOM.render(
	<Application title="NL East Scoreboard" teams={teams} />,
	document.getElementById('root')
)

