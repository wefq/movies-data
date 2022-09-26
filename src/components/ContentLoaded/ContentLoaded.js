import { Loading } from "../Loading/Loading";

export const ContentLoaded = ({ isPending, error, children, data }) => {
	return (
		<>
			{isPending ? <Loading /> : <> {error ? error : children}</>}
		</>
	);
};
