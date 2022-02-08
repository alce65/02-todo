export function Header({ mainTitle, children }) {
    console.log('Header props:', mainTitle);
    return (
        <header className="app-header">
            <div>{mainTitle}</div>
            <p>{children}</p>
        </header>
    );
}
