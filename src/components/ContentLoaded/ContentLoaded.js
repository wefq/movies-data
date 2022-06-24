import { Loading } from "../Loading/Loading";

export const ContentLoaded = ({ isPending, error, children, data }) => {
	return (
		<>
			{error && <div>{error}</div>}
			{isPending ? <Loading /> : <> {children}</>}
		</>
	);
};
