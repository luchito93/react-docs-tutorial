export default function BoilingVeredict (props) {
    if(props.celcius >= 100) {
        return (<p>The water wold boild</p>)
    }
    else {
        return (<p>The wather wold not boild</p>)
    }
}