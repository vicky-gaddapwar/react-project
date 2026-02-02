export default function User({ username }: { readonly username?: string }) {
    return (
        <div>
            <h2>User Page</h2>
            <p>Welcome, {username}!</p>
        </div>
    );
}
