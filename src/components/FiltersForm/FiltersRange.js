import { InputField } from "../InputField/InputField.js";
import style from "./FiltersForm.module.scss";

export const FiltersRange = ({ setValueFrom, setValueTo, valueFrom, valueTo, name }) => {
	return (
		<div className={style.filter_range}>
			<span>{name}</span>

			<div className={style.fields}>
				<InputField
					type="number"
					placeholder="от"
					value={valueFrom}
					onChange={(e) => {
						setValueFrom(e.target.value);
					}}
				/>

				<InputField
					type="number"
					placeholder="до"
					value={valueTo}
					onChange={(e) => {
						setValueTo(e.target.value);
					}}
				/>
			</div>
		</div>
	);
};
