import { CustomSelect } from "../CustomSelect/CustomSelect";
import style from "./FiltersForm.module.scss";

export const FiltersSelect = ({ options, name, onChange, value }) => {
	return (
		<div className={style.select_container}>
			<span>{name}</span>
			<CustomSelect options={options} value={value} onChange={onChange} />
		</div>
	);
};
