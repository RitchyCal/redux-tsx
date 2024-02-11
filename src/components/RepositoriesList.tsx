import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useAction";

const RepositoriesList: React.FC = () => {
    const [term, setTerm] = useState('');
    const { seachRepositories } = useActions();
    const {data, error, loading} = useTypedSelector((state) => state.repositories);

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        seachRepositories(term);
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={term} onChange={e => setTerm(e.target.value)} />
                <button>Search</button>
            </form>
            {error && <h3>{error}</h3>}
            {loading && <h3>Loading</h3>}
            {!error && !loading && data.map((name) => <div >{name}</div>)}
        </div>
    )
};

export default RepositoriesList