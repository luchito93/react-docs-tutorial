import Calculator from "../../Calculator";
import Navbar from "./Navbar";

export default function VolidCalculator(props) {
    return (
        <>
            <Navbar />
            <div className="container mx-auto">
                <Calculator />
            </div>
        </>
    )
}