export default function MyComponent({user}) {
    return (
        <div>
            <h1>My Component</h1>
            {user?.name ? 
                (<h2>Hello, {user.name}</h2>)
                : (<div>
                    <h2>Plz Login</h2>
                    <button id="login">Login</button>
                </div>)}
        </div>
    );
}