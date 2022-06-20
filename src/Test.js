import { useState } from "react";
import style from "./Test.module.scss";
import Button from "./components/Button/Button";

const Test = () => {
	const [select, setSelect] = useState(null);

	const handleSub = (e) => {
		e.preventDefault();
		console.log(select);
	};

	const bob = [
		{ value: "ноль", id: 0 },
		{ value: "адин", id: 1 },
		{ value: "два", id: 2 },
	];
	const handleClear = () => {
		setSelect("");
	};

	return (
		<div>
			<form onSubmit={handleSub}>
				<input
					type="text"
					list="lsot"
					value={select}
					onChange={(e) => {
						setSelect(e.target.value);
					}}
					placeholder="che"
				/>
				<datalist id="lsot">
					{bob.map((item, index) => (
						<option key={index} value={item.value} />
					))}
				</datalist>
				<input type="submit" />
				<button onClick={handleClear}>clear</button>
			</form>
		</div>

		// <div className={style.box}>
		// 	<a className={style.button} href="google">
		// 		Поиск
		// 	</a>
		// 	<button className={style.button}>Поиск</button>
		// 	<input className={style.button} type="button" value="Поиск" />

		// 	<Button type="submit" value="Один" />
		// 	<Button type="button" children="Один" />
		// 	<Button type="link" children="Один" href="/filters" />
		// </div>
	);
};

export default Test;
