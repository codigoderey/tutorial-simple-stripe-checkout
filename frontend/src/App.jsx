import { useState } from "react";
function App() {
	const [product, setProduct] = useState({
		pName: "Smartwatch",
		pPrice: 100,
		pImage:
			"https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
	});

	const onSubmit = (e) => {
		e.preventDefault();
		fetch("http://localhost:4242/create-checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
	};

	return (
		<div className="container">
			<div className="product">
				<div className="product__image">
					<img
						src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
						alt="product"
					/>
				</div>
				<div className="product__details">
					<h3 className="product__name">Product Name</h3>
					<div className="product__price">$ 100</div>
				</div>

				<form
					action="http://localhost:4242/create-checkout-session"
					method="POST">
					<input className="btn__submit" type="submit" value="Buy now" />
				</form>
			</div>
		</div>
	);
}

export default App;
