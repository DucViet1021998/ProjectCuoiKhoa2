import Header from "../ComponentsLayout/Header";



export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content"> {children} </div>
            </div>
        </div>
    )
}