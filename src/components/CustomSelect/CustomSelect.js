import { useState, useEffect } from "react";
import { InputField } from "../InputField/InputField.js";
import style from "./CustomSelect.module.scss";

export const CustomSelect = ({ options, value, onChange }) => {
	const [showList, setShowList] = useState(false);

	const filteredOptions = options.filter((item) => {
		return item.value.toLowerCase().includes(value.toLowerCase());
	});

	const handleChangeInput = (e) => {
		onChange(e.target.value);
	};

	const handleClickInput = (e) => {
		e.stopPropagation();
		e.target.id === "filter" ? setShowList(true) : setShowList(false);
	};

	const handleClickItem = (e) => {
		onChange(e.target.innerText);
		setShowList(false);
	};

	useEffect(() => {
		const handleWindowClick = () => setShowList(false);

		if (showList) {
			window.addEventListener("click", handleWindowClick);
		} else {
			window.removeEventListener("click", handleWindowClick);
		}

		return () => window.removeEventListener("click", handleWindowClick);
	}, [showList, setShowList]);

	return (
		<div className={style.filter}>
			<div className={style.filter__input_box}>
				<InputField 
                    placeholder="выбрать" 
                    type="text" id="filter" 
                    value={value} 
                    onChange={handleChangeInput} 
                    onClick={handleClickInput} 
                />

				{value && (
					<div 
                        className={style.filter__delete} 
                        onClick={() => onChange("")}
                    >
						&#215;
					</div>
				)}
			</div>

			{showList && (
				<div className={style.filter__list}>
					{filteredOptions.map((item) => (
						<div className={style.filter__list__item} key={item.value} onClick={handleClickItem}>
							{item.value}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
