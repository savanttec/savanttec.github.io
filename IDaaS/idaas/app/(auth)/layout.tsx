const AuthLayout = ({children}: any) => {
    return (
            <div>
                <nav className="bg-red-500 text-white">
                    This is the shared Auth nav bar without /auth prefix
                </nav>
                {children}

            </div>
    );

}

export default AuthLayout;