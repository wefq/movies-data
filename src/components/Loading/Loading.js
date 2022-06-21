import style from "./Loading.module.scss";

export const Loading = () => {
	return (
		<div className={style.loading_container}>
			<div className={style.lds_dual_ring}> </div>
		</div>
	);
};
