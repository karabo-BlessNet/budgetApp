
import AddItem from './addItem';
import DisplayTransation from './displayTransaction';

function Home(props){
    return(
        <div className="container">
            <DisplayTransation list={props.list}/>
            <AddItem  add={props.add} />

        </div>
    )
}

export default Home;