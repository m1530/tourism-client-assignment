import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

function PrivateRoute({ children, ...rest }) {
    const { users, loading } = useAuth();
    if (loading) {
        return (
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                users?.displayName ? (children) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;