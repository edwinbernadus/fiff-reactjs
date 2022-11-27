import React from 'react';
import axios from "axios";

class ListFile extends React.Component {

    isLoad = false
    state = {loading_progress: "no_data",repo_items : []};

    constructor() {
        super();
    }

    componentDidMount() {
        console.log("component did mount")
        if (this.isLoad == false) {
            this.isLoad = true
            this.loadingPage()
        }

    }

    getList(){
        // hint_show_webservice_result_on_list
        const items = this.state.repo_items.map((todo, index) =>
            <li key={index} style={{marginBottom:"3px"}}>
                {todo.id} - {todo.title} -
                {/*hint_button_on_list*/}
                <button onClick={ () => this.buttonClicked(todo) } style={{marginLeft:"10px"}}>
                    Inquiry Detail
                </button>

            </li>
        );
        return items
    }

    buttonClicked(item){
        // hint_show_detail_item_on_alert
        alert(item.id + " - " + item.title)
    }


    render() {

        return <div style={{ "marginLeft": "25px"}}>
            <h2>Loading:  {this.state.loading_progress}</h2>
            {this.getList()}
        </div>

    }

    async loadingPage() {
        // hint_show_loading_indicator
        this.setState({
            loading_progress : "loading"
        });
        // hint_loading_webservice
        let url = "https://jsonplaceholder.typicode.com/albums"
        let output = await axios.get(url)
        this.setState({
            loading_progress : "complete", repo_items : output.data
        });
    }
}


export default ListFile;
