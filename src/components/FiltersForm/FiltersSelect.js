import { CustomSelect } from "../CustomSelect/CustomSelect";
import "../../scss/index.scss";

export const FiltersSelect = ({ options, name, onChange, value }) => {
	return (
		<div className="select_container">
			<span>{name}</span>
			<CustomSelect options={options} value={value} onChange={onChange}  />
		</div>
	);
};
