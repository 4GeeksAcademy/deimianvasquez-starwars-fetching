
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store } = useGlobalReducer()



	return (
		<div className="container">
			<h1 className="text-danger">Characters</h1>
			<div className="my-carousel">

				{
					store.characters.map((item, index) => (

						<div className="my-card">
							<img
								src={item.image}
								alt=""
								className="w-100"
							/>
							<div>
								<p>{item.properties.name}</p>
								<p>{item.properties.hair_color}</p>
								<p>{item.properties.eye_color}</p>

								<button>learn more</button>
								<button>fav</button>
							</div>
						</div>

					))
				}

			</div>
		</div>
	);
}; 