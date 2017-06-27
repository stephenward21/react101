var products = [
	{
		category: 'Sporting Goods',	
		price: '$49.99',
		name: 'Football',
		inStock: true
	},
	
	{
		category: 'Sporting Goods',	
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',	
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},

	{
		category: 'Electronics',	
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',	
		price: '$399.99',
		name: 'iPhone 5',
		inStock: false
	},
	{
		category: 'Electronics',	
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]

function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	if(props.randomThing.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.randomThing.name}</td>
			<td>{props.randomThing.price}</td>
		</tr>
	)
}

function ProductTable(props){

	//Init a local var to hold all our rows
	var rows = [];
	//Init a local var to keep track of what category we are on
	var lastCategory = "";
	var key = 0;
	props.products.map(function(currProduct, index){
		if(currProduct.category !== lastCategory){
			//we need to add this to our rows array becasue its a new cat
			rows.push(<ProductCategoryRow key={key} category={currProduct.category} />)
			lastCategory = currProduct.category;
			key++;
		}
		rows.push(<ProductRow key={key} randomThing={currProduct} />)
		key++;
	});
	console.log(rows);


// ]

	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}

function SearchBar(props){
	return(
		<form class="search-bar">
			<input type="text" placeholder="Search..." />
			<div>
				<input type="checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}

function FilterableProductTable(props){
	return(
		<div className="filterable-product-table">
			<SearchBar />
			<ProductTable products={props.products} />
		</div>
	)
}

// We arent using a class (yet). So, we have to include props as a param
function Application(props){
	// MUST return a single virtualDOM element
	return(
		<FilterableProductTable products={products} />
	)
}

//2 args, what and the where
ReactDOM.render(
	<Application products={products} />,
	document.getElementById('container')
)