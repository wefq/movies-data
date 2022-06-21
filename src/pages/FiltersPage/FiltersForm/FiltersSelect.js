import Select from "react-select";
import "../../../scss/index.scss";

export const FiltersSelect = ({ options, name, onChange, value }) => {
	return (
		<div className="select_container">
			<span>{name}</span>
			<Select placeholder="выбрать" options={options} value={value} onChange={onChange} classNamePrefix="custom_select" />
		</div>
	);
};
