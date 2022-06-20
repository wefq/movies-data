import Select from "react-select";
import style from "./FiltersForm.module.scss";
import "../../../scss/index.scss"

const FiltersSelect = ({ options, name, onChange, value }) => {
	
	return (
		<div className="select_container">
			<span>{name}</span>
			<Select placeholder="выбрать" options={options} value={value} onChange={onChange} classNamePrefix="custom_select" />
		</div>
	);
};

export default FiltersSelect;
